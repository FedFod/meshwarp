Mesh.prototype.checkIfMouseIsInsideMesh = function(mouseWorld) {
    this.latestMousePos = mouseWorld.slice();
    if (isPointInsidePolygon(mouseWorld, this.boundingMat)) {
        return this.ID;
    } else {
        return GUI_ELEMENTS.NOTHING;
    }
}

Mesh.prototype.checkIfMouseIsCloseToVertex = function(mouseWorld) {   
    this.selectedVertex = GUI_ELEMENTS.NEGATIVE_INDEX.slice();
    var isCloseToVertex = GUI_ELEMENTS.NOTHING;
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var currVertexPos = this.positionMat.getcell(i,j);
            var distFromMouse = calcDist2D(currVertexPos.slice(), mouseWorld.slice());
            if (distFromMouse <= gMinimumSelectionDist) {
                gGraphics.drawCircle(currVertexPos);
                this.mouseOffset = subVec2D(this.positionMat.getcell(i,j), mouseWorld);
                this.selectedVertex = [i, j];
                isCloseToVertex = GUI_ELEMENTS.VERTEX;
                break;
            }
        }
    } 
    return isCloseToVertex;
} 

Mesh.prototype.getSelectedVertexIndex = function() {
    return this.selectedVertex;
}

Mesh.prototype.checkIfMouseIsCloseToMoveHandle = function(mouseWorld) {
    var isCloseTo = GUI_ELEMENTS.NOTHING;
    var distFromHandle = calcDist2D(this.moveHandle.handlePos.slice(), mouseWorld.slice());
    this.drawMoveHandleInPos(null);
    if (distFromHandle < this.moveHandle.handleSize) {
        this.drawHandleFull();
        this.mouseOffset = subVec2D(this.moveHandle.handlePos, mouseWorld);
        isCloseTo = GUI_ELEMENTS.MOVE_HANDLE;
    } 
    if (checkIfItIsGloballySelected()) {
        gGlobal.isOnHandle = 0;
        if (isCloseTo == GUI_ELEMENTS.MOVE_HANDLE) {
            gGlobal.isOnHandle = 1;
        } 
    }
    return isCloseTo;
}

Mesh.prototype.checkIfMouseIsCloseToScaleHandles = function(mouseWorld) {
    var isClose = GUI_ELEMENTS.NOTHING;
    this.scaleHandles.reset();
    this.drawScaleHandles();
    for (var handle in this.scaleHandles.handlesPositions) {
        var distFromHandle = calcDist2D(this.scaleHandles.handlesPositions[handle].slice(), mouseWorld.slice());
        if (distFromHandle <= this.scaleHandles.handleSize) {
            this.drawScaleHandleFull(handle);
            isClose = GUI_ELEMENTS.SCALE_HANDLE;
            break;
        }
    }
    return isClose;
}

Mesh.prototype.highlightSelectedVertices = function(mouseWorld) {
    gGraphics.resetSelected();
    this.selectedVerticesIndices = [];
    var howManySelected = 0;
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var cell = this.positionMat.getcell(i,j);
            if (((cell[0] > this.latestMousePos[0] && cell[0] < mouseWorld[0]) || (cell[0] < this.latestMousePos[0] && cell[0] > mouseWorld[0])) 
                && ((cell[1] > this.latestMousePos[1] && cell[1] < mouseWorld[1]) || (cell[1] < this.latestMousePos[1] && cell[1] > mouseWorld[1]))) {
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

Mesh.prototype.setLatestMousePos = function(mouseWorld) {
    this.latestMousePos = mouseWorld.slice();
}

Mesh.prototype.getLatestMousePos = function() {
    return this.latestMousePos.slice();
}

