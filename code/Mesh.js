function nurbscallback(event) {
    //post("nurbscallback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");			
    if (event.eventname == "matrixoutput") {
        var mesh = nurbsmap[event.subjectname];
        if(mesh) {
            // create javascript matrix from matrixoutput event arg
            var tempMat = new JitterMatrix(event.args[0]);
            mesh.nurbsMat.frommatrix(tempMat);
            if (!mesh.hasNurbsMat) {
                mesh.assignNurbsMatToMesh();
                mesh.hasNurbsMat = 1;
            }
        }
    }
}
var nurbsmap = {};

function Mesh() {
    this.ID = -1;

    this.meshPoints = null;
    this.meshGrid = null;
    this.meshFull = null;
    this.nurbs = null;
    this.nurbsDim = [40, 40];

    this.enableMesh = gShowMeshes;

    this.useNurbs = 0;
    this.currentWindowRatio = -1;
    this.nurbsLstnr = null;
    this.hasNurbsMat = 0;
    this.textureName = "";

    this.textureCoordMat = new JitterMatrix(2, "float32", [10, 10]);;
    this.nurbsMat = new JitterMatrix(3, "float32", [4, 4]);
    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);
    this.boundingMat = new JitterMatrix(3, "float32", 10);
    this.adjacentCellsMat = new JitterMatrix(3, "float32", 8);

    this.initMesh = function(dimensions, drawto, ID, useNurbs) {
        this.ID = ID;
        this.useNurbs = useNurbs;
        this.currentWindowRatio = gWindowRatio;

        var newDim = this.checkDimForNurbs(dimensions);

        this.initMeshPoints(drawto);
        this.initMeshGrid(drawto);
        this.initMeshFull(drawto);
        this.initNurbs(drawto);

        this.setMeshDim(newDim);    // calculate and set matrices dimensions
        this.initPositionMat();         // init vertex mat
        if (this.useNurbs) { 
            this.assignControlMatToNurbs(); // assign vertex mat to nurbs
            this.hasNurbsMat = 0;
        } else {
            this.assignPositionMatToMesh(); // assign vertex mat to mesh
        }
        
        this.calcMeshBoundsMat();   // calculate mesh boundaries 
        this.initTextureCoordMat(); // init texture coord mat
    }

    this.changeMode = function(mode) {
        if (mode != this.useNurbs) {
            this.useNurbs = mode;
            this.nurbs.enable = this.useNurbs;
            if (this.useNurbs) { 
                this.resizeMesh(this.positionMat.dim);
            } else {
                this.assignPositionMatToMesh(); // assign vertex mat to mesh
                this.textureCoordMat.dim = this.positionMat.dim.slice();
            }
            this.initTextureCoordMat();
        }
    }

    this.initMeshPoints = function(drawto_) {
        this.meshPoints = new JitterObject("jit.gl.mesh");
        this.meshPoints.enable = this.enableMesh;
        this.meshPoints.draw_mode = "points";
        this.meshPoints.depth_enable = 0;
        this.meshPoints.layer = FRONT;
        this.meshPoints.color = WHITE;
        this.meshPoints.point_size = 10;
        this.meshPoints.drawto = drawto_;
    }

    this.initMeshGrid = function(drawto_) {
        this.meshGrid = new JitterObject("jit.gl.mesh");
        this.meshGrid.enable = this.enableMesh;
        this.meshGrid.draw_mode = "quad_grid";
        this.meshGrid.depth_enable = 0;
        this.meshGrid.layer = MIDDLE;
        this.meshGrid.color = randomColor();
        this.meshGrid.poly_mode = [1, 1];
        this.meshGrid.line_width = 3;
        this.meshGrid.drawto   = drawto_;
    }

    this.initMeshFull = function(drawto_) {
        this.meshFull = new JitterObject("jit.gl.mesh");
        this.meshFull.draw_mode = "quad_grid";
        this.meshFull.depth_enable = 0;
        this.meshFull.layer = BACKGROUND;
        this.meshFull.color = WHITE;
        this.meshFull.drawto   = drawto_;
    }

    this.initNurbs = function(drawto_) {
        this.nurbs = new JitterObject("jit.gl.nurbs");
        this.nurbs.dim = this.nurbsDim.slice();
        this.nurbs.depth_enable = 0;
        this.nurbs.layer = BACKGROUND;
        this.nurbs.color = WHITE;
        this.nurbs.ctlshow = 0;
        this.nurbs.matrixoutput = 1;
        this.nurbs.drawto = drawto_;
        this.nurbs.enable = this.useNurbs * this.enableMesh;
        this.nurbs.name = "nurbs_"+this.ID;

        this.nurbsMat = new JitterMatrix(3, "float32", this.nurbs.dim.slice());

        this.nurbsLstnr = new JitterListener(this.nurbs.name, nurbscallback);
        nurbsmap[this.nurbs.name] = this;
    }

    this.freeMesh = function() {
        if (this.positionMat) {
            this.positionMat.freepeer();
            this.boundingMat.freepeer();
            this.nurbsMat.freepeer();
            this.adjacentCellsMat.freepeer();
            this.textureCoordMat.freepeer();
            this.meshPoints.freepeer();
            this.meshGrid.freepeer();
            this.meshFull.freepeer();
            this.nurbsLstnr.subjectname = "";
            nurbsmap[this.nurbs.name] = null;
            this.nurbs.freepeer();
        }
    }

    this.showMesh = function(show) {
        this.meshGrid.enable = show;
        this.meshPoints.enable = show;
    }

    this.setMeshDim = function(dimensions)
    {   
        if (dimensions[0] > 0 && dimensions[1] > 0) {
            this.positionMat.dim = dimensions.slice();
            this.boundingMat.dim = dimensions[0]*2 + (dimensions[1] * 2) - 4;
            if (this.useNurbs) {
                this.textureCoordMat.dim = this.nurbsDim.slice();
            } else {
                this.textureCoordMat.dim = dimensions.slice();
            }
        } 
        else {
            this.positionMat.dim = [4,4];
            this.boundingMat.dim = 4*2 + (4 * 2) - 4;
            this.textureCoordMat.dim = [4, 4];
        }
    }

    this.resizeMesh = function(dimensions) {
        var newDim = this.checkDimForNurbs(dimensions);

        var tempMat = new JitterMatrix(3, "float32", newDim);
        tempMat.interp = 1;

        tempMat.frommatrix(this.positionMat);
        
        this.setMeshDim(newDim);

        this.positionMat.frommatrix(tempMat);
        tempMat.freepeer();

        if (this.useNurbs) {
            this.assignControlMatToNurbs(); // set the new position as the control matrix for nurbs
            this.hasNurbsMat = 0;
        } else {
            this.assignPositionMatToMesh();
        }

        this.initTextureCoordMat();
        this.calcMeshBoundsMat();
    }


    this.assignPositionMatToMesh = function() {
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
        this.meshFull.vertex_matrix(this.positionMat.name);
    }

    this.assignNurbsMatToMesh = function() {
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
        this.meshFull.vertex_matrix(this.nurbsMat.name);
    }

    this.assignTextureCoordMatToMesh = function() {
        this.meshFull.texcoord_matrix(this.textureCoordMat.name);
    }

    this.assignControlMatToNurbs = function() {
        this.nurbs.ctlmatrix(this.positionMat.name);
    }

    this.assignTextureToMesh = function(textureName) {
        this.textureName = textureName;
        this.meshFull.jit_gl_texture(this.textureName);
    }
    
    //-------------------------------------------

    this.initTextureCoordMat = function() {   
        var xStartingPoint = (1.0/meshes) * this.ID;
        var xCoordTarget = xStartingPoint + (1.0/meshes); // 0 a 1. +0.25
        for (var i=0; i<this.textureCoordMat.dim[0]; i++)
        {
            for (var j=0; j<this.textureCoordMat.dim[1]; j++)
            {   
                var xCoord = map(i, 0, this.textureCoordMat.dim[0]-1, xStartingPoint, xCoordTarget);
                this.textureCoordMat.setcell2d(i,j, xCoord, j/(this.textureCoordMat.dim[1]-1));
            }
        }
        this.assignTextureCoordMatToMesh();  // assign texture coord mat to mesh
    }

    // Set values for position matrix
    this.initPositionMat = function() {    
        for(var i=0; i<this.positionMat.dim[0]; i++) {
            for(var j=0; j<this.positionMat.dim[1]; j++) {   
                var xVal = (i / (this.positionMat.dim[0]-1));
                xVal = map(xVal, 0., 1., -this.currentWindowRatio + ((this.currentWindowRatio / (meshes/2)) * this.ID), 
                -this.currentWindowRatio+(this.currentWindowRatio/(meshes/2)) + (this.currentWindowRatio / (meshes/2)) * this.ID);
                var yVal = ((j / (this.positionMat.dim[1]-1)) * 2.0) - 1.0;

                this.positionMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }
    }   

    // Only scale X when window is resized
    this.scaleMesh = function() {
        for(var i=0; i<this.positionMat.dim[0]; i++) {
            for(var j=0; j<this.positionMat.dim[1]; j++) {   
                var xOrigVal = this.positionMat.getcell(i,j)[0];
                var yVal = this.positionMat.getcell(i,j)[1];
                var scaledXVal = xOrigVal / this.currentWindowRatio;
                var newXVal = scaledXVal*gWindowRatio;
                this.positionMat.setcell2d(i, j, newXVal, yVal, 0.0);
            }
        }
        this.currentWindowRatio = gWindowRatio;
        if (this.useNurbs) { 
            this.assignControlMatToNurbs(); 
            this.hasNurbsMat = 0;
        } else {
            this.assignPositionMatToMesh();
        }
        this.calcMeshBoundsMat();
    }

    this.checkIfMouseInsideMesh = function(mouseWorld) {
        if (isPointInsidePolygon(mouseWorld, this.boundingMat)) {
            return this.ID;
        } else {
            return -1;
        }
    }
    
    this.mouseIsCloseToVertex = function(mouseWorld) {   
        for (var i=0; i<this.positionMat.dim[0]; i++)
        {
            for (var j=0; j<this.positionMat.dim[1]; j++)
            {
                var currVertexPos = this.positionMat.getcell(i,j);
                var distFromMouse = calcDist2D(currVertexPos.slice(0,2), mouseWorld.slice(0,2));

                if (distFromMouse <= gMinimumSelectionDist) {
                    gGraphics.drawCircle(currVertexPos);
                    return [i, j].slice();
                }
            }
        } 
        return [-1, -1].slice();
    } 

    this.moveVertex = function(coordsWorld, cellIndex) {
        if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
            this.setVertexPosInMat(coordsWorld, cellIndex);
            if (this.useNurbs) {
                // this.assignNurbsMatToMesh();
                this.hasNurbsMat = 0;
            } else {
                this.assignPositionMatToMesh();
            }
            this.assignControlMatToNurbs();
            gGraphics.drawCircle(coordsWorld);
         }
    }

    this.setVertexPosInMat = function(coordsWorld, cellIndex) {
        this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    }

    this.calcMeshBoundsMat = function() {        
        // Get the bounding vertices that are on the edges of the polygon in clockwise order
        var boundingArray = [];
        var pad = 0.15; // pad so that the mesh is checked also when mouse is outside of it

        // TOP
        for (var i=0; i < this.positionMat.dim[0]; i++) {
            var xVal = this.positionMat.getcell(i, 0)[0];
            var yVal = this.positionMat.getcell(i, 0)[1] - pad;
            boundingArray.push([xVal, yVal]);
        }
        // RIGHT
        for (var j=1; j < this.positionMat.dim[1]; j++) {
            var xVal = this.positionMat.getcell(this.positionMat.dim[0]-1, j)[0] + pad;
            var yVal = this.positionMat.getcell(this.positionMat.dim[0]-1, j)[1];
            boundingArray.push([xVal, yVal]);
        }
        // BOTTOM
        for (var k=this.positionMat.dim[0]-2; k >= 0; k--) {
            var xVal = this.positionMat.getcell(k, this.positionMat.dim[1]-1)[0];
            var yVal = this.positionMat.getcell(k, this.positionMat.dim[1]-1)[1] + pad;
            boundingArray.push([xVal, yVal]);
        }
        // LEFT
        for (var z=this.positionMat.dim[1]-2; z > 0; z--) {
            var xVal = this.positionMat.getcell(0, z)[0] - pad;
            var yVal = this.positionMat.getcell(0, z)[1];
            boundingArray.push([xVal, yVal]);
        }
        // Transfer those vertices from the array to the boundingMat matrix
        for (var i=0; i<boundingArray.length; i++) {
            this.boundingMat.setcell1d(i, boundingArray[i][0], boundingArray[i][1]);
           // postln("inside bounding "+this.boundingMat.getcell(i));
        }
    }

    this.calcAdjacentCellsMat = function(cellIndex) {
        var cell = [];
        var leftX = clamp(cellIndex[0]-1, 0, this.positionMat.dim[0]-1);
        var centerX = cellIndex[0];
        var rightX  = clamp(cellIndex[0]+1, 0, this.positionMat.dim[0]-1);
        var topY = clamp(cellIndex[1]+1, 0, this.positionMat.dim[1]-1);
        var centerY = cellIndex[1];
        var bottomY = clamp(cellIndex[1]-1, 0, this.positionMat.dim[1]-1);

        cell = this.positionMat.getcell(leftX, topY).slice();
        if (cellIndex[1]+1 > this.positionMat.dim[1]-1) {
            cell[1] = 1;
        }
        if (cellIndex[0]-1 < 0) {
            cell[0] = -gWindowRatio;
        }
        this.adjacentCellsMat.setcell1d(0, cell[0], cell[1], 0.0); // TOP LEFT

        cell = this.positionMat.getcell(centerX, topY).slice();
        if (cellIndex[1]+1 > this.positionMat.dim[1]-1) {
            cell[1] = 1;
        }
        if (cellIndex[1]+1 > this.positionMat.dim[1]-1) {
            cell[1] = 1;
        }
        this.adjacentCellsMat.setcell1d(1, cell[0], cell[1], 0.0); // TOP CENTER

        cell = this.positionMat.getcell(rightX, topY).slice();
        if (cellIndex[1]+1 > this.positionMat.dim[1]-1) {
            cell[1] = 1;
        }
        if (cellIndex[0]+1 > this.positionMat.dim[0]-1) {
            cell[0] = gWindowRatio;
        }
        this.adjacentCellsMat.setcell1d(2, cell[0], cell[1], 0.0); // TOP RIGHT

        cell = this.positionMat.getcell(rightX, centerY).slice(); 
        if (cellIndex[0]+1 > this.positionMat.dim[0]-1) {
            cell[0] = gWindowRatio;
        }
        this.adjacentCellsMat.setcell1d(3, cell[0], cell[1], 0.0); // RIGHT CENTER

        cell = this.positionMat.getcell(rightX, bottomY).slice();
        if (cellIndex[0]+1 > this.positionMat.dim[0]-1) {
            cell[0] = gWindowRatio;
        }
        if (cellIndex[1]-1 < 0) {
            cell[1] = -1;
        }
        this.adjacentCellsMat.setcell1d(4, cell[0], cell[1], 0.0); // BOTTOM RIGHT

        cell = this.positionMat.getcell(centerX, bottomY).slice();
        if (cellIndex[1]-1 < 0) {
            cell[1] = -1;
        }
        this.adjacentCellsMat.setcell1d(5, cell[0], cell[1], 0.0); // BOTTOM CENTER

        cell = this.positionMat.getcell(leftX, bottomY).slice();
        if (cellIndex[0]-1 < 0) {
            cell[0] = -gWindowRatio;
        }
        if (cellIndex[1]-1 < 0) {
            cell[1] = -1;
        }
        this.adjacentCellsMat.setcell1d(6, cell[0], cell[1], 0.0); // BOTTOM LEFT

        cell = this.positionMat.getcell(leftX, centerY).slice();
        if (cellIndex[0]-1 < 0) {
            cell[0] = -gWindowRatio;
        }
        this.adjacentCellsMat.setcell1d(7, cell[0], cell[1], 0.0); // LEFT CENTER
    }

    this.checkDimForNurbs = function(dimensions) {
        var sizeX = dimensions[0]; 
        var sizeY = dimensions[1];
        if (this.useNurbs) {
            sizeX = Math.max(sizeX, 4);
            sizeY = Math.max(sizeY, 4);
        }
        return [sizeX, sizeY];
    }
}
