Mesh.prototype.initMask = function(drawto_)
{   
    this.maskVertexCounter = 0;
    this.maskMat = new JitterMatrix(3, "float32", 100);
    this.maskMesh = this.initMaskMesh(drawto_);
}

Mesh.prototype.initMaskMesh = function(drawto_) {
    var meshMaskTemp = new JitterObject("jit.gl.mesh");
    meshMaskTemp.draw_mode = "polygon";
    meshMaskTemp.line_width = 3;
    meshMaskTemp.depth_enable = 0;
    meshMaskTemp.layer = FRONT_1;
    meshMaskTemp.color = WHITE.slice();
    meshMaskTemp.drawto   = drawto_;
    return meshMaskTemp;
}

Mesh.prototype.resetMask = function()
{
    this.maskVertexCounter = 0;
    this.maskMat.dim = 0;
    this.assignMaskMatToMaskMesh();
}

Mesh.prototype.addVertexToMask = function(vertexPos)
{   
    var tempArr = jitMatToArray(this.maskMat);
    this.maskMat.dim = this.maskVertexCounter+1;
    arrayToJitMat(this.maskMat, tempArr);
    this.maskMat.setcell1d(this.maskVertexCounter, vertexPos[0], vertexPos[1]);
    this.maskVertexCounter++;
    this.assignMaskMatToMaskMesh();
    debug(DEBUG.MASK, this.maskVertexCounter);
}

Mesh.prototype.assignMaskMatToMaskMesh = function()
{
    this.maskMesh.vertex_matrix(this.maskMat.name);
}

Mesh.prototype.destroyMask = function()
{
    this.maskMat.freepeer();
    this.maskMesh.freepeer();
    this.maskVertexCounter = 0;
}