Mesh.prototype.initMask = function(drawto_)
{   
    this.maskVertexCounter = 0;
    this.isCloseToFirstMaskVertex = 0; 
    this.maskMat = new JitterMatrix(3, "float32", 0);
    this.maskMeshesFullArray = [];
    this.initMaskNode();
    this.maskMeshLines = this.initMaskMeshLines(drawto_);
    this.maskMeshPoints = this.initMaskMeshPoints(drawto_);
    // this.maskMesh = this.initMaskMesh(drawto_);
}

Mesh.prototype.initMaskNode = function()
{
    this.maskNode = new JitterObject("jit.gl.node");
    this.maskNode.capture = 1;
    this.maskNode.erase_color = WHITE.slice();
    this.maskCamera = new JitterObject("jit.gl.camera");
    this.maskCamera.ortho = 2;
    this.setMaskNodeDrawto();
}

Mesh.prototype.setMaskNodeDrawto = function()
{      
    this.maskNode.drawto = drawto;
    this.maskCamera.drawto = this.maskNode.name;
}

Mesh.prototype.getMaskTexName = function()
{   
    return this.maskNode.out_name;
}

Mesh.prototype.initMaskMeshLines = function(drawto_) {
    var meshMaskTemp = new JitterObject("jit.gl.mesh");
    meshMaskTemp.draw_mode = "line_strip";
    meshMaskTemp.line_width = 5;
    meshMaskTemp.depth_enable = 0;
    meshMaskTemp.layer = videoplane.layer+1;
    meshMaskTemp.color = RED.slice();
    meshMaskTemp.drawto = drawto_;
    return meshMaskTemp;
}

Mesh.prototype.initMaskMeshPoints = function(drawto_) {
    var meshMaskTemp = new JitterObject("jit.gl.mesh");
    meshMaskTemp.draw_mode = "points";
    meshMaskTemp.point_size = 10;
    meshMaskTemp.depth_enable = 0;
    meshMaskTemp.layer = videoplane.layer+2;
    meshMaskTemp.color = YELLOW.slice();
    meshMaskTemp.drawto = drawto_;
    return meshMaskTemp;
}

Mesh.prototype.createNewMaskMesh = function()
{
    var meshMaskTemp = new JitterObject("jit.gl.mesh");
    meshMaskTemp.draw_mode = "polygon";
    meshMaskTemp.depth_enable = 0;
    meshMaskTemp.layer = videoplane.layer+1;
    meshMaskTemp.color = WHITE.slice();
    meshMaskTemp.drawto = this.maskNode.name;
    meshMaskTemp.vertex_matrix(this.maskMat.name);
    return meshMaskTemp; 
}

Mesh.prototype.resetMask = function()
{
    this.maskVertexCounter = 0;
    this.maskMat.dim = 0;
    this.assignMaskMatToMaskMesh();
}

Mesh.prototype.setMaskLayer = function(val)
{   
    this.maskMeshLines.layer = val;
    this.maskMeshPoints.layer = val+1;
}

Mesh.prototype.addVertexToMask = function(vertexPos)
{   
    // FF_Utils.Print("MESH LAYER " + this.meshFull.layer)
    // FF_Utils.Print("MASK LAYER " + this.maskMeshLines.layer)
    var tempVertex = vertexPos.slice(); //[vertexPos[0]/this.currentScale[0], vertexPos[1]/this.currentScale[1]];
    var tempArr = jitMatToArray(this.maskMat);
    this.maskMat.dim = this.maskVertexCounter+1;
    arrayToJitMat(this.maskMat, tempArr);

    if (this.isCloseToFirstMaskVertex && this.maskMat.dim >= 3)
    {       
        var firstVertex = this.maskMat.getcell(0);
        this.maskMat.setcell1d(this.maskVertexCounter, firstVertex[0], firstVertex[1]);

        debug(DEBUG.MASK, "CREATING NEW MASK MESH")
        this.maskMeshesFullArray.push(this.createNewMaskMesh());
        this.setMaskNodeToBlack();
        this.maskVertexCounter = 0;
        this.maskMat.dim = 0;
    }
    else 
    {   
        debug(DEBUG.MASK, "ADDING NEW VERTEX")
        this.maskMat.setcell1d(this.maskVertexCounter, tempVertex[0], tempVertex[1]);
        this.maskVertexCounter++;
    }

    debug(DEBUG.MASK, "addVertexToMask, maskMat DIM: "+this.maskMat.dim)
    this.assignMaskMatToMaskMesh();

    debug(DEBUG.MASK, "Vertex Mask Counter: "+this.maskVertexCounter);
}

Mesh.prototype.setMaskNodeToBlack = function()
{
    this.maskNode.erase_color = BLACK.slice();
    this.maskNode.erase_color[3] = 0;
}

Mesh.prototype.checkIfMouseCloseToFirstMaskVertex = function(mousePos)
{      
    var firstVertex = this.maskMat.getcell(0);
    var distFromMouse = calcDist2D(firstVertex, mousePos);
    if (distFromMouse < gMinimumSelectionDist)
    {
        gGraphics.drawCircle(firstVertex);
        this.isCloseToFirstMaskVertex = 1;
    }
    else 
    {
        gGraphics.resetSingleCircle();
        this.isCloseToFirstMaskVertex = 0;
    }
}

Mesh.prototype.assignMaskMatToMaskMesh = function()
{   
    if (this.maskVertexCounter > 0)
    {   
        debug(DEBUG.MASK, "MASK MAT DIM: "+this.maskMat.dim);
        this.maskMeshLines.vertex_matrix(this.maskMat.name);
        this.maskMeshPoints.vertex_matrix(this.maskMat.name);
    }
}

Mesh.prototype.freeMask = function()
{   
    for (var mesh in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[mesh].freepeer();
    }
    this.maskMat.freepeer();
    this.maskMeshLines.freepeer();
    this.maskMeshPoints.freepeer();
    this.maskNode.freepeer();
    this.maskVertexCounter = 0;
}