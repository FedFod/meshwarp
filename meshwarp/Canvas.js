function Canvas() {
    this.ID = -1;   

    this.initCanvas = function(ID) {
        this.ID = ID;
    }

    this.initTextureCoordMat = function(texcoordMatrix) {   
        var xStartingPoint = (1.0/gMeshesNumber) * this.ID;
        var xCoordTarget = xStartingPoint + (1.0/gMeshesNumber); // 0 a 1. +0.25
        
        for (var i=0; i<texcoordMatrix.dim[0]; i++)
        {
            for (var j=0; j<texcoordMatrix.dim[1]; j++)
            {   
                var xCoord = map(i, 0, texcoordMatrix.dim[0]-1, xStartingPoint, xCoordTarget);
                texcoordMatrix.setcell2d(i,j, xCoord, j/(texcoordMatrix.dim[1]-1));
            }
        }
    }
}