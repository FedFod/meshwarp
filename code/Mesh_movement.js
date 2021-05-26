Mesh.prototype.checkIfMouseIsInsideMesh = function(mouseWorld) {
    // this.latestMousePos = mouseWorld.slice();
    if (isPointInsidePolygon(mouseWorld, this.boundingMat)) {
        return this.ID;
    } else {
        return GUI_ELEMENTS.NOTHING;
    }
}

Mesh.prototype.checkIfMouseIsCloseToVertex = function(mouseWorld) {   
    this.selectedVertexIndex = GUI_ELEMENTS.NEGATIVE_INDEX.slice();
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var currVertexPos = this.positionMat.getcell(i,j);
            var distFromMouse = calcDist2D(currVertexPos.slice(), mouseWorld.slice());
            if (distFromMouse <= gMinimumSelectionDist) {
                gGraphics.drawCircle(currVertexPos);
                var cell = this.positionMat.getcell(i,j);
                this.mouseOffset = subVec2D(cell, mouseWorld);
                this.selectedVertexIndex = [i, j];
                this.mouseIsCloseTo = GUI_ELEMENTS.VERTEX;
                this.outputSelectedVertex(cell);
                break;
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
    if (checkIfItIsGloballySelected()) {
        gGlobal.isOnHandle = 0;
        if (this.mouseIsCloseTo == GUI_ELEMENTS.MOVE_HANDLE) {
            gGlobal.isOnHandle = 1;
        } 
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
    this.latestMousePos = mouseWorld.slice();
    this.applyMeshTransformation();
    this.latestAction = GUI_ELEMENTS.WAS_MOVED_VERTICES;
}

Mesh.prototype.moveMesh = function(mouseWorld) {
    gGraphics.resetSelected();
    var offset = sumVec2D(mouseWorld, this.mouseOffset);
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
    this.outputSelectedVertex(coordsWorld);
}

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    this.setVertexPosInMat(coordsWorld, cellIndex);
    this.applyMeshTransformation();
    gGraphics.drawCircle(coordsWorld);
}

Mesh.prototype.applyMeshTransformation = function() {
    this.unscaledMatFromPosMat();
    this.assignPositionMatToMesh();
}

//-------------------------------------------

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

Mesh.prototype.getSelectedVertexIndex = function() {
    return this.selectedVertexIndex;
}

Mesh.prototype.outputSelectedVertex = function(vertexPos) {
    outlet(0, "selected_vertex", this.selectedVertexIndex[0], this.selectedVertexIndex[1], vertexPos[0], vertexPos[1]);
}

