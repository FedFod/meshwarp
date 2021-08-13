Mesh.prototype.saveDataIntoDict = function(dict) {
    dict.replace("positionMat"+"::scale", this.currentScale);
    dict.replace("positionMat"+"::center", this.currentPos);
    dict.replace("positionMat"+"::rotatez", rotatez);
    dict.replace("positionMat"+"::planecount", this.positionMat.planecount);
    dict.append("positionMat"+"::type", this.positionMat.type);
    dict.append("positionMat"+"::dimensions", this.positionMat.dim);
    var posMatArray = jitMatToArray(this.positionMat);
    dict.replace("positionMat"+"::vertices", JSON.stringify(posMatArray));
}

Mesh.prototype.loadDict = function(saveDict_) {
    this.loadDataFromDict(saveDict_);
    this.loadMatrixFromDict(saveDict_);
    
    setMeshDim(meshdim[0], meshdim[1]);
    setNurbsOrder(nurbs_order[0], nurbs_order[1]);
    setMeshLayer(layer);
    setScaleRelativeToAspect(lock_to_aspect);
    //setBlendEnable(blend_enable);
    gMesh.setColor(color);
    gMesh.setUIGridColor(grid_color);
    showUI(show_ui);
    setPointSize(point_size);
    setGridSize(grid_size);

    this.updateGUI();
    //assignThisAsCurrentlySelectedToGlobal()
    
    this.saveUndoRedoPositionMat();
}

Mesh.prototype.loadDataFromDict = function(dict) {
    this.posMatPlaneCount = dict.get("positionMat"+"::planecount");
    this.posMatType = dict.get("positionMat::type");
    this.posMatDim = dict.get("positionMat::dimensions");
    this.currentScale = dict.get("positionMat::scale");
    this.currentPos = dict.get("positionMat::center");
    this.latestCurrentPos = this.currentPos.slice();
    setRotatez(dict.get("positionMat::rotatez"));

    this.latestScale = this.currentScale.slice();
}

Mesh.prototype.loadMatrixFromDict = function(dict) {
    this.setPosAndUnscaledPosMatrixAttributes();

    var posArray = dict.get("positionMat::vertices");
    posArray = JSON.parse(posArray);
    var idx = 0;
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var thisCell = posArray[idx++];
            this.positionMat.setcell2d(i,j, thisCell[0], thisCell[1], thisCell[2]);
        }
    }
    this.unscaledMatFromPosMat();
}


// UNDO / REDO
Mesh.prototype.saveUndoRedoPositionMat = function() {
    debug(DEBUG.REDO_UNDO, "pre state save pointer "+ this.undoPointer);
    debug(DEBUG.REDO_UNDO, "pre state save stack size "+ this.undoRedoLevels.length);
    var newState = { 
        posMat: jitMatToArray(this.positionMat), 
        scale: this.currentScale.slice(),
        position: this.currentPos.slice(),
        dim: this.posMatDim
    }

    // new undoable action, add at current undo pointer
    if(this.undoPointer < this.undoRedoLevels.length - 1) {
        this.undoRedoLevels.splice(this.undoPointer + 1, this.undoRedoLevels.length - (this.undoPointer + 1));
    }

    this.undoRedoLevels.push(newState);

    // clamp to max undo
    if(this.undoRedoLevels.length > gMaxUndo) {
        this.undoRedoLevels.shift();
    }
    
    this.undoPointer = this.undoRedoLevels.length - 1;

    debug(DEBUG.REDO_UNDO, "post state save pointer "+ this.undoPointer);
    debug(DEBUG.REDO_UNDO, "post state save stack size "+ this.undoRedoLevels.length);
}

Mesh.prototype.applyHistory = function() {
    state = this.undoRedoLevels[this.undoPointer];
    if(state.dim[0] != this.posMatDim[0] || state.dim[1] != this.posMatDim[1]) {
        this.resizeMeshDim(state.dim);
    }
    arrayToJitMat(this.positionMat, state.posMat);
    this.currentScale = state.scale.slice();
    this.currentPos = state.position.slice();
    this.setLatestScale_calcBoundsMat();
    this.applyMeshTransformation();
    this.updateGUI();
}

Mesh.prototype.undo = function() {
    debug(DEBUG.REDO_UNDO, "undo pointer "+ this.undoPointer);
    debug(DEBUG.REDO_UNDO, "undo stack size "+ this.undoRedoLevels.length);
    if(this.undoPointer > 0) {
        this.undoPointer--;
        this.applyHistory();
    }
}

Mesh.prototype.redo = function() {
    debug(DEBUG.REDO_UNDO, "redo pointer "+ this.undoPointer);
    debug(DEBUG.REDO_UNDO, "redo stack size "+ this.undoRedoLevels.length);
    if(this.undoPointer < this.undoRedoLevels.length - 1) {
        this.undoPointer++;
        this.applyHistory();
    }
}
