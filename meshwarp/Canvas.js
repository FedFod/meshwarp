function Canvas(ID) {
    this.ID = ID;   

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
    
    this.initPositionMat = function(positionMat)
    {    
        // Set values for position matrix
        for(var i=0; i<positionMat.dim[0]; i++)
        {
            for(var j=0; j<positionMat.dim[1]; j++)
            {   
                var xVal = (i / (positionMat.dim[0]-1));
                xVal = map(xVal, 0., 1., -gWindowRatio + ((gWindowRatio / (gMeshesNumber/2)) * this.ID), 
                -gWindowRatio+(gWindowRatio/(gMeshesNumber/2)) + (gWindowRatio / (gMeshesNumber/2)) * this.ID);
                var yVal = ((j / (positionMat.dim[1]-1)) * 2.0) - 1.0;

                positionMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }
    }   

    this.assignTexture = function(mesh) {
        mesh.jit_gl_texture("TEST");
    }
}