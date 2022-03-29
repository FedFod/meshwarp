function nurbscallback(event) {
    if (event.eventname == "matrixoutput") {
        var mesh = nurbsmap[event.subjectname];
        if(mesh) {
            // create javascript matrix from matrixoutput event arg
            var tempMat = new JitterMatrix(event.args[0]);
            mesh.nurbsMat.frommatrix(tempMat);
            if (!mesh.hasNurbsMat) {
                mesh.assignNurbsMatToMesh();
                mesh.hasNurbsMat = 1;
            }
        }
    }
}
var nurbsmap = {};

function Mesh(ID) {
    this.ID = ID;
}

Mesh.prototype.initMeshProperties = function()
{
    this.meshPoints = null;
    this.meshGrid = null;
    this.meshFull = null;
    this.nurbs = null;
    this.textureProxy = null;
    this.nurbsDim = [40, 40];
    // this.physBody = null;

    // this.meshMask = null;

    this.defaultMeshDim = [4,4];
    this.posMatPlaneCount = 3;
    this.posMatType = "float32";
    this.posMatDim = this.defaultMeshDim;

    this.enableMesh = 1;

    this.useNurbs = 1;
    this.showMeshUI = 1;
    this.enableMoveHandle = 1;
    this.enableScaleHandles = 1;
    this.currentScale = [1, 1];
    this.latestScale = this.currentScale.slice();
    this.meshRatio = 1;
    this.currentPos = [0,0];
    this.latestCurrentPos = this.currentPos.slice();
    this.nurbsLstnr = null;
    this.hasNurbsMat = 0;
    this.textureNames = [""];
    this.moveHandle = null;
    this.scaleHandles = null;
    this.mouseOffset = [0,0];
    this.latestMousePos = [0,0];
    this.latestRotation = 0;
    this.selectedVerticesIndices = [];
    this.selectedVertexIndex = GUI_ELEMENTS.NEGATIVE_INDEX.slice();
    this.mouseIsCloseTo = GUI_ELEMENTS.NOTHING;
    this.latestAction = GUI_ELEMENTS.NOTHING;
    this.textureRatio = 1;
    this.useAspectRatio = 0;

    // UNDO REDO
    this.undoPointer = 0;
    this.undoRedoLevels = [];
    //----------------------------------

    this.nurbsMat = new JitterMatrix(5, this.posMatType, this.nurbsDim.slice());
    this.textureCoordMat = new JitterMatrix(2, this.posMatType, this.posMatDim.slice());
    this.positionMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, this.posMatDim.slice());
    this.unscaledPosMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, this.posMatDim.slice());
    this.boundingMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, 10);
    this.adjacentCellsMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, 8);
}

Mesh.prototype.assignPositionMatToMesh = function() {
    if (this.useNurbs) {
        this.assignControlMatToNurbs(); // set the new position as the control matrix for nurbs
        this.hasNurbsMat = 0;
        this.triggerNURBSOutput();
    } else {
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
        this.meshFull.vertex_matrix(this.positionMat.name);
    }
}

Mesh.prototype.setPosAndUnscaledPosMatrixAttributes = function() {
    this.positionMat.planecount = this.posMatPlaneCount;
    this.positionMat.type = this.posMatType;
    this.setPositionMatDim(this.posMatDim);

    this.unscaledPosMat.planecount = this.posMatPlaneCount;
    this.unscaledPosMat.type = this.posMatType;
}

Mesh.prototype.initPositionMat = function() {    
    this.setPosAndUnscaledPosMatrixAttributes();
    
    for(var i=0; i<this.positionMat.dim[0]; i++) {
        for(var j=0; j<this.positionMat.dim[1]; j++) {   
            var xVal = (i / (this.positionMat.dim[0]-1));
            xVal = map(xVal, 0., 1., -1 + (1 / (0.5) * 0), -1+(1/(0.5)) + (1 / (0.5)) * 0);
            var yVal = ((j / (this.positionMat.dim[1]-1)) * 2.0) - 1.0;

            this.positionMat.setcell2d(i, j, xVal, yVal, 0.0);
        }
    }
    this.unscaledPosMat.frommatrix(this.positionMat);
}   

Mesh.prototype.setEnable = function(val) {
    if(this.meshFull) {
        debug(DEBUG.GENERAL, "set enable")
        this.enableMesh = val;
        this.meshFull.enable = this.enableMesh;
        this.nurbs.enable = this.enableMesh && this.useNurbs;
        this.setEnableMask(val);
    }
}

