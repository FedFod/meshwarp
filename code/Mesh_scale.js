Mesh.prototype.scaleMesh = function(scaleX, scaleY) {
    this.deselectVertices();
    if (gKeysPressed.shiftPressed) {
        this.currentScale = [this.meshRatio * scaleY, scaleY]; 
    } else {
        this.currentScale = [scaleX, scaleY];
    }
    this.posMatFromUnscaledMat();
    this.assignPositionMatToMesh();
    this.latestAction = GUI_ELEMENTS.WAS_SCALED;
}

Mesh.prototype.scaleWithHandle = function(mouseWorld) {
    var distFromInitial = subVec2D(mouseWorld, this.latestMousePos); //this.latestMousePos
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
}

Mesh.prototype.scaleToTextureRatio = function() {
    this.scaleMesh(this.textureRatio*this.currentScale[1], this.currentScale[1]);
    this.setLatestScale();
    this.updateGUI();
}

Mesh.prototype.setLatestScale = function() {
    this.latestScale = this.currentScale.slice();
    this.setMeshRatio();
}

Mesh.prototype.setMeshRatio = function() {
    this.meshRatio = this.currentScale[0] / this.currentScale[1];
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
    this.positionMat.frommatrix(this.unscaledPosMat);
    this.transformMatrixFromCenter(this.positionMat, this.currentScale, '*');
}

Mesh.prototype.transformMatrixFromCenter = function(matrixToScale, scaleVal, operator) {
    matrixToScale.op("-", this.currentPos);  // translate to center
    matrixToScale.op(operator, scaleVal); // scale
    matrixToScale.op("+", this.currentPos); // put back
}

Mesh.prototype.getCurrentRatio = function() {
    return this.latestScale[0] / this.latestScale[1];
}