Mesh.prototype.scaleMesh = function(scaleX, scaleY) {
    this.posMatFromUnscaledMat();
    this.currentScale = [scaleX, scaleY];
    this.assignPositionMatToMesh();
    this.calcMeshBoundsMat();
    this.moveHandleToCenter();
}

// Only scale X when window is resized
Mesh.prototype.scaleToWindowRatio = function() {
    this.posMatFromUnscaledMat();
    this.assignPositionMatToMesh();
    this.calcMeshBoundsMat();
    this.moveHandleToCenter();
}

Mesh.prototype.getMeshCenter = function(mat) {
    gMinMaxMat.matrixcalc(mat, mat);
    var minX = gMinMaxMat.min[0];
    var maxX = gMinMaxMat.max[0];
    var minY = gMinMaxMat.min[1];
    var maxY = gMinMaxMat.max[1];
    return [(maxX - minX) / 2 + minX, (maxY - minY) / 2 + minY];
}

Mesh.prototype.unscaledMatFromPosMat = function() {
    this.unscaledPosMat.frommatrix(this.positionMat);
    var center = this.getMeshCenter(this.positionMat);
    this.unscaledPosMat.op("-", center);  // translate to center
    this.unscaledPosMat.op("/", this.currentScale); // scale
    this.unscaledPosMat.op("+", center); // put back
    this.unscaledPosMat.op("/", [gWindowRatio, 1.0]);
}

Mesh.prototype.posMatFromUnscaledMat = function() {
    this.positionMat.frommatrix(this.unscaledPosMat);
    var center = this.getMeshCenter(this.positionMat);
    this.positionMat.op("-", center);  // translate to center
    this.positionMat.op("*", this.currentScale); // scale
    this.positionMat.op("+", center); // put back
    this.positionMat.op("*", [gWindowRatio, 1.0]);
}