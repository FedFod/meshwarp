function Nurbs() {
    this.ID = -1;

    this.nurbs = null;
    this.controlMat = null;

    this.canvas = null;

    this.initNurbs = function(dimensions, drawto, ID) {
        this.canvas = new Canvas(ID);

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
        this.canvas.initPositionMat(this.controlMat);
        this.assignControlMatToNurbs();

        this.canvas.assignTexture(this.nurbs);
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


    this.assignControlMatToNurbs = function() {
        this.nurbs.ctlmatrix(this.controlMat.name);
    }

}