Mesh.prototype.checkIfMouseInsideMesh = function(mouseWorld) {
    this.latestMousePos = mouseWorld.slice();
    if (isPointInsidePolygon(mouseWorld, this.boundingMat)) {
        return this.ID;
    } else {
        return -1;
    }
}

Mesh.prototype.mouseIsCloseToVertex = function(mouseWorld) {   
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var currVertexPos = this.positionMat.getcell(i,j);
            var distFromMouse = calcDist2D(currVertexPos.slice(), mouseWorld.slice());
            if (distFromMouse <= gMinimumSelectionDist) {
                gGraphics.drawCircle(currVertexPos);
                this.mouseOffset = subVec2D(this.positionMat.getcell(i,j), mouseWorld);
                return [i, j];
            }
        }
    } 
    return [-1,-1];
} 

Mesh.prototype.checkIfMouseIsCloseToHandle = function(mouseWorld) {
    var cellIndex = [-1,-1];
    var distFromHandle = calcDist2D(this.moveHandle.handlePos.slice(), mouseWorld.slice());
    this.drawMoveHandleInPos(null);
    if (distFromHandle < this.moveHandle.handleSize) {
        this.drawHandleFull();
        this.mouseOffset = subVec2D(this.moveHandle.handlePos, mouseWorld);
        cellIndex = [-100, -100];
    } 
    if (checkIfItIsGloballySelected()) {
        gGlobal.isOnHandle = 0;
        if (cellIndex[0] == -100) {
            gGlobal.isOnHandle = 1;
        } 
    }
    return cellIndex;
}

Mesh.prototype.checkIfMouseIsCloseToScaleHandles = function(mouseWorld) {
    var cellIndex = [-1,-1];
    this.scaleHandles.reset();
    this.drawScaleHandles();
    for (var handle in this.scaleHandles.handlesPositions) {
        var distFromHandle = calcDist2D(this.scaleHandles.handlesPositions[handle].slice(), mouseWorld.slice());
        if (distFromHandle <= this.scaleHandles.handleSize) {
            this.drawScaleHandleFull(handle);
            cellIndex = [-50, -50];
            break;
        }
    }
    return cellIndex;
}

Mesh.prototype.highlightSelectedVertices = function(latMousePos, mouseWorld) {
    gGraphics.resetSelected();
    this.selectedVerticesIndices = [];
    var howManySelected = 0;
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var cell = this.positionMat.getcell(i,j);
            if (((cell[0] > latMousePos[0] && cell[0] < mouseWorld[0]) || (cell[0] < latMousePos[0] && cell[0] > mouseWorld[0])) 
                && ((cell[1] > latMousePos[1] && cell[1] < mouseWorld[1]) || (cell[1] < latMousePos[1] && cell[1] > mouseWorld[1]))) {
                gGraphics.drawSelectedCircles(cell);
                howManySelected++;
                this.selectedVerticesIndices.push([i,j]);
            }
        }
    }
    return howManySelected;
}

Mesh.prototype.moveSelectedVertices = function(mouseWorld) {
    gGraphics.resetSelected();
    for (var i=0; i<this.selectedVerticesIndices.length; i++) {
        var cell = this.positionMat.getcell(this.selectedVerticesIndices[i][0], this.selectedVerticesIndices[i][1]);
        var mouseDifference = subVec2D(mouseWorld, this.latestMousePos);
        var newPos = sumVec2D(mouseDifference, cell);
        this.setVertexPosInMat(newPos, this.selectedVerticesIndices[i]);
        gGraphics.drawSelectedCircles(newPos);
    }
    this.latestMousePos = mouseWorld.slice();
    this.assignPositionMatToMesh();
    this.drawMoveHandleInPos(this.getMeshCenter(this.positionMat));
}

Mesh.prototype.deselectVertices = function() {
    this.selectedVerticesIndices = [];
    gGraphics.resetSelected();
}

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    // if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
        var newPos = sumVec2D(coordsWorld, this.mouseOffset);
        this.setVertexPosInMat(newPos, cellIndex);
        this.assignPositionMatToMesh();
        gGraphics.drawCircle(newPos);
        // this.drawMoveHandleInPos(this.getMeshCenter(this.positionMat));
    //  }
}

Mesh.prototype.moveMesh = function(mouseWorld) {
    var offset = sumVec2D(mouseWorld, this.mouseOffset);
    var newPos = subVec2D(offset, this.moveHandle.handlePos);
    this.positionMat.op("+", [newPos[0], newPos[1]]);
    this.unscaledMatFromPosMat();
    this.drawMoveHandleInPos(offset);
    this.drawHandleFull();
    this.assignPositionMatToMesh();
    this.currentPos = offset.slice();

    this.drawScaleHandles();

    gGraphics.resetSingleCircle();
    this.deselectVertices();
}

Mesh.prototype.setVertexPosInMat = function(coordsWorld, cellIndex) {
    this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    this.unscaledMatFromPosMat();
}

