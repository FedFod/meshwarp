Mesh.prototype.checkIfMouseInsideMesh = function(mouseWorld) {
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
    if (distFromHandle < this.handle.handleSize) {
        this.drawHandleInPos(null);
        this.drawHandleFull();
        this.mouseOffset = subVec2D(this.handle.handlePos, mouseWorld);
        return [-100, -100];
    } else {
        this.drawHandleInPos(null);
        return [-1, -1];
    }
}

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
        var newPos = sumVec2D(coordsWorld, this.mouseOffset);
        this.setVertexPosInMat(newPos, cellIndex);
        this.assignPositionMatToMesh();
        gGraphics.drawCircle(newPos);
     }
}

Mesh.prototype.moveMesh = function(mouseWorld) {
    var offset = sumVec2D(mouseWorld, this.mouseOffset);
    var newPos = subVec2D(offset, this.handle.handlePos);
    this.positionMat.op("+", [newPos[0], newPos[1]]);
    this.drawHandleInPos(offset);
    this.drawHandleFull();
    this.assignPositionMatToMesh();
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