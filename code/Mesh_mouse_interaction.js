Mesh.prototype.checkIfMouseInsideMesh = function(mouseWorld) {
    if (isPointInsidePolygon(mouseWorld, this.boundingMat)) {
        return this.ID;
    } else {
        return -1;
    }
}

Mesh.prototype.mouseIsCloseToVertex = function(mouseWorld) {   
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

Mesh.prototype.moveVertex = function(coordsWorld, cellIndex) {
    if (isPointInsidePolygon(coordsWorld, this.adjacentCellsMat)) {
        this.setVertexPosInMat(coordsWorld, cellIndex);

        this.assignPositionMatToMesh();

        gGraphics.drawCircle(coordsWorld);
     }
}

Mesh.prototype.setVertexPosInMat = function(coordsWorld, cellIndex) {
    this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    this.unscaledMatFromPosMat();
}

Mesh.prototype.moveHandleToCenter = function() {
    this.handle.reset();
    this.handle.moveto(this.getMeshCenter(this.positionMat));
    this.handle.framecircle(0.1);
}