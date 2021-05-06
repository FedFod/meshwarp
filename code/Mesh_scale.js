Mesh.prototype.scaleMesh = function(scaleX, scaleY) {
    this.deselectVertices();
    this.currentScale = [scaleX, scaleY];
    this.posMatFromUnscaledMat();
    this.assignPositionMatToMesh();
    this.calcMeshBoundsMat();
    this.drawMoveHandleInPos(this.getMeshCenter(this.positionMat));
}

// Only scale X when window is resized
Mesh.prototype.scaleToWindowRatio = function() {
    this.posMatFromUnscaledMat();
    // this.positionMat.op("*", [gWindowRatio, 1.0]);
    this.assignPositionMatToMesh();
    this.calcMeshBoundsMat();
    this.drawMoveHandleInPos(this.getMeshCenter(this.positionMat));
}

Mesh.prototype.getMeshCenter = function(mat) {
    gMinMaxMat.matrixcalc(mat, mat);
    var centerX = gMinMaxMat.mean[0];
    var centerY = gMinMaxMat.mean[1];
    return [centerX, centerY, 0];
}

Mesh.prototype.unscaledMatFromPosMat = function() {
    this.unscaledPosMat.frommatrix(this.positionMat);
    var center = this.getMeshCenter(this.positionMat);
    this.unscaledPosMat.op("-", center);  // translate to center
    this.unscaledPosMat.op("/", this.currentScale); // scale
    this.unscaledPosMat.op("+", center); // put back
}

Mesh.prototype.posMatFromUnscaledMat = function() {
    this.positionMat.frommatrix(this.unscaledPosMat);
    var center = this.getMeshCenter(this.positionMat);
    this.positionMat.op("-", center);  // translate to center
    this.positionMat.op("*", this.currentScale); // scale
    this.positionMat.op("+", center); // put back
}