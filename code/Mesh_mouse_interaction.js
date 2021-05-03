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
    return this.mouseIsCloseToHandle(mouseWorld);
} 

Mesh.prototype.mouseIsCloseToHandle = function(mouseWorld) {
    var distFromHandle = calcDist2D(this.handle.handlePos.slice(), mouseWorld.slice());
    this.drawHandleInPos(null);
    if (distFromHandle < this.handle.handleSize) {
        this.drawHandleFull();
        this.mouseOffset = subVec2D(this.handle.handlePos, mouseWorld);
        return [-100, -100];
    } else {
        return [-1, -1];
    }
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
    this.drawHandleInPos(this.getMeshCenter(this.positionMat));
}

Mesh.prototype.deselectVertices = function() {
    this.selectedVerticesIndices = [];
    gGraphics.resetSelected();
}

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
        var newPos = sumVec2D(coordsWorld, this.mouseOffset);
        this.setVertexPosInMat(newPos, cellIndex);
        this.assignPositionMatToMesh();
        gGraphics.drawCircle(newPos);
        this.drawHandleInPos(this.getMeshCenter(this.positionMat));
     }
}

Mesh.prototype.moveMesh = function(mouseWorld) {
    var offset = sumVec2D(mouseWorld, this.mouseOffset);
    var newPos = subVec2D(offset, this.handle.handlePos);
    this.positionMat.op("+", [newPos[0], newPos[1]]);
    this.unscaledMatFromPosMat();
    this.drawHandleInPos(offset);
    this.drawHandleFull();
    this.assignPositionMatToMesh();

    gGraphics.resetSingleCircle();
    gMeshes[gSelectionStruct.meshIDToClick].deselectVertices();
}

Mesh.prototype.setVertexPosInMat = function(coordsWorld, cellIndex) {
    this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    this.unscaledMatFromPosMat();
}

Mesh.prototype.drawHandleInPos = function(pos) {
    this.handle.reset();
    if (pos) {
        this.handle.handlePos = [pos[0], pos[1], 0];
    }
    this.handle.shapeslice(80);
    this.handle.moveto(this.handle.handlePos);
    this.handle.glcolor(LIGHT_BLUE);
    this.handle.framecircle(this.handle.handleSize);
}

Mesh.prototype.drawHandleFull = function() {
    this.handle.glcolor(LIGHT_BLUE_TRANSPARENT);
    this.handle.circle(this.handle.handleSize);
}
