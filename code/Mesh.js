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
    this.nurbsOrder = [1,1];

    this.posMatPlaneCount = 3;
    this.posMatType = "float32";
    this.posMatDim = meshdim;

    this.enableMesh = show_mesh;

    this.useNurbs = 0;
    this.currentScale = [1, 1];
    this.nurbsLstnr = null;
    this.hasNurbsMat = 0;
    this.textureName = "";
    this.handle = null;
    this.mouseOffset = [0,0];
    this.latestMousePos = [0,0];
    this.selectedVerticesIndices = [];

    this.nurbsMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, this.nurbsDim);
    this.textureCoordMat = new JitterMatrix(2, this.posMatType, this.posMatDim);
    this.positionMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, this.posMatDim);
    this.unscaledPosMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, this.posMatDim);
    this.boundingMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, 10);
    this.adjacentCellsMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, 8);

    // unused for now
    this.setenable = function(val) {
        if(this.meshFull) {
            this.meshPoints.enable = this.enableMesh && val;
            this.meshGrid.enable = this.enableMesh && val;
            this.meshFull.enable = val;
            this.nurbs.enable = this.enableMesh && this.useNurbs && val;
            this.handle = this.enableMesh && val;
        }
    }

    this.initMesh = function(drawto, ID, useNurbs, saveDict_) {
        this.ID = ID;

        this.useNurbs = (useNurbs==0);
        this.currentScale = [1, 1];
        this.selectedVerticesIndices = [];
        this.latestMousePos = [0,0];
        this.enableMesh = show_mesh;

        if (saveDict_) {
            this.loadDataFromDict(saveDict_);
            this.setMeshDim(this.posMatDim);    // calculate and set matrices dimensions
            this.loadMatrixFromDict(saveDict_);
        } else {
            this.setMeshDim(this.posMatDim);    // calculate and set matrices dimensions
            this.initPositionMat(); // fill vertex mat from scratch
        }

        this.initMeshPoints(drawto);
        this.initMeshGrid(drawto);
        this.initMeshFull(drawto);
        this.initNurbs(drawto);
        this.initHandle(drawto);

        this.scaleToWindowRatio();
        this.initTextureCoordMat(); // init texture coord mat
    }

    this.changeMode = function(mode) {
        if (mode == 0) {
            this.useNurbs = 1;
            this.nurbs.enable = this.useNurbs;
            this.resizeMeshDim(this.positionMat.dim);
        } else {
            this.useNurbs = 0;
            this.assignPositionMatToMesh(); // assign vertex mat to mesh
            this.textureCoordMat.dim = this.positionMat.dim.slice();
        }
        this.initTextureCoordMat();
    }

    this.changeNurbsOrder = function(order) {
        if (order < this.positionMat.dim[0] && order < this.positionMat.dim[1] && order > 0) {
            this.nurbs.order = order;
            this.nurbsOrder = this.nurbs.order.slice();
            if (this.useNurbs) {
                this.assignPositionMatToMesh();
            }
        }
    }

    this.initTextureCoordMat = function() {   
        var xStartingPoint = (1.0/meshcount);
        var xCoordTarget = xStartingPoint + (1.0/meshcount); // 0 a 1. +0.25
        for (var i=0; i<this.textureCoordMat.dim[0]; i++) {
            for (var j=0; j<this.textureCoordMat.dim[1]; j++) {   
                var xCoord;
                if (gTextureNames.length > 1) {
                    xCoord = i/(this.textureCoordMat.dim[0]-1); // in case we have more textures, just map each of them to a mesh
                } else {
                    xCoord = map(i, 0, this.textureCoordMat.dim[0]-1, xStartingPoint, xCoordTarget);
                }
                this.textureCoordMat.setcell2d(i,j, xCoord, j/(this.textureCoordMat.dim[1]-1));
            }
        }
        this.assignTextureCoordMatToMesh();  // assign texture coord mat to mesh
    }

    this.initPositionMat = function() {    
        for(var i=0; i<this.positionMat.dim[0]; i++) {
            for(var j=0; j<this.positionMat.dim[1]; j++) {   
                var xVal = (i / (this.positionMat.dim[0]-1));
                xVal = map(xVal, 0., 1., -1 + (1 / (meshcount/2) * 0), -1+(1/(meshcount/2)) + (1 / (meshcount/2)) * 0);
                var yVal = ((j / (this.positionMat.dim[1]-1)) * 2.0) - 1.0;

                this.positionMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }

        this.unscaledPosMat.frommatrix(this.positionMat);
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
        this.meshFull.color = GREY;
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
        this.nurbs.order = this.nurbsOrder.slice();

        this.nurbsMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, this.nurbs.dim.slice());

        this.nurbsLstnr = new JitterListener(this.nurbs.name, nurbscallback);
        nurbsmap[this.nurbs.name] = this;
    }

    this.initHandle = function(drawto_) {
        this.handle = new JitterObject("jit.gl.sketch", drawto_);
        this.handle.layer = FRONT;
        this.handle.color = LIGHT_BLUE;
        this.handle.line_width = 2;
        this.handle.handlePos = [];
        this.handle.handleSize = 0.08;
        this.handle.blend_enable = 1;
        this.handle.depth_enable = 0;
        this.drawHandleInPos(this.getMeshCenter(this.positionMat));
    }

    this.freeMesh = function() {
        if (this.positionMat) {
            this.positionMat.freepeer();
            this.unscaledPosMat.freepeer();
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
            this.handle.freepeer();
        }
    }

    this.showMesh = function(show) {
        this.meshGrid.enable = show;
        this.meshPoints.enable = show;
        // this.handle.enable = show;
    }

    this.calcMeshBoundsMat = function() {        
        // Get the bounding vertices that are on the edges of the polygon in clockwise order
        var boundingArray = [];
        var pad = 0.; // pad so that the mesh is checked also when mouse is outside of it

        var tempBiggerMat = new JitterMatrix();
        tempBiggerMat.frommatrix(this.positionMat);
        tempBiggerMat.op("*", [1.5, 1.5, 1]);
        // TOP
        for (var i=0; i < this.positionMat.dim[0]; i++) {
            var xVal = tempBiggerMat.getcell(i, 0)[0];
            var yVal = tempBiggerMat.getcell(i, 0)[1] - pad;
            boundingArray.push([xVal, yVal]);
        }
        // RIGHT
        for (var j=1; j < tempBiggerMat.dim[1]; j++) {
            var xVal = tempBiggerMat.getcell(tempBiggerMat.dim[0]-1, j)[0] + pad;
            var yVal = tempBiggerMat.getcell(tempBiggerMat.dim[0]-1, j)[1];
            boundingArray.push([xVal, yVal]);
        }
        // BOTTOM
        for (var k=tempBiggerMat.dim[0]-2; k >= 0; k--) {
            var xVal = tempBiggerMat.getcell(k, tempBiggerMat.dim[1]-1)[0];
            var yVal = tempBiggerMat.getcell(k, tempBiggerMat.dim[1]-1)[1] + pad;
            boundingArray.push([xVal, yVal]);
        }
        // LEFT
        for (var z=tempBiggerMat.dim[1]-2; z > 0; z--) {
            var xVal = tempBiggerMat.getcell(0, z)[0] - pad;
            var yVal = tempBiggerMat.getcell(0, z)[1];
            boundingArray.push([xVal, yVal]);
        }
        // Transfer those vertices from the array to the boundingMat matrix
        for (var i=0; i<boundingArray.length; i++) {
            this.boundingMat.setcell1d(i, boundingArray[i][0], boundingArray[i][1]);
        }
        tempBiggerMat.freepeer();
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

    this.assignPositionMatToMesh = function() {
        if (this.useNurbs) {
            this.assignControlMatToNurbs(); // set the new position as the control matrix for nurbs
            this.hasNurbsMat = 0;
        } else {
            this.meshPoints.vertex_matrix(this.positionMat.name);
            this.meshGrid.vertex_matrix(this.positionMat.name);
            this.meshFull.vertex_matrix(this.positionMat.name);
        }
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
        this.meshFull.color = WHITE;
        this.meshFull.jit_gl_texture(this.textureName);
    }
    
}

