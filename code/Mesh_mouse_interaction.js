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
                return [i, j];
            }
        }
    } 
    return this.mouseIsCloseToHandle(mouseWorld);
} 

Mesh.prototype.mouseIsCloseToHandle = function(mouseWorld) {
    var distFromHandle = calcDist2D(this.handle.handlePos.slice(), mouseWorld.slice());
    if (distFromHandle < this.handle.handleSize) {
        this.handle.circle(this.handle.handleSize);
        return [-100, -100];
    } else {
        this.drawHandleInPos(null);
        return [-1, -1];
    }
}

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
        this.setVertexPosInMat(coordsWorld, cellIndex);
        this.assignPositionMatToMesh();
        gGraphics.drawCircle(coordsWorld);
     }
}

Mesh.prototype.moveMesh = function(mouseWorld) {
    var newPos = [mouseWorld[0] - this.handle.handlePos[0], mouseWorld[1] - this.handle.handlePos[1]];
    this.oldMousePos = mouseWorld.slice();
    this.positionMat.op("+", [newPos[0], newPos[1]]);
    this.drawHandleInPos(mouseWorld);
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
    this.handle.moveto(this.handle.handlePos);
    this.handle.framecircle(this.handle.handleSize);
}