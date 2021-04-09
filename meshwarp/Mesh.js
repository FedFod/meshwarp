function Mesh() {
    this.ID = 0; // ID of the mesh

    this.meshPoints = new JitterObject("jit.gl.mesh");
    this.meshGrid = new JitterObject("jit.gl.mesh");
    this.meshFull = new JitterObject("jit.gl.mesh");
    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);
    this.boundingMat = new JitterMatrix(3, "float32", 10);

    this.maxPos = [-1000, -1000];
    this.minPos = [1000, 1000];

    this.initMesh = function(dimensions, drawto, ID) {
        this.meshPoints = new JitterObject("jit.gl.mesh");
        this.meshPoints.draw_mode = "points";
        this.meshPoints.depth_enable = 0;
        this.meshPoints.layer = FRONT;
        this.meshPoints.color = WHITE;
        this.meshPoints.point_size = 10;
    
        this.meshGrid = new JitterObject("jit.gl.mesh");
        this.meshGrid.draw_mode = "quad_grid";
        this.meshGrid.depth_enable = 0;
        this.meshGrid.layer = MIDDLE;
        this.meshGrid.color = randomColor();
        this.meshGrid.poly_mode = [1, 1];
        this.meshGrid.line_width = 3;

        this.meshFull = new JitterObject("jit.gl.mesh");
        this.meshFull.draw_mode = "quad_grid";
        this.meshFull.depth_enable = 0;
        this.meshFull.layer = BACKGROUND;
        this.meshFull.color = GREY;

        this.positionMat = new JitterMatrix(3, "float32", [10, 10]);
        this.boundingMat = new JitterMatrix(3, "float32", 10);

        this.ID = ID;
        this.meshPoints.drawto = drawto;
        this.meshGrid.drawto   = drawto;
        this.meshFull.drawto   = drawto;
        this.setMeshDim(dimensions);
        this.initPositionMat();
        postln("mesh draws to: " + this.meshPoints.drawto)
    }

    this.freeMesh = function() {
        if (this.positionMat) {
            this.positionMat.freepeer();
            this.meshPoints.freepeer();
            this.meshGrid.freepeer();
            this.meshFull.freepeer();
        }
    }

    this.getMaxMinPositionMat = function()
    {
        gJit3m.matrixcalc(this.positionMat, this.positionMat);
        this.minPos = gJit3m.min.slice(0, 2);
        this.maxPos = gJit3m.max.slice(0, 2);

        // postln("min pos values (x, y): "+this.minPos);
        // postln("max pos values (x, y): "+this.maxPos);
    }

    this.setMeshDim = function(dimensions)
    {   
        if (dimensions[0] > 0 && dimensions[1] > 0) {
            this.positionMat.dim = dimensions.slice();
            this.boundingMat.dim = dimensions[0]*2 + (dimensions[1] * 2) - 4;
        } 
        else {
            this.positioMat.dim = [4,4];
        }
    }

    this.initPositionMat = function()
    {
        postln("Initializing vertex matrix for mesh with ID " + this.ID);
    
        // Set values for position matrix
        for(var i=0; i<this.positionMat.dim[0]; i++)
        {
            for(var j=0; j<this.positionMat.dim[1]; j++)
            {   
                var xVal = (i / (this.positionMat.dim[0]-1));
                xVal = map(xVal, 0., 1., -gWindowRatio + ((gWindowRatio / (gMeshesNumber/2)) * this.ID), 
                -gWindowRatio+(gWindowRatio/(gMeshesNumber/2)) + (gWindowRatio / (gMeshesNumber/2)) * this.ID);
                var yVal = ((j / (this.positionMat.dim[1]-1)) * 2.0) - 1.0;

                this.positionMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }   

        this.assignPositionMatToMesh(); // assign vertex mat to mesh
        this.getMaxMinPositionMat(); // calculate what are the max and min position values in matrix
        this.calcBoundingPolygonMat();
    }

    this.setVertexPos = function(coordsWorld, cellIndex) {
        this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    }

    this.assignPositionMatToMesh = function() {
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
        this.meshFull.vertex_matrix(this.positionMat.name);
    }

    //-------------------------------------------

    this.moveVertex = function(coordsWorld, cellIndex) {
        this.setVertexPos(coordsWorld, cellIndex);
        this.assignPositionMatToMesh();
        gGraphics.drawCircle(coordsWorld);
    }

    this.calcBoundingPolygonMat = function() {
        // Get the bounding vertices that are on the edges of the polygon in clockwise order
        var boundingArray = [];
        var pad = 0.05; // pad so that the mesh is checked also when mouse is outside of it

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

    this.checkIfMouseInsideMesh = function(mouseWorld) {
        // if (mouseWorld[0] >= this.minPos[0] && mouseWorld[0] <= this.maxPos[0])
        // {
        //     return this.ID;
        // } else {
        //     return -1;
        // }
        var testx = mouseWorld[0]; var testy = mouseWorld[1];
        var nvert = this.boundingMat.dim;
        var i, j, c = 0;
        for (i=0, j = nvert-1; i < nvert; j = i++) {
            var verty_i = this.boundingMat.getcell(i)[1];
            var verty_j = this.boundingMat.getcell(j)[1];
            var vertx_i = this.boundingMat.getcell(i)[0];
            var vertx_j = this.boundingMat.getcell(j)[0];
            if ( ((verty_i>testy) != (verty_j>testy)) &&
                ((testx < ( ((vertx_j-vertx_i) * (testy-verty_i)) / (verty_j-verty_i) + vertx_i)) ) ) {
                c = !c;
            }
        }
        return c ? this.ID : -1;
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
}