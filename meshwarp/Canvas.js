function Canvas() {
    this.ID = null;   

    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);
    this.boundingMat = new JitterMatrix(3, "float32", 10);
    this.adjacentCellsMat = new JitterMatrix(3, "float32", 8);

    this.initTextureCoordMat = function(texcoordMatrix) {   
        var xStartingPoint = (1.0/gMeshesNumber) * this.ID;
        var xCoordTarget = xStartingPoint + (1.0/gMeshesNumber); // 0 a 1. +0.25
        
        for (var i=0; i<texcoordMatrix.dim[0]; i++)
        {
            for (var j=0; j<texcoordMatrix.dim[1]; j++)
            {   
                var xCoord = map(i, 0, texcoordMatrix.dim[0]-1, xStartingPoint, xCoordTarget);
                texcoordMatrix.setcell2d(i,j, xCoord, j/(texcoordMatrix.dim[1]-1));
            }
        }
    }
    
    this.initPositionMat = function()
    {    
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
    }   

    this.assignTexture = function(mesh) {
        mesh.jit_gl_texture("TEST");
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
             this.setVertexPos(coordsWorld, cellIndex);
             if (this.useNurbs) {
                 this.assignControlToNurbs();
             } else {
                this.assignPositionMatToMesh();
             }
             gGraphics.drawCircle(coordsWorld);
         }
     }

     this.setVertexPos = function(coordsWorld, cellIndex) {
        this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    }

    this.resizeMesh = function(sizeX, sizeY) {
        var tempMat = new JitterMatrix(3, "float32", [sizeX, sizeY]);
        tempMat.interp = 1;

        tempMat.frommatrix(this.positionMat);
        
        this.setMeshDim([sizeX, sizeY]);

        this.positionMat.frommatrix(tempMat);
        tempMat.freepeer();

        this.assignPositionMatToMesh();
        this.calcBoundingPolygonMat();
    }

    this.calcBoundingPolygonMat = function() {        
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

}