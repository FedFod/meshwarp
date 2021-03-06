Mesh.prototype.scaleMesh = function(scaleX, scaleY) {
    this.deselectVertices();
    this.currentScale = [Math.max(scaleX, 0.01), Math.max(scaleY, 0.01)]; 
    if (gShiftPressed || this.useAspectRatio) {
        this.currentScale[0] = this.meshRatio * this.currentScale[1];
    }
    this.posMatFromUnscaledMat();
    this.assignPositionMatToMesh();

    this.scaleMasks(this.currentScale);

    this.latestAction = GUI_ELEMENTS.WAS_SCALED;
    this.updateGUI();
}

Mesh.prototype.scaleWithHandle = function(mouseWorld) {
    if (this.enableScaleHandles) {
        var distFromInitial = subVec2D(mouseWorld, this.latestMousePos); //this.latestMousePos
        
        if (this.scaleHandles.index == 0) {
            distFromInitial[1] = distFromInitial[1]*-1;
        } else if (this.scaleHandles.index == 1) {
           distFromInitial[0] *= -1;
           distFromInitial[1] *= -1;
        } else if (this.scaleHandles.index == 2) {
            distFromInitial[0] *= -1;
        }
    
        var scaleDiff = subVec2D(this.latestScale, distFromInitial);
        this.scaleMesh(scaleDiff[0], scaleDiff[1]);
    }
}

Mesh.prototype.scaleToTextureRatio = function(val) {
    this.useAspectRatio = val;
    this.meshRatio = this.textureRatio;
    this.scaleMesh(this.currentScale[0], this.currentScale[1]);
    this.setLatestScale_calcBoundsMat();
    this.updateGUI();
}

Mesh.prototype.setLatestScale_calcBoundsMat = function() {
    this.latestScale = this.currentScale.slice();
    this.setLatestScaleMask(this.latestScale);
    this.setMeshRatio();
    this.calcMeshBoundsMat();
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