Mesh.prototype.initMesh = function(drawto_, drawtoHandles_) {
    if (this.meshFull)
    {
        this.freeMesh();
    }
    this.initMeshProperties();
    this.initState();
    debug(DEBUG.GENERAL, "init")

    this.setMeshDim(this.posMatDim);
    this.initPositionMat(); // fill vertex mat from scratch

    this.initMeshPoints(drawtoHandles_);
    this.initMeshGrid(drawtoHandles_);
    this.initMeshFull(drawto_);
    this.initNurbs(drawto_);
    this.initMvmtHandle(drawtoHandles_);
    this.initScaleHandles(drawtoHandles_);
    this.initTextureProxy();
    
    this.calcMeshBoundsMat();
    this.assignPositionMatToMesh();
    this.initAndAssignTextureCoordMat(); // init texture coord mat
    this.triggerNURBSOutput();
    this.updateGUI();

    this.initMask(drawtoHandles_);
    
    this.saveUndoRedoPositionMat();
}

Mesh.prototype.initState = function() {
    this.enableMesh = 1;
    this.latestMousePos = [0, 0];
    this.mouseOffset = [0,0];
    this.currentPos = [0,0];
    this.latestCurrentPos = [0,0];
    this.currentScale = [1, 1];
    this.latestScale = this.currentScale.slice();
    this.latestRotation = 0;
    this.useNurbs = 1;
    // this.useAspectRatio = 0;
    this.undoRedoLevels = [];
    this.undoPointer = 0;
    this.latestAction = GUI_ELEMENTS.NOTHING;
    this.textureRatio = 1;
    this.showMeshUI = 1;
}

Mesh.prototype.setNurbsOrMeshMode = function(use_nurbs) {
    if (use_nurbs) {
        this.useNurbs = 1;
        this.nurbs.enable = this.useNurbs;
        this.resizeMeshDim(this.positionMat.dim);
    } else {
        this.useNurbs = 0;
        this.assignPositionMatToMesh(); // assign vertex mat to mesh
        this.textureCoordMat.dim = this.positionMat.dim;
    }
    this.initAndAssignTextureCoordMat();
}

Mesh.prototype.setColor = function(color_) {
    this.meshFull.color = color_;
}

Mesh.prototype.setUIGridColor = function(color_) {
    this.meshGrid.color = color_;
}

Mesh.prototype.setBlendEnable = function(val_) {
    this.meshFull.blend_enable = val_;
}

Mesh.prototype.changeNurbsOrder = function(x, y) {
    this.nurbs.order = [x, y];
    if (this.useNurbs) {
        this.assignPositionMatToMesh();
    }
}

Mesh.prototype.initAndAssignTextureCoordMat = function() {   
    /*var xStartingPoint = 1;
    var xCoordTarget = xStartingPoint + 1; // 0 a 1. +0.25
    for (var i=0; i<this.textureCoordMat.dim[0]; i++) {
        for (var j=0; j<this.textureCoordMat.dim[1]; j++) {   
            var xCoord;
            if (this.textureNames.length > 1) {
                xCoord = i/(this.textureCoordMat.dim[0]-1); // in case we have more textures, just map each of them to a mesh
            } else {
                xCoord = map(i, 0, this.textureCoordMat.dim[0]-1, xStartingPoint, xCoordTarget);
            }
            this.textureCoordMat.setcell2d(i,j, xCoord, j/(this.textureCoordMat.dim[1]-1));
        }
    }
    this.assignTextureCoordMatToMesh();*/ 
}

Mesh.prototype.initMeshGrid = function(drawto_) {
    this.meshGrid = new JitterObject("jit.gl.mesh");
    this.meshGrid.enable = (this.enableMesh && (grid_size > 0));
    this.meshGrid.draw_mode = "quad_grid";
    this.meshGrid.depth_enable = 0;
    this.meshGrid.layer = MIDDLE;
    this.meshGrid.color = grid_color;
    this.meshGrid.poly_mode = [1, 1];
    this.meshGrid.line_width = grid_size;
    this.meshGrid.drawto   = drawto_;
}

Mesh.prototype.initMeshFull = function(drawto_) {
    FF_Utils.Print("INIT MESH FULL")
    this.meshFull = new JitterObject("jit.gl.mesh");
    this.meshFull.draw_mode = "quad_grid";
    this.meshFull.depth_enable = 0;
    this.meshFull.layer = BACKGROUND;
    this.meshFull.color = WHITE.slice();
    this.meshFull.drawto   = drawto_;
}

Mesh.prototype.initMeshPoints = function(drawto_) {
    this.meshPoints = new JitterObject("jit.gl.mesh");
    this.meshPoints.enable = this.enableMesh;
    this.meshPoints.draw_mode = "points";
    this.meshPoints.depth_enable = 0;
    this.meshPoints.layer = FRONT;
    this.meshPoints.color = WHITE;
    this.meshPoints.point_size = point_size;
    this.meshPoints.drawto = drawto_;
}

