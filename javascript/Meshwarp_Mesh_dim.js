Mesh.prototype.setPositionMatDim = function(newDim)
{
    if (Array.isArray(newDim))
    {
        this.positionMat.dim = newDim.slice();
        this.unscaledPosMat.dim = newDim.slice();
    } 
    else 
    {
        this.positionMat.dim = newDim;
        this.unscaledPosMat.dim = newDim;
    }
}

Mesh.prototype.setMeshDim = function(newDim) {   
    gGraphics.resetSelected();
    gGraphics.resetSingleCircle();
    if (newDim[0] > 0 && newDim[1] > 0) {
        this.posMatDim = newDim.slice();
        this.setPositionMatDim(newDim);
        this.boundingMat.dim = newDim[0]*2 + (newDim[1] * 2) - 4;
        if (this.useNurbs) {
            this.textureCoordMat.dim = this.nurbsDim.slice();
        } else {
            this.textureCoordMat.dim = newDim.slice();
        }
    } 
    else { // default dim
        this.setPositionMatDim(this.defaultMeshDim);
        this.boundingMat.dim = 4*2 + (4 * 2) - 4;
        this.textureCoordMat.dim = [4, 4];
    }
    meshdim[0] = newDim[0];
    meshdim[1] = newDim[1];
}

Mesh.prototype.resizeMeshDim = function(dimensions) {
    // FF_Utils.Print("resizeMeshDim", dimensions);
    var tempMat = new JitterMatrix(this.positionMat.planecount, this.positionMat.type, dimensions);
    tempMat.interp = 1;
    tempMat.frommatrix(this.positionMat);
    this.setMeshDim(dimensions);
    this.positionMat.frommatrix(tempMat);
    tempMat.freepeer();

    // conform nurbs order to new mesh dim
    setNurbsOrder(nurbs_order[0], nurbs_order[1]);

    this.applyMeshTransformation();
    this.initAndAssignTextureCoordMat();
    this.calcMeshBoundsMat();
}
