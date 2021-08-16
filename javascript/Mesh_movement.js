Mesh.prototype.checkIfMouseIsInsideMesh = function(mouseWorld) {
    if (isPointInsidePolygon(mouseWorld, this.boundingMat)) {
        return this.ID;
    } else {
        return GUI_ELEMENTS.NOTHING;
    }
}

Mesh.prototype.checkIfNeighborsCloser = function(i, j, dist, mouse) {
    var testDist = dist;
    var maxI = this.positionMat.dim[0];
    var maxJ = this.positionMat.dim[1];
    var coords = [i, j];
    for(var x = -1; x <= 1; x++) {
        for(var y = -1; y <= 1; y++) {
            if(x == 0 && y == 0) 
                continue;

            var newI = i + x;
            var newJ = j + y;
            if(newI >= 0 && newI < maxI && newJ >= 0 && newJ < maxJ) {
                var newDist = calcDist2D(this.getPositionMatCell([newI, newJ]), mouse);
                if(newDist < testDist) {
                    testDist = newDist;
                    coords = [newI, newJ];
                }
            }
        }
    }
    return coords;
}

Mesh.prototype.checkIfMouseIsCloseToVertex = function(mouseWorld) {   
    this.selectedVertexIndex = GUI_ELEMENTS.NEGATIVE_INDEX;
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var currVertexPos = this.getPositionMatCell([i,j]);
            var distFromMouse = calcDist2D(currVertexPos, mouseWorld);
            if (distFromMouse <= gMinimumSelectionDist) {
                var coords = this.checkIfNeighborsCloser(i, j, distFromMouse, mouseWorld);
                currVertexPos = this.getPositionMatCell(coords);
                i = coords[0];
                j = coords[1];
                gGraphics.drawCircle(currVertexPos);
                var cell = this.positionMat.getcell(i,j);
                this.mouseOffset = subVec2D(cell, mouseWorld);
                this.selectedVertexIndex = coords;
                this.mouseIsCloseTo = GUI_ELEMENTS.VERTEX;
                // this.outputSelectedVertex(cell);

                return this.mouseIsCloseTo;
            }
        }
    } 
    return this.mouseIsCloseTo;
} 

Mesh.prototype.checkIfMouseIsCloseToMoveHandle = function(mouseWorld) {
    this.mouseIsCloseTo = GUI_ELEMENTS.NOTHING;
    var distFromHandle = calcDist2D(this.moveHandle.handlePos.slice(), mouseWorld.slice());
    if (distFromHandle < this.moveHandle.handleSize) {
        this.mouseOffset = subVec2D(this.moveHandle.handlePos, mouseWorld);
        this.mouseIsCloseTo = GUI_ELEMENTS.MOVE_HANDLE;
    } 
    return this.mouseIsCloseTo;
}

Mesh.prototype.checkIfMouseIsCloseToScaleHandles = function(mouseWorld) {
    this.scaleHandles.index = -1;
    for (var i=0; i < this.scaleHandles.handlesPositions.length; i++) {
        var distFromHandle = calcDist2D(this.scaleHandles.handlesPositions[i].slice(), mouseWorld.slice());
        if (distFromHandle <= this.scaleHandles.handleSize) {
            this.mouseIsCloseTo = GUI_ELEMENTS.SCALE_HANDLE;
            this.scaleHandles.index = i;
            break;
        }
    }
    return this.mouseIsCloseTo;
}

Mesh.prototype.highlightSelectedVertices = function(mouseWorld) {
    gGraphics.resetSelected();
    this.selectedVerticesIndices = [];
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var cell = this.positionMat.getcell(i,j);
            if (((cell[0] > this.latestMousePos[0] && cell[0] < mouseWorld[0]) || (cell[0] < this.latestMousePos[0] && cell[0] > mouseWorld[0])) 
                && ((cell[1] > this.latestMousePos[1] && cell[1] < mouseWorld[1]) || (cell[1] < this.latestMousePos[1] && cell[1] > mouseWorld[1]))) {
                gGraphics.drawSelectedCircles(cell);
                this.selectedVerticesIndices.push([i,j]);
            }
        }
    }
    if (this.selectedVerticesIndices.length > 0) {
        this.latestAction = GUI_ELEMENTS.WAS_SELECTED_VERTICES;
    }
    return this.selectedVerticesIndices.length;
}

Mesh.prototype.moveSelectedVertices = function(mouseWorld) {
    gGraphics.resetSelected();
    gGraphics.resetSingleCircle();
    for (var i=0; i<this.selectedVerticesIndices.length; i++) {
        var cell = this.positionMat.getcell(this.selectedVerticesIndices[i][0], this.selectedVerticesIndices[i][1]);
        var mouseDifference = subVec2D(mouseWorld, this.latestMousePos);
        var newPos = sumVec2D(mouseDifference, cell);
        this.setVertexPosInMat(newPos, this.selectedVerticesIndices[i]);
        gGraphics.drawSelectedCircles(newPos);
    }
    this.setLatestMousePos(mouseWorld);
    this.applyMeshTransformation();
    this.latestAction = GUI_ELEMENTS.WAS_MOVED_VERTICES;
}

Mesh.prototype.moveMeshWithHandle = function(mouseWorld) {
    if (this.enableMoveHandle) {
        gGraphics.resetSelected();
        var offset = sumVec2D(mouseWorld, this.mouseOffset);
        this.setMeshPosition(offset);
    }
}

