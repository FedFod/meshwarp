Mesh.prototype.saveDataIntoDict = function(dict) {
    dict.replace("use_nurbs", this.useNurbs);
    dict.replace("positionMat"+"::scale", this.currentScale);
    dict.replace("positionMat"+"::center", this.currentPos);
    dict.replace("positionMat"+"::planecount", this.positionMat.planecount);
    dict.append("positionMat"+"::type", this.positionMat.type);
    dict.append("positionMat"+"::dimensions", this.positionMat.dim);
    dict.append("positionMat"+"::nurbs_order", this.nurbsOrder);
    var posMatArray = jitMatToArray(this.positionMat);
    dict.replace("positionMat"+"::vertices", JSON.stringify(posMatArray));
}

Mesh.prototype.loadDict = function(saveDict_) {
    this.loadDataFromDict(saveDict_);
    this.loadMatrixFromDict(saveDict_);

    this.applyMeshTransformation();
}

Mesh.prototype.loadDataFromDict = function(dict) {
    this.useNurbs = dict.get("use_nurbs");
    this.posMatPlaneCount = dict.get("positionMat"+"::planecount");
    this.posMatType = dict.get("positionMat"+"::type");
    this.posMatDim = dict.get("positionMat"+"::dimensions");
    this.currentScale = dict.get("positionMat"+"::scale");
    this.currentPos = dict.get("positionMat"+"::center");
    this.nurbsOrder = dict.get("positionMat"+"::nurbs_order");
    this.latestScale = this.currentScale.slice();
}

Mesh.prototype.loadMatrixFromDict = function(dict) {
    var posArray = dict.get("positionMat"+"::vertices");
    posArray = JSON.parse(posArray);
    var idx = 0;
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            var thisCell = posArray[idx++];
            this.positionMat.setcell2d(i,j, thisCell[0], thisCell[1], thisCell[2]);
        }
    }
}


// UNDO / REDO
Mesh.prototype.saveUndoRedoPositionMat = function() {
    for (var i=this.amountOfUndoRedoLevels-1; i > 0; i--) {
        this.undoRedoLevels[i].posMat.frommatrix(this.undoRedoLevels[i-1].posMat);
        this.undoRedoLevels[i].scale = this.undoRedoLevels[i-1].scale.slice();
        this.undoRedoLevels[i].position = this.undoRedoLevels[i-1].position.slice();
    }
    this.undoRedoLevels[0].posMat.frommatrix(this.positionMat);
    this.undoRedoLevels[0].scale = this.currentScale.slice();
    this.undoRedoLevels[0].position = this.currentPos.slice();
    this.undoLevelIndex = 0;
}

Mesh.prototype.undo = function() {
    // print("undo level index "+this.undoLevelIndex);
    this.positionMat.frommatrix(this.undoRedoLevels[this.undoLevelIndex*2 + 1].posMat);
    this.currentScale = this.undoRedoLevels[this.undoLevelIndex*2 + 1].scale.slice();
    this.currentPos = this.undoRedoLevels[this.undoLevelIndex*2 + 1].position.slice();

    this.redoLevelIndex = this.undoLevelIndex;
    this.undoLevelIndex++;
    this.undoLevelIndex = clamp(this.undoLevelIndex, 0, Math.floor((this.amountOfUndoRedoLevels-1)/2));

    this.setLatestScale();
    this.applyMeshTransformation();
    this.updateGUI();
}

Mesh.prototype.redo = function() {
    this.redoLevelIndex = clamp(this.redoLevelIndex, 0, Math.floor((this.amountOfUndoRedoLevels-1)/2));
    this.positionMat.frommatrix(this.undoRedoLevels[this.redoLevelIndex*2].posMat);
    this.currentScale = this.undoRedoLevels[this.redoLevelIndex*2].scale.slice();
    this.currentPos = this.undoRedoLevels[this.redoLevelIndex*2].position.slice();

    // print("undo level index from REDO "+this.redoLevelIndex);
    this.redoLevelIndex--;

    this.setLatestScale();
    this.applyMeshTransformation();
    this.updateGUI();
}
