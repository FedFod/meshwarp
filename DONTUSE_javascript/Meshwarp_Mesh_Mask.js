Mesh.prototype.initMask = function(drawto_)
{   
    this.selectedMaskIndex = { maskIndex: -1, toDelete: 0 };
    this.maskMeshesFullArray = [];
    this.mask_mode = 0;
    this.lastMaskState = "NOTHING";
    this.maskLatestAction = { maskIndex: -1, action: "NOTHING" };
    this.maskUndoRedoLevels = [];
    this.initMaskNode();
}

Mesh.prototype.setEnableMask = function(val)
{
    for (var index in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[index].setEnable(val);
    }
}

Mesh.prototype.showMaskUI = function(val)
{
    for (var mask in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[mask].showUI(val);
    }
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

Mesh.prototype.createNewMaskMesh = function(mouseWorld)
{   
    if (this.selectedMaskIndex.maskIndex == -1 && !this.selectedMaskIndex.toDelete)
    {   
        var meshMaskTemp = new MaskMesh(this.maskNode.name, mouseWorld, this.currentScale, this.currentPos);
        this.maskMeshesFullArray.push(meshMaskTemp);
    }
}

Mesh.prototype.deleteMaskMesh = function()
{
    if (this.selectedMaskIndex.maskIndex != -1)
    {   
        if (this.selectedMaskIndex.toDelete)
        {
            this.maskMeshesFullArray[this.selectedMaskIndex.maskIndex].freeMaskMesh();   
            this.maskMeshesFullArray.splice(this.selectedMaskIndex.maskIndex, 1);
            this.selectedMaskIndex.maskIndex = -1;
            gGraphics.resetSingleCircle();
        }
    }
}

Mesh.prototype.moveMaskMeshes = function(newPos)
{
    for (var maskMesh in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[maskMesh].moveMesh(newPos);
        this.maskMeshesFullArray[maskMesh].setMotherMeshCenter(this.currentPos);
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

Mesh.prototype.setInvertMask = function(val)
{
    if (val && apply_mask && this.lastMaskState === "APPLY_MASK")
    {   
        FF_Utils.Print("INVERT")
        this.setMaskNodeToBlack();
        gMaskPix.param("invert", 1);
    } 
    else if (!val)
    {
        gMaskPix.param("invert", 0);
    }
}

Mesh.prototype.setMaskMode = function(val)
{   
    debug(DEBUG.MASK, "SET CREATE MASK")

    if (val)
    {
        this.setMaskNodeToGrey();
        this.setEnableMask(1);
        this.showMaskUI(1);
        gMaskPix.param("invert", 0);
    }
    else if (apply_mask && !val)
    {   
        this.setEnableMask(1);
        this.showMaskUI(0);
        this.setMaskNodeToBlack();
    }
    else if (!apply_mask && !val)
    {
        this.setEnableMask(0);
        this.setMaskNodeToWhite();
    }
    this.mask_mode = val;
    this.lastMaskState = "MASK_MODE";
}

Mesh.prototype.setApplyMask = function(val)
{   
    if (val)
    {   
        this.setMaskNodeToBlack();
        if (invert_mask)
        {   
            this.setEnableMask(1);
            gMaskPix.param("invert", 1);
        }
    }
    else if (!mask_mode && !val)
    {  
        this.setMaskNodeToWhite();
        gMaskPix.param("invert", 0);
    }
    else if (mask_mode)
    {   
        this.setEnableMask(1);
        this.setMaskNodeToGrey();
        gMaskPix.param("invert", 0);
    }
    if (!mask_mode && val)
    {
        this.setEnableMask(1);
        this.showMaskUI(0);
        if (invert_mask)
        {
            gMaskPix.param("invert", 1);
        }
    }

    this.lastMaskState = "APPLY_MASK";
}

Mesh.prototype.setMaskNodeToBlack = function()
{   
    debug(DEBUG.MASK, "SET MASK NODE TO BLACK");
    this.maskNode.erase_color = [0,0,0,0];
}

Mesh.prototype.setMaskNodeToWhite = function()
{   
    debug(DEBUG.MASK, "SET MASK NODE TO WHITE");
    this.maskNode.erase_color = [1,1,1,1];
}

Mesh.prototype.setMaskNodeToGrey = function()
{   
    debug(DEBUG.MASK, "SET MASK NODE TO GREY");
    this.maskNode.erase_color = [0.5,0.5,0.5,1];
}

Mesh.prototype.scaleMasks = function(scaleVal)
{
    for (var mask in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[mask].scaleMask(scaleVal);
    }
}

Mesh.prototype.setLatestScaleMask = function(latestScale)
{
    for (var mask in this.maskMeshesFullArray)
    {
        this.maskMeshesFullArray[mask].setLatestScale(latestScale);
    }
}

Mesh.prototype.addVertexToMaskMesh = function(mouseWorld)
{
    for (var mask in this.maskMeshesFullArray)
    {   
        var maskMesh = this.maskMeshesFullArray[mask];
        if (maskMesh.selectedVertexIndex != -1)
        {
            maskMesh.deleteVertex();
            this.maskLatestAction.maskIndex = mask;
            this.maskLatestAction.action = "DELETED_VERTEX";
            return 1;
        }
        else if (maskMesh.checkIfMouseIsInsideMaskMesh(mouseWorld))
        {   
            maskMesh.addVertexToMaskMesh(mouseWorld);
            this.maskLatestAction.maskIndex = mask;
            this.maskLatestAction.action = "ADDED_VERTEX";
            return 1;
        }
    }
    return 0;
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
        this.maskLatestAction.maskIndex = this.selectedMaskIndex.maskIndex;
        this.maskLatestAction.action = "MOVED_VERTEX";
    }
}

// SAVE / LOAD --------------------------------------
Mesh.prototype.saveMasksInDict = function(saveDict)
{   
    for (var mask in this.maskMeshesFullArray)
    {
        var currMask = this.maskMeshesFullArray[mask];
        saveDict.replace("maskMatrices::maskMat_"+mask, JSON.stringify(currMask.getMaskMatAsArray()));
    }
}

Mesh.prototype.loadMasksFromDict = function(dict)
{   
    if (dict.contains("maskMatrices::maskMat_0"))
    {   
        // Free existing masks if present
        this.freeMaskMeshArray();

        var tempDict = dict.get("maskMatrices");
        // FF_Utils.Print("Stringified dict "+JSON.stringify(dict))
        var maskArrays = tempDict.getkeys();

        for (var arr in maskArrays)
        {   
            var maskVertices = (JSON.parse(tempDict.get(maskArrays[arr])));
            this.maskMeshesFullArray.push(new MaskMesh(this.maskNode.name, maskVertices[0], this.currentScale, this.currentPos, maskVertices));
        }
        
        this.showMaskUI(mask_mode);

        tempDict.freepeer();
    }
}

Mesh.prototype.resetMaskLatestAction = function()
{
    this.maskLatestAction.maskIndex = -1;
    this.maskLatestAction.action = "NOTHING";
}

Mesh.prototype.saveUndoRedoMaskState = function()
{
    if (this.maskLatestAction.maskIndex != -1)
    {   
        debug(DEBUG.MASK, "SAVE UNDO REDO MASK")
        //this.maskUndoRedoLevels.push(jitMatToArray(this.maskMeshesFullArray[this.maskLatestAction.maskIndex]));
    }
}

// FREE MEMORY -------------------------------------
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
function MaskMesh(ctxName, center, currentScale, motherMeshCenter, vArray)
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
    this.unscaledVertMat = new JitterMatrix(3, "float32", 6);

    this.selectedVertexIndex = -1;
    this.defaultMaskSize = 0.2;
    this.currentMaskScale = currentScale.slice();

    this.motherMeshCenter = motherMeshCenter.slice();

    this.jit3m = new JitterObject("jit.3m");

    this.initMask = function(center, vArray)
    {   
        if (!vArray)
        {
            this.vertMat.setcell1d(0, center);
            this.vertMat.setcell1d(1, center[0]-this.defaultMaskSize*this.currentMaskScale[0], center[1]+this.defaultMaskSize*this.currentMaskScale[1], 0);
            this.vertMat.setcell1d(2, center[0]+this.defaultMaskSize*this.currentMaskScale[0], center[1]+this.defaultMaskSize*this.currentMaskScale[1], 0);
            this.vertMat.setcell1d(3, center[0]+this.defaultMaskSize*this.currentMaskScale[0], center[1]-this.defaultMaskSize*this.currentMaskScale[1], 0);
            this.vertMat.setcell1d(4, center[0]-this.defaultMaskSize*this.currentMaskScale[0], center[1]-this.defaultMaskSize*this.currentMaskScale[1], 0);
            this.vertMat.setcell1d(5, center[0]-this.defaultMaskSize*this.currentMaskScale[0], center[1]+this.defaultMaskSize*this.currentMaskScale[1], 0);
        }
        else 
        {
            this.initMaskFromVerticesArray(vArray);
        }

        this.initColorMat();
        this.assignVertexMatToMaskMesh();
        this.assignColorMatToMaskPointsMesh();
        this.unscaledMatFromVertMat();
    }

    this.initMaskFromVerticesArray = function(vArray)
    {
        this.vertMat.dim = vArray.length;
        for (var vert in vArray)
        {
            this.vertMat.setcell1d(vert, vArray[vert]);
        }
    }   

    this.initColorMat = function()
    {   
        this.colorMat.dim = this.vertMat.dim;
        this.colorMat.setall(YELLOW.slice());
        this.colorMat.setcell1d(0, LIGHT_BLUE.slice());
    }

    this.setEnable = function(val)
    {
        this.maskMesh.enable = val;
        this.showUI(val);
    }

    this.showUI = function(val)
    {   
        this.maskMeshLine.enable = val;
        this.maskMeshPoints.enable = val;
    }

    this.checkIfMouseIsInsideMaskMesh = function(mouseWorld)
    { 
        var boundingMat = this.getBoundingMat(this.vertMat);
        var center = this.getCenterOfMatrix(boundingMat);
        this.scaleMatrixFromCenter(boundingMat, center, 1.2, '*')
        var isInside = isPointInsidePolygon(mouseWorld, boundingMat);
        boundingMat.freepeer();
        return isInside;
    }

    this.setMotherMeshCenter = function(center)
    {
        this.motherMeshCenter = center;
    }

    this.deleteVertex = function()
    {
        var vertices = jitMatToArray(this.vertMat);
        if (this.selectedVertexIndex == 1 || this.selectedVertexIndex == vertices.length-1)
        {   
            vertices.splice(vertices.length-1, 1);
            vertices.splice(1, 1);
        }
        else
        {
            vertices.splice(this.selectedVertexIndex, 1);
        }
        this.vertMat.dim = vertices.length;
        arrayToJitMat(this.vertMat, vertices);
        this.assignVertexMatToMaskMesh();
        this.unscaledMatFromVertMat();
    }

    this.addVertexToMaskMesh = function(mouseWorld)
    {       
        var vertices = jitMatToArray(this.vertMat);
        var vertIndex = -1;

        for (var i=1; i<vertices.length-1; i++)
        {
            var vert = vertices[i];
            var vertRight = vertices[i+1];

            if (checkIfPointIsBetweenTwoPoints2D(vert, vertRight, mouseWorld))
            {   
                FF_Utils.Print("i = "+i)
                vertIndex = i+1;
                break;
            }
        }  
        
        if (vertIndex != -1)
        {
            vertices.splice(vertIndex, 0, mouseWorld);  
        }

        this.vertMat.clear();
        this.vertMat.dim = vertices.length;
        // FF_Utils.Print("Vertmad Dim: "+this.vertMat.dim)
        // FF_Utils.Print("Index: "+(vertIndex))
        arrayToJitMat(this.vertMat, vertices);
        this.assignVertexMatToMaskMesh();
        this.initColorMat();
        this.assignColorMatToMaskPointsMesh();
        this.unscaledMatFromVertMat();
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
        if (this.selectedVertexIndex != -1 && !gShiftPressed && !gCTRLPressed)
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
            this.unscaledMatFromVertMat();
        }
        if (this.selectedVertexIndex == 0 && gCTRLPressed)
        {   
            this.moveMeshWithCenterHandle(mouseWorld);
        }
    }

    this.moveMeshWithCenterHandle = function(mouseWorld)
    {
        var currentPos = this.vertMat.getcell(0);
        // var offset = sumVec2D(mouseWorld, this.mouseOffset);
        var newPos = subVec2D(mouseWorld, currentPos);
        this.moveMesh(newPos);
        gGraphics.drawCircle(mouseWorld);
    }

    this.moveMesh = function(newPos)
    {  
        this.vertMat.op("+", [newPos[0], newPos[1], 0]);
        this.assignVertexMatToMaskMesh();
        this.unscaledMatFromVertMat();
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
            // this.maskMesh.vertex_matrix(this.unscaledVertMat.name);
            // this.maskMeshLine.vertex_matrix(this.unscaledVertMat.name);
            // this.maskMeshPoints.vertex_matrix(this.unscaledVertMat.name);
        }
    }

    this.assignColorMatToMaskPointsMesh = function()
    {
        this.maskMeshPoints.color_matrix(this.colorMat.name);
    }

    this.getBoundingMat = function(matrix)
    {
        var boundingMat = new JitterMatrix(3, "float32", matrix.dim-1);
        var matArray = jitMatToArray(matrix);
        matArray.splice(0,1);
        arrayToJitMat(boundingMat, matArray);
        return boundingMat;
    } 

    this.scaleMask = function(scaleVal)
    {   
        // FF_Utils.Print("Current scale: "+this.currentMaskScale);
        // FF_Utils.Print("SCALE MASK scale val: "+scaleVal);
        this.currentMaskScale = scaleVal.slice();
        this.vertMatFromUscaledMat();
        this.assignVertexMatToMaskMesh();
    }

    this.scaleMatrixFromCenter = function(matrix, center, scaleVal, op)
    {
        matrix.op("-", center);  // translate to center
        matrix.op(op, scaleVal); // scale
        matrix.op("+", center); // put back
    }

    this.getCenterOfMatrix = function(matrix)
    {
        this.jit3m.matrixcalc(matrix, matrix);
        return [this.jit3m.mean[0], this.jit3m.mean[1], 0];
    }

    this.setLatestScale = function(scaleVal)
    {   
        // FF_Utils.Print("SET MASK LATEST SCALE");
        this.currentMaskScale = scaleVal.slice();
        this.unscaledMatFromVertMat();
    }

    this.unscaledMatFromVertMat = function()
    {   
        this.unscaledVertMat.dim = this.vertMat.dim;
        this.unscaledVertMat.frommatrix(this.vertMat);
        this.scaleMatrixFromCenter(this.unscaledVertMat, this.motherMeshCenter, this.currentMaskScale, '/');
    }

    this.vertMatFromUscaledMat = function()
    {          
        this.vertMat.frommatrix(this.unscaledVertMat);
        this.scaleMatrixFromCenter(this.vertMat, this.motherMeshCenter, this.currentMaskScale, '*');
    }

    this.getMaskMatAsArray = function()
    {
        return (jitMatToArray(this.vertMat));
    }

    this.initMask(center, vArray);

    this.freeMaskMesh = function()
    {   
        debug(DEBUG.MASK, "Free Mask Mesh");
        this.maskMesh.freepeer();
        this.maskMeshLine.freepeer();
        this.maskMeshPoints.freepeer();
        this.vertMat.freepeer();
        this.colorMat.freepeer();
        this.jit3m.freepeer();
    }
}