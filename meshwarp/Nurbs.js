function Nurbs() {
    Canvas.call(this);  // inherit from Canvas class

    this.nurbs = null;

    this.initNurbs = function(dimensions, drawto, ID) {
        this.nurbs = new JitterObject("jit.gl.nurbs");
        this.nurbs.dim = [40, 40];
        this.nurbs.depth_enable = 0;
        this.nurbs.layer = BACKGROUND;
        this.nurbs.color = WHITE;
        this.nurbs.ctlshow = 1;
        this.nurbs.drawto = drawto;
        // this.nurbs.tex_map = 1;
        // this.nurbs.tex_plane_s = [0.25, 0, 0, 0];


        this.ID = ID;
        this.setMeshDim(dimensions);
        this.initPositionMat();
        this.assignPositionMatToMesh();
        this.calcBoundingPolygonMat();

        this.assignTexture(this.nurbs);
    }

    this.freeNurbs = function() {
        if (this.controlMat) {
            this.nurbs.freepeer();
            this.controlMat.freepeer();
        }
    }

    this.setMeshDim = function(dimensions) {
        if (dimensions[0] > 0 && dimensions[1] > 0) {
            this.positionMat.dim = dimensions.slice();
            this.boundingMat.dim = dimensions[0]*2 + (dimensions[1] * 2) - 4;
        } 
        else {
            this.positionMat.dim = [4,4];
        }
    }

    this.assignPositionMatToMesh = function() {
        this.nurbs.ctlmatrix(this.positionMat.name);
    }

}