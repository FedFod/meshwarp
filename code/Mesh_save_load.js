Mesh.prototype.saveDataIntoDict = function(dict) {
    var posMatArray = this.positionMatToArray();
    dict.replace("positionMat"+this.ID+"::scale", this.currentScale);
    dict.replace("positionMat"+this.ID+"::planecount", this.positionMat.planecount);
    dict.append("positionMat"+this.ID+"::type", this.positionMat.type);
    dict.append("positionMat"+this.ID+"::dimensions", this.positionMat.dim);
    dict.append("positionMat"+this.ID+"::nurbs_order", this.nurbsOrder);
    dict.replace("positionMat"+this.ID+"::vertices", JSON.stringify(posMatArray));
}

Mesh.prototype.loadDataFromDict = function(dict) {
    this.posMatPlaneCount = dict.get("positionMat"+this.ID+"::planecount");
    this.posMatType = dict.get("positionMat"+this.ID+"::type");
    this.posMatDim = dict.get("positionMat"+this.ID+"::dimensions");
    this.currentScale = dict.get("positionMat"+this.ID+"::scale");
    this.nurbsOrder = dict.get("positionMat"+this.ID+"::nurbs_order");
}

Mesh.prototype.loadMatrixFromDict = function(dict) {
    var posArray = dict.get("positionMat"+this.ID+"::vertices");
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

Mesh.prototype.positionMatToArray = function() {
    var posArray = [];
    for (var i=0; i<this.positionMat.dim[0]; i++) {
        for (var j=0; j<this.positionMat.dim[1]; j++) {
            posArray.push(this.positionMat.getcell(i,j));
        }
    }
    return posArray;
}