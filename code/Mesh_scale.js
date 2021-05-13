Mesh.prototype.scaleMesh = function(scaleX, scaleY) {
    this.deselectVertices();
    this.currentScale = [scaleX, scaleY];
    this.posMatFromUnscaledMat();
    this.assignPositionMatToMesh();
    this.calcMeshBoundsMat();
    this.drawMoveHandleInPos(this.getMeshCenter(this.positionMat));
    this.drawScaleHandles();
    this.drawScaleHandleFull();
}

Mesh.prototype.scaleWithHandle = function(initialPos, mouseWorld) {
    var distFromInitial = subVec2D(mouseWorld, initialPos); //this.latestMousePos
    if (this.scaleHandles.index == 0) {
        distFromInitial[1] = distFromInitial[1]*-1;
    } else if (this.scaleHandles.index == 1) {
       distFromInitial[0] *= -1;
       distFromInitial[1] *= -1;
    } else if (this.scaleHandles.index == 2) {
        distFromInitial[0] *= -1;
    }
    distFromInitial = subVec2D(this.latestScale, distFromInitial);
    this.scaleMesh(distFromInitial[0], distFromInitial[1]);
    this.latestMousePos = mouseWorld.slice();
}

Mesh.prototype.setLatestScale = function() {
    this.latestScale = this.currentScale.slice();
}

Mesh.prototype.getMeshCenter = function(mat) {
    gMinMaxMat.matrixcalc(mat, mat);
    var centerX = gMinMaxMat.mean[0];
    var centerY = gMinMaxMat.mean[1];
    return [centerX, centerY, 0];
}

Mesh.prototype.unscaledMatFromPosMat = function() {
    this.unscaledPosMat.frommatrix(this.positionMat);
    this.transformMatrixFromCenter(this.unscaledPosMat, this.currentScale, '/');
}

Mesh.prototype.posMatFromUnscaledMat = function() {
    this.unscaledPosMat.frommat
    this.positionMat.frommatrix(this.unscaledPosMat);
    this.transformMatrixFromCenter(this.positionMat, this.currentScale, '*');
}

Mesh.prototype.transformMatrixFromCenter = function(matrixToScale, scaleVal, operator) {
    matrixToScale.op("-", this.currentPos);  // translate to center
    matrixToScale.op(operator, scaleVal); // scale
    matrixToScale.op("+", this.currentPos); // put back
}