Mesh.prototype.initNurbs = function(drawto_) {
    this.nurbs = new JitterObject("jit.gl.nurbs");
    this.nurbs.dim = this.nurbsDim.slice();
    this.nurbs.depth_enable = 0;
    this.nurbs.layer = BACKGROUND;
    this.nurbs.color = WHITE;
    this.nurbs.ctlshow = 0;
    this.nurbs.matrixoutput = 1;
    this.nurbs.drawto = drawto_;
    this.nurbs.enable = this.useNurbs * this.enableMesh;
    this.nurbs.order = [1, 1];
    this.nurbs.automatic = 0;

    this.nurbsMat = new JitterMatrix(5, this.posMatType, this.nurbs.dim.slice());

    this.nurbsLstnr = new JitterListener(this.nurbs.name, nurbscallback);
    nurbsmap[this.nurbs.name] = this;
}

Mesh.prototype.initTextureProxy = function() {
    this.textureProxy = new JitterObject("jit.proxy");
}

Mesh.prototype.freeMesh = function() {
    FF_Utils.Print("FREE MESH")
    this.freeMeshMatrices();
    this.freeMeshShapes();
    // this.free_mesh_mask();
    this.freeMeshHandles();
    this.freeMeshNurbsLstnr();
    this.textureProxy.freepeer();
    this.freeMask();
    // this.freePhysBody();
}

Mesh.prototype.freeMeshMatrices = function() {
    this.positionMat.freepeer();
    this.unscaledPosMat.freepeer();
    this.boundingMat.freepeer();
    this.nurbsMat.freepeer();
    this.adjacentCellsMat.freepeer();
    this.textureCoordMat.freepeer();
    // this.maskMat.freepeer();
}

Mesh.prototype.freeUndoRedoLevels = function() {
    for (var level in this.undoRedoLevels) {
        this.undoRedoLevels[level].posMat.freepeer();
    }
}

Mesh.prototype.freeMeshShapes = function() {
    this.meshPoints.freepeer();
    this.meshGrid.freepeer();
    this.meshFull.freepeer();
    this.nurbs.freepeer();
}

Mesh.prototype.freeMeshHandles = function() {
    this.moveHandle.freepeer();
    this.scaleHandles.freepeer();
}

Mesh.prototype.freeMeshNurbsLstnr = function() {
    this.nurbsLstnr.subjectname = "";
    nurbsmap[this.nurbs.name] = null;
}

Mesh.prototype.showUI = function(show) {
    if (!mask_mode && show && show_ui)
    {
        this.meshGrid.enable = (grid_size > 0);
        this.meshPoints.enable = 1;
        this.showMeshUI = 1;
        this.scaleHandles.enable = this.enableScaleHandles;
        this.moveHandle.enable = this.enableMoveHandle;
    }
    else if (mask_mode || !show || !show_ui)
    {
        this.meshGrid.enable = 0;
        this.meshPoints.enable = 0;
        this.showMeshUI = 0;
        this.scaleHandles.enable = 0;
        this.moveHandle.enable = 0;
    }
    
}

Mesh.prototype.assignNurbsMatToMesh = function() {
    this.meshPoints.vertex_matrix(this.positionMat.name);
    this.meshGrid.vertex_matrix(this.positionMat.name);
    this.meshFull.vertex_matrix(this.nurbsMat.name);
    // var tempMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, [10, 10]);
    // tempMat.frommatrix(tempMat);
    // this.physBody.jit_matrix(tempMat.name);
    // tempMat.freepeer();
}

Mesh.prototype.assignTextureCoordMatToMesh = function() {
    //this.meshFull.texcoord_matrix(this.textureCoordMat.name);
}

Mesh.prototype.assignControlMatToNurbs = function() {
    if (this.positionMat.dim[0] < 4 || this.positionMat.dim[1] < 4) {
        var tempMat = new JitterMatrix(this.posMatPlaneCount, this.posMatType, [Math.max(this.positionMat.dim[0], 4), Math.max(this.positionMat.dim[1], 4)]);
        tempMat.interp = 1;
        tempMat.frommatrix(this.positionMat);
        this.nurbs.ctlmatrix(tempMat.name);
        tempMat.freepeer();
    } else {
        this.nurbs.ctlmatrix(this.positionMat.name);
    }
}

Mesh.prototype.assignTextureToMesh = function(textureNames) {
    if (this.enableMesh && validTexture(textureNames)) {
        this.textureNames = textureNames;
        this.textureProxy.name = textureNames[0];
        var texDim = this.textureProxy.send("getdim");
        this.textureRatio = texDim[0] / texDim[1];
        this.meshFull.texture = this.textureNames;
    }
}

Mesh.prototype.setMeshAsSelected = function(val) {
    if (!val) {
        this.deselectVertices();
        this.latestAction = GUI_ELEMENTS.NOTHING;
    } 
    this.showUI(val);
}

Mesh.prototype.getPositionMatCell = function(index) {
    if (this.checkIfIndexIsWithinPositionMat(index)) {
        return this.positionMat.getcell(index).slice();
    } else {
        return GUI_ELEMENTS.NEGATIVE_INDEX;
    }
}

Mesh.prototype.triggerNURBSOutput = function() {
    this.nurbs.draw();
}

