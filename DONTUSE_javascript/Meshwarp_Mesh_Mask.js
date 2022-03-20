Mesh.prototype.initMask = function(drawto_)
{   
    this.maskVertexCounter = 0;
    this.isCloseToFirstMaskVertex = 0; 
    this.maskMat = new JitterMatrix(3, "float32", 0);
    this.maskMeshesFullArray = [];
    this.hasCompletedMaskMesh = 0;
    this.initMaskNode();
    this.maskMeshLines = this.initMaskMeshLines(drawto_);
    this.maskMeshPoints = this.initMaskMeshPoints(drawto_);
    // this.maskMesh = this.initMaskMesh(drawto_);
}

Mesh.prototype.initMaskNode = function()
{
    this.maskNode = new JitterObject("jit.gl.node");
    this.maskNode.capture = 1;
    this.maskNode.type = "float16";
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
    meshMaskTemp.line_width = 3;
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
    var meshMaskTemp = new MaskMesh(this.maskNode.name);
    meshMaskTemp.assignVertexMatToMaskMesh(this.maskMat);
    return meshMaskTemp; 
}

Mesh.prototype.moveMaskMeshes = function(newPos)
{
    for (var maskMesh in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[maskMesh].moveMesh(newPos);
    }
}

Mesh.prototype.resetMask = function()
{
    this.maskVertexCounter = 0;
    this.maskMat.dim = 0;
    this.freeMaskMeshArray();
    this.assignMaskMatToMaskGUI();
    if (!create_mask)
    {
        this.setMaskNodeToWhite();
    }
    else
    {
        this.setMaskNodeToGrey();
    }
}

Mesh.prototype.setMaskLayer = function(val)
{   
    this.maskMeshLines.layer = val;
    this.maskMeshPoints.layer = val+1;
}

Mesh.prototype.setCreateMask = function(val)
{   
    debug(DEBUG.MASK, "SET CREATE MASK")
    if (val)
    {
        this.setMaskNodeToGrey();
    }
    else if (!apply_mask)
    {
        this.setMaskNodeToWhite();
    }
}

Mesh.prototype.setApplyMask = function(val)
{   
    if (val)
    {
        this.setMaskNodeToBlack();
    }
    else if (!create_mask)
    {
        this.setMaskNodeToWhite();
    }
    else if (create_mask)
    {
        this.setMaskNodeToGrey();
    }
}

Mesh.prototype.addVertexToMask = function(vertexPos)
{   
    FF_Utils.Print("MASK NODE OUT NAME " + this.maskNode.out_name)
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
        // this.setMaskNodeToBlack();
        this.maskVertexCounter = 0;
        this.maskMat.dim = 1;
        this.hasCompletedMaskMesh = 1;
    }
    else 
    {   
        debug(DEBUG.MASK, "ADDING NEW VERTEX")
        this.maskMat.setcell1d(this.maskVertexCounter, tempVertex[0], tempVertex[1]);
        this.maskVertexCounter++;
        this.hasCompletedMaskMesh = 0;
    }

    debug(DEBUG.MASK, "addVertexToMask, maskMat DIM: "+this.maskMat.dim)
    this.assignMaskMatToMaskGUI();

    debug(DEBUG.MASK, "Vertex Mask Counter: "+this.maskVertexCounter);
}

Mesh.prototype.setMaskNodeToBlack = function()
{
    this.maskNode.erase_color = [0,0,0,0];
}

Mesh.prototype.setMaskNodeToWhite = function()
{
    this.maskNode.erase_color = [1,1,1,1];
}

Mesh.prototype.setMaskNodeToGrey = function()
{
    this.maskNode.erase_color = [0.5,0.5,0.5,1];
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

Mesh.prototype.assignMaskMatToMaskGUI = function()
{   
    if (!this.hasCompletedMaskMesh)
    {   
        this.maskMeshLines.enable = 1;
        this.maskMeshPoints.enable = 1;
        this.maskMeshLines.vertex_matrix(this.maskMat.name);
        this.maskMeshPoints.vertex_matrix(this.maskMat.name);
    }
    else 
    {   
        this.maskMeshLines.enable = 0;
        this.maskMeshPoints.enable = 0;
    }
}

Mesh.prototype.freeMask = function()
{   
    this.freeMaskMeshArray();
    this.maskMat.freepeer();
    this.maskMeshLines.freepeer();
    this.maskMeshPoints.freepeer();
    this.maskNode.freepeer();
    this.maskVertexCounter = 0;
}

Mesh.prototype.freeMaskMeshArray = function()
{
    for (var mesh in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[mesh].freeMaskMesh();
    }
    this.maskMeshesFullArray = [];
}

// MASK MESH -------------------------- 
function MaskMesh(ctxName)
{
    this.maskMesh = new JitterObject("jit.gl.mesh");
    this.maskMesh.draw_mode = "polygon";
    this.maskMesh.depth_enable = 0;
    // this.maskMesh.poly_mode = [1,1];
    this.maskMesh.layer = videoplane.layer+1;
    this.maskMesh.color = WHITE.slice();
    this.maskMesh.drawto = ctxName;

    this.maskMeshLine = new JitterObject("jit.gl.mesh");
    this.maskMeshLine.draw_mode = "line_strip";
    this.maskMeshLine.depth_enable = 0;
    this.maskMeshLine.layer = videoplane.layer+2;
    this.maskMeshLine.color = RED.slice();
    this.maskMeshLine.drawto = gGraphics.getGraphicsNodeName();

    this.maskMeshPoints = new JitterObject("jit.gl.mesh");
    this.maskMeshPoints.draw_mode = "points";
    this.maskMeshPoints.point_size = 10;
    this.maskMeshPoints.depth_enable = 0;
    this.maskMeshPoints.layer = videoplane.layer+3;
    this.maskMeshPoints.color = YELLOW.slice();
    this.maskMeshPoints.drawto = gGraphics.getGraphicsNodeName();

    this.vertMat = new JitterMatrix();

    this.moveMesh = function(newPos)
    {
        this.vertMat.op("+", [newPos[0], newPos[1]]);
        this.assignVertexMatToMaskMesh()
    }

    this.assignVertexMatToMaskMesh = function(vMat)
    {   
        if (vMat)
        {
            this.maskMesh.vertex_matrix(vMat.name);
            this.maskMeshLine.vertex_matrix(vMat.name);
            this.maskMeshPoints.vertex_matrix(vMat.name);
            this.vertMat.frommatrix(vMat);
        }
        else 
        {
            this.maskMesh.vertex_matrix(this.vertMat.name);
            this.maskMeshLine.vertex_matrix(this.vertMat.name);
            this.maskMeshPoints.vertex_matrix(this.vertMat.name);
        }
    }

    this.freeMaskMesh = function()
    {
        this.maskMesh.freepeer();
        this.maskMeshLine.freepeer();
        this.maskMeshPoints.freepeer();
        this.vertMat.freepeer();
    }
}