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
    this.drawMoveHandleInPos(this.currentPos);
    this.drawScaleHandles();
    this.assignPositionMatToMesh();
    // this.calcMeshBoundsMat();
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
    this.unscaledMatFromPosMat();
}

Mesh.prototype.saveUndoPositionMat = function() {
    this.undoRedoLevels[0].frommatrix(this.positionMat);
    // print("save level index "+this.saveUndoRedoLevelIndex);
    for (var i=1; i<this.amountOfUndoRedoLevels-1; i++) {
        this.undoRedoLevels[i+1].frommatrix(this.undoRedoLevels[i]);
    }
    this.undoLevelIndex = 0;
    // this.undoLevelIndex = this.redoLevelIndex-1;
    // this.redoLevelIndex++;
    // this.redoLevelIndex %= this.amountOfUndoRedoLevels;
}

Mesh.prototype.undo = function() {
    // this.undoLevelIndex = mod(this.undoLevelIndex, this.amountOfUndoRedoLevels);
    print("undo level index "+this.undoLevelIndex);
    this.positionMat.frommatrix(this.undoRedoLevels[this.undoLevelIndex]);
    this.undoLevelIndex++;
    this.assignPositionMatToMesh();
}

Mesh.prototype.redo = function() {
    // this.undoLevelIndex++;
    // this.undoLevelIndex = mod(this.undoLevelIndex, this.amountOfUndoRedoLevels);
    this.redoLevelIndex--;
    this.redoLevelIndex = mod(this.redoLevelIndex, this.amountOfUndoRedoLevels);
    print("redo level index "+ (this.redoLevelIndex));
    this.positionMat.frommatrix(this.undoRedoLevels[this.redoLevelIndex]);
    this.assignPositionMatToMesh();
}
