Mesh.prototype.saveDataIntoDict = function(dict) {
    var posMatArray = jitMatToArray(this.positionMat);
    dict.replace("use_nurbs", this.useNurbs);
    dict.replace("positionMat"+"::scale", this.currentScale);
    dict.replace("positionMat"+"::center", this.currentPos);
    dict.replace("positionMat"+"::planecount", this.positionMat.planecount);
    dict.append("positionMat"+"::type", this.positionMat.type);
    dict.append("positionMat"+"::dimensions", this.positionMat.dim);
    dict.append("positionMat"+"::nurbs_order", this.nurbsOrder);
    dict.replace("positionMat"+"::vertices", JSON.stringify(posMatArray));
}

Mesh.prototype.loadDict = function(saveDict_) {
    this.loadDataFromDict(saveDict_);
    this.loadMatrixFromDict(saveDict_);
    this.drawMoveHandleInPos(this.currentPos);
    this.drawScaleHandles();
    this.assignPositionMatToMesh();
    this.calcMeshBoundsMat();
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
            //var thisCell = thisPositionsArray.get("positions")[j+i*this.positionMat.dim[0]].get(i+"_"+j);
            var thisCell = posArray[idx++];
            this.positionMat.setcell2d(i,j, thisCell[0], thisCell[1], thisCell[2]);
        }
    }
    this.unscaledMatFromPosMat();
}
