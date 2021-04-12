function Mesh() {
    this.ID = 0; // ID of the mesh

    this.meshPoints = new JitterObject("jit.gl.mesh");
    this.meshGrid = new JitterObject("jit.gl.mesh");
    this.meshFull = new JitterObject("jit.gl.mesh");
    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);
    this.boundingMat = new JitterMatrix(3, "float32", 10);
    this.adjacentCellsMat = new JitterMatrix(3, "float32", 8);

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
        this.adjacentCellsMat = new JitterMatrix(3, "float32", 8);

        this.ID = ID;
        this.meshPoints.drawto = drawto;
        this.meshGrid.drawto   = drawto;
        this.meshFull.drawto   = drawto;
        this.setMeshDim(dimensions);  // calculate and set matrices dimensions
        this.initPositionMat();
        postln("mesh draws to: " + this.meshPoints.drawto)
    }

    this.freeMesh = function() {
        if (this.positionMat) {
            this.positionMat.freepeer();
            this.boundingMat.freepeer();
            this.adjacentCellsMat.freepeer();
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

    this.moveVertex = function(coordsWorld, cellIndex) {
        if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
            this.setVertexPos(coordsWorld, cellIndex);
            this.assignPositionMatToMesh();
            gGraphics.drawCircle(coordsWorld);
        }
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
}