function Nurbs() {
    this.ID = -1;

    this.nurbs = new JitterObject("jit.gl.nurbs");
    this.controlMat = new JitterMatrix(2, "float32", [10, 10]);

    this.initNurbs = function(dimensions, drawto, ID) {
        this.nurbs = new JitterObject("jit.gl.nurbs");
        this.nurbs.dim = [40, 40];
        this.nurbs.depth_enable = 0;
        this.nurbs.layer = BACKGROUND;
        this.nurbs.color = WHITE;
        this.nurbs.ctlshow = 1;

        this.controlMat = new JitterMatrix(2, "float32", [10, 10]);

        this.ID = ID;
        this.nurbs.drawto = drawto;
        this.setNurbsControlDim(dimensions);
        this.initControlMat();
        this.assignControlMatToNurbs();

    }

    this.freeNurbs = function() {
        if (this.controlMat) {
            this.nurbs.freepeer();
            this.controlMat.freepeer();
        }
    }

    this.setNurbsControlDim = function(dimensions) {
        if (dimensions[0] > 0 && dimensions[1] > 0) {
            this.controlMat.dim = dimensions.slice();
        } 
        else {
            this.controlMat.dim = [4,4];
        }
    }

    this.initControlMat = function()
    {
        postln("Initializing control matrix for NURBS with ID " + this.ID);
    
        // Set values for position matrix
        for(var i=0; i<this.controlMat.dim[0]; i++)
        {
            for(var j=0; j<this.controlMat.dim[1]; j++)
            {   
                var xVal = (i / (this.controlMat.dim[0]-1));
                xVal = map(xVal, 0., 1., -gWindowRatio + ((gWindowRatio / (gMeshesNumber/2)) * this.ID), 
                -gWindowRatio+(gWindowRatio/(gMeshesNumber/2)) + (gWindowRatio / (gMeshesNumber/2)) * this.ID);
                var yVal = ((j / (this.controlMat.dim[1]-1)) * 2.0) - 1.0;

                this.controlMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }
    }   

    this.assignControlMatToNurbs = function() {
        this.nurbs.ctlmatrix(this.controlMat.name);
    }

}