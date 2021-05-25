Mesh.prototype.saveDataIntoDict = function(dict) {
    dict.replace("use_nurbs", this.useNurbs);
    dict.replace("mesh_color", this.meshColor);
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
    this.setColor(this.meshColor);
    this.applyMeshTransformation();
    this.updateGUI();
}

Mesh.prototype.loadDataFromDict = function(dict) {
    this.useNurbs = dict.get("use_nurbs");
    this.meshColor = dict.get("mesh_color");
    this.posMatPlaneCount = dict.get("positionMat"+"::planecount");
    this.posMatType = dict.get("positionMat::type");
    this.posMatDim = dict.get("positionMat::dimensions");
    this.currentScale = dict.get("positionMat::scale");
    this.currentPos = dict.get("positionMat::center");
    this.nurbsOrder = dict.get("positionMat::nurbs_order");
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
    this.undoRedoLevels.pop(); // remove last element in the array
    var newState = { 
        posMat: jitMatToArray(this.positionMat), 
        scale: this.currentScale.slice(),
        position: this.currentPos.slice()
    }
    this.undoRedoLevels.unshift(newState);
    // print("levels leng "+ this.undoRedoLevels.length)
    // print("saveindex "+this.saveUndoRedoLevelIndex)
    this.undoLevelIndex = 1;
    this.saveUndoRedoLevelIndex++;
}

Mesh.prototype.undo = function() {
    this.undoLevelIndex = clamp(this.undoLevelIndex, 0, this.amountOfUndoRedoLevels-1);
    // print("undo level index "+this.undoLevelIndex)
    arrayToJitMat(this.positionMat, this.undoRedoLevels[this.undoLevelIndex].posMat);
    this.currentScale = this.undoRedoLevels[this.undoLevelIndex].scale.slice();
    this.currentPos = this.undoRedoLevels[this.undoLevelIndex].position.slice();
    this.redoLevelIndex = this.undoLevelIndex-1;
    this.undoLevelIndex+=2;

    this.setLatestScale();
    this.applyMeshTransformation();
    this.updateGUI();
}

Mesh.prototype.redo = function() {
    this.redoLevelIndex = clamp(this.redoLevelIndex, 0, this.amountOfUndoRedoLevels-1);
    // print("redo level index "+this.redoLevelIndex)
    arrayToJitMat(this.positionMat, this.undoRedoLevels[this.redoLevelIndex].posMat);
    this.currentScale = this.undoRedoLevels[this.redoLevelIndex].scale.slice();
    this.currentPos = this.undoRedoLevels[this.redoLevelIndex].position.slice();
    this.undoLevelIndex = this.redoLevelIndex+1;
    this.redoLevelIndex-=2;

    this.setLatestScale();
    this.applyMeshTransformation();
    this.updateGUI();
}
