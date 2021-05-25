Mesh.prototype.setMeshDim = function(newDim) {   
    gGraphics.resetSelected();
    gGraphics.resetSingleCircle();
    if (newDim[0] > 0 && newDim[1] > 0) {
        this.posMatDim = newDim.slice();
        this.positionMat.dim = newDim.slice();
        this.boundingMat.dim = newDim[0]*2 + (newDim[1] * 2) - 4;
        if (this.useNurbs) {
            this.textureCoordMat.dim = this.nurbsDim.slice();
        } else {
            this.textureCoordMat.dim = newDim.slice();
        }
    } 
    else { // default dim
        this.positionMat.dim = [4,4];
        this.boundingMat.dim = 4*2 + (4 * 2) - 4;
        this.textureCoordMat.dim = [4, 4];
    }
    this.unscaledPosMat.dim = this.positionMat.dim.slice();
}

Mesh.prototype.resizeMeshDim = function(dimensions) {
    var newDim = dimensions;
    var tempMat = new JitterMatrix(this.positionMat.planecount, this.positionMat.type, newDim);
    tempMat.interp = 1;
    tempMat.frommatrix(this.positionMat);
    this.setMeshDim(newDim);
    this.positionMat.frommatrix(tempMat);
    tempMat.freepeer();
    this.applyMeshTransformation();
    this.initAndAssignTextureCoordMat();
    this.initUndoRedoLevelsFromPositionMat();
    this.calcMeshBoundsMat();
}
