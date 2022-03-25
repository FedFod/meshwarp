Mesh.prototype.initMask = function(drawto_)
{   
    this.selectedMaskIndex = { maskIndex: -1, toDelete: 0 };
    this.maskMeshesFullArray = [];
    this.initMaskNode();
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

Mesh.prototype.createOrDeleteNewMaskMesh = function(mouseWorld)
{   
    if (this.selectedMaskIndex.maskIndex == -1 && !this.selectedMaskIndex.toDelete)
    {   
        var meshMaskTemp = new MaskMesh(this.maskNode.name, mouseWorld);
        this.maskMeshesFullArray.push(meshMaskTemp);
    }
    else if (this.selectedMaskIndex.maskIndex != -1 && this.selectedMaskIndex.toDelete)
    {   
        this.maskMeshesFullArray[this.selectedMaskIndex.maskIndex].freeMaskMesh();   
        this.maskMeshesFullArray.splice(this.selectedMaskIndex.maskIndex, 1);
    }
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
    this.freeMaskMeshArray();
    this.selectedMaskIndex = { maskIndex: -1, toDelete: 0 };
    if (!mask_mode)
    {
        this.setMaskNodeToWhite();
    }
    else
    {
        this.setMaskNodeToGrey();
    }
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
    else if (!mask_mode)
    {
        this.setMaskNodeToWhite();
    }
    else if (mask_mode)
    {
        this.setMaskNodeToGrey();
    }
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

Mesh.prototype.checkIfMouseCloseToAnyMaskVertex = function(mouseWorld)
{   
    for (var mask in this.maskMeshesFullArray)
    {   
        var indexFound = this.maskMeshesFullArray[mask].checkIfMouseCloseToVertexMaskMesh(mouseWorld);
        if (indexFound != -1)
        {   
            if (indexFound == 0)
            {
                this.selectedMaskIndex.toDelete = 1;
            }
            else 
            {
                this.selectedMaskIndex.toDelete = 0;
            }
            this.selectedMaskIndex.maskIndex = mask;
            return;
        }   
    }
    this.selectedMaskIndex.maskIndex = -1;
    this.selectedMaskIndex.toDelete = 0;
}

Mesh.prototype.moveSelectedMaskVertex = function(mouseWorld)
{   
    if (this.selectedMaskIndex.maskIndex != -1)
    {
        this.maskMeshesFullArray[this.selectedMaskIndex.maskIndex].moveVertexMaskMesh(mouseWorld);
    }
}

Mesh.prototype.freeMask = function()
{   
    this.freeMaskMeshArray();
    this.maskNode.freepeer();
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
function MaskMesh(ctxName, center)
{
    this.maskMesh = new JitterObject("jit.gl.mesh");
    this.maskMesh.draw_mode = "tri_fan";
    this.maskMesh.depth_enable = 0;
    // this.maskMesh.poly_mode = [1,1];
    this.maskMesh.layer = videoplane.layer+1;
    this.maskMesh.color = WHITE.slice();
    this.maskMesh.drawto = ctxName;

    this.maskMeshLine = new JitterObject("jit.gl.mesh");
    this.maskMeshLine.draw_mode = "tri_fan";
    this.maskMeshLine.depth_enable = 0;
    this.maskMeshLine.layer = videoplane.layer+2;
    this.maskMeshLine.color = RED.slice();
    this.maskMeshLine.drawto = gGraphics.getGraphicsNodeName();
    this.maskMeshLine.poly_mode = [1,1];

    this.maskMeshPoints = new JitterObject("jit.gl.mesh");
    this.maskMeshPoints.draw_mode = "points";
    this.maskMeshPoints.point_size = 10;
    this.maskMeshPoints.depth_enable = 0;
    this.maskMeshPoints.layer = videoplane.layer+3;
    this.maskMeshPoints.color = YELLOW.slice();
    this.maskMeshPoints.drawto = gGraphics.getGraphicsNodeName();

    this.vertMat = new JitterMatrix(3, "float32", 6);
    this.colorMat = new JitterMatrix(4, "float32", 6);

    this.selectedVertexIndex = -1;
    this.defaultMaskSize = 0.3;

    this.initMask = function(center)
    {
        this.vertMat.setcell1d(0, center);
        this.vertMat.setcell1d(1, center[0]-this.defaultMaskSize, center[1]+this.defaultMaskSize, 0);
        this.vertMat.setcell1d(2, center[0]+this.defaultMaskSize, center[1]+this.defaultMaskSize, 0);
        this.vertMat.setcell1d(3, center[0]+this.defaultMaskSize, center[1]-this.defaultMaskSize, 0);
        this.vertMat.setcell1d(4, center[0]-this.defaultMaskSize, center[1]-this.defaultMaskSize, 0);
        this.vertMat.setcell1d(5, center[0]-this.defaultMaskSize, center[1]+this.defaultMaskSize, 0);
        
        this.colorMat.setall(YELLOW.slice());
        this.colorMat.setcell1d(0, LIGHT_BLUE.slice());
        this.assignVertexMatToMaskMesh();
        this.assignColorMatToMaskPointsMesh();
    }

    this.checkIfMouseCloseToVertexMaskMesh = function(mouseWorld)
    {   
        gGraphics.resetSingleCircle();
        this.selectedVertexIndex = -1;
        for (var i=0; i<this.vertMat.dim; i++)
        {   
            var currVertPos = this.vertMat.getcell(i);
            var dist = calcDist2D(currVertPos, mouseWorld);
            if (dist <= gMinimumSelectionDist)
            {   
                gGraphics.drawCircle(currVertPos);
                this.selectedVertexIndex = i;
                break;
            }
        }
        return this.selectedVertexIndex;
    }

    this.moveVertexMaskMesh = function(mouseWorld)
    {   
        gGraphics.resetSingleCircle();
        if (this.selectedVertexIndex!=-1 && this.selectedVertexIndex != 0)
        {   
            if (this.selectedVertexIndex == 1 || this.selectedVertexIndex == this.vertMat.dim-1)
            {
                this.vertMat.setcell1d(1, mouseWorld);
                this.vertMat.setcell1d(this.vertMat.dim-1, mouseWorld);
            }
            else
            {
                this.vertMat.setcell1d(this.selectedVertexIndex, mouseWorld);
            }
            gGraphics.drawCircle(mouseWorld);
            this.assignVertexMatToMaskMesh();
        }
        else if (this.selectedVertexIndex == 0)
        {   
            var currentPos = this.vertMat.getcell(0);
            // var offset = sumVec2D(mouseWorld, this.mouseOffset);
            var newPos = subVec2D(mouseWorld, currentPos);
            this.moveMesh(newPos);
            gGraphics.drawCircle(mouseWorld);
        }
    }

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

    this.assignColorMatToMaskPointsMesh = function()
    {
        this.maskMeshPoints.color_matrix(this.colorMat.name);
    }

    this.initMask(center);

    this.freeMaskMesh = function()
    {
        this.maskMesh.freepeer();
        this.maskMeshLine.freepeer();
        this.maskMeshPoints.freepeer();
        this.vertMat.freepeer();
        this.colorMat.freepeer();
    }
}