Mesh.prototype.moveMeshWithCtrl = function(mouseWorld) {
    this.mouseOffset = subVec2D(this.latestCurrentPos, this.latestMousePos);
    var offset = sumVec2D(mouseWorld, this.mouseOffset);
    this.setMeshPosition(offset);
    // this.mouseIsCloseTo = GUI_ELEMENTS.MOVE_HANDLE;
}

Mesh.prototype.setMeshPosition = function(offset) {
    var newPos = subVec2D(offset, this.currentPos);
    this.positionMat.op("+", [newPos[0], newPos[1]]);
    this.currentPos = offset.slice();

    gGraphics.resetSingleCircle();
    this.deselectVertices();

    this.applyMeshTransformation();
    this.latestAction = GUI_ELEMENTS.WAS_MOVED_MESH;
}

Mesh.prototype.moveVertexWithMouse = function(coordsWorld) {
    var newPos = sumVec2D(coordsWorld, this.mouseOffset);
    this.moveVertex(newPos, this.selectedVertexIndex);
}

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    if (this.checkIfIndexIsWithinPositionMat(cellIndex)) {
        this.selectedVertexIndex = cellIndex;
        this.setVertexPosInMat(coordsWorld, cellIndex);
        this.applyMeshTransformation();
        this.latestAction = GUI_ELEMENTS.WAS_MOVED_SINGLE_VERTEX;
        if (this.showMeshUI) {
            gGraphics.drawCircle(coordsWorld);
        }
        this.outputSelectedVertex(coordsWorld);
    }
}

Mesh.prototype.rotateZ = function(rotZ) {
    var angle = rotZ - this.latestRotation;
    this.positionMat.op("-", this.currentPos);  

    for(var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var rotatedCell = rotate2D(this.positionMat.getcell(i,j), angle);
            this.positionMat.setcell2d(i,j,rotatedCell[0], rotatedCell[1], rotatedCell[2]);
        }
    }

    this.latestRotation = rotZ;
    this.positionMat.op("+", this.currentPos); 
    // this.currentPos = rotate2D(this.currentPos, angle);
    this.applyMeshTransformation();
    this.rotateScaleHandles(angle);
}

Mesh.prototype.applyMeshTransformation = function() {
    this.unscaledMatFromPosMat();
    this.assignPositionMatToMesh();
}

Mesh.prototype.checkIfIndexIsWithinPositionMat = function(index) {
    return (index[0] >= 0 && index[0] < this.positionMat.dim[0] &&
            index[1] >= 0 && index[1] < this.positionMat.dim[1]);
}

//-------------------------------------------

Mesh.prototype.calcMeshBoundsMat = function() {        
    // Get the bounding vertices that are on the edges of the polygon in clockwise order
    var boundingArray = [];

    var tempBiggerMat = new JitterMatrix();
    tempBiggerMat.frommatrix(this.positionMat);
    var pad = 1.;
    this.transformMatrixFromCenter(tempBiggerMat, [pad, pad], '*');
    // TOP
    for (var i=0; i < this.positionMat.dim[0]; i++) {
        var xVal = tempBiggerMat.getcell(i, 0)[0];
        var yVal = tempBiggerMat.getcell(i, 0)[1];
        boundingArray.push([xVal, yVal]);
    }
    // RIGHT
    for (var j=1; j < tempBiggerMat.dim[1]; j++) {
        var xVal = tempBiggerMat.getcell(tempBiggerMat.dim[0]-1, j)[0];
        var yVal = tempBiggerMat.getcell(tempBiggerMat.dim[0]-1, j)[1];
        boundingArray.push([xVal, yVal]);
    }
    // BOTTOM
    for (var k=tempBiggerMat.dim[0]-2; k >= 0; k--) {
        var xVal = tempBiggerMat.getcell(k, tempBiggerMat.dim[1]-1)[0];
        var yVal = tempBiggerMat.getcell(k, tempBiggerMat.dim[1]-1)[1];
        boundingArray.push([xVal, yVal]);
    }
    // LEFT
    for (var z=tempBiggerMat.dim[1]-2; z > 0; z--) {
        var xVal = tempBiggerMat.getcell(0, z)[0];
        var yVal = tempBiggerMat.getcell(0, z)[1];
        boundingArray.push([xVal, yVal]);
    }
    // Transfer those vertices from the array to the boundingMat matrix
    for (var i=0; i<boundingArray.length; i++) {
        this.boundingMat.setcell1d(i, boundingArray[i][0], boundingArray[i][1]);
    }
    tempBiggerMat.freepeer();
}

Mesh.prototype.calcAdjacentCellsMat = function(cellIndex) {
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


Mesh.prototype.deselectVertices = function() {
    this.selectedVerticesIndices = [];
    gGraphics.resetSelected();
}

Mesh.prototype.setVertexPosInMat = function(coordsWorld, cellIndex) {
    this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
}

Mesh.prototype.setLatestMousePos = function(mouseWorld) {
    this.latestMousePos = mouseWorld.slice();
}

Mesh.prototype.getLatestMousePos = function() {
    return this.latestMousePos.slice();
}

Mesh.prototype.storeLatestMeshPos = function() {
    this.latestCurrentPos = this.currentPos;
}

Mesh.prototype.getSelectedVertexIndex = function() {
    return this.selectedVertexIndex;
}

Mesh.prototype.outputSelectedVertex = function(vertexPos) {
    outlet(0, "selected_vertex", this.selectedVertexIndex[0], (this.positionMat.dim[1]-1)-this.selectedVertexIndex[1], vertexPos[0], vertexPos[1]);
}

