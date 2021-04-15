function Mesh() {
    Canvas.call(this);  // inherit from Canvas class

    this.meshPoints = null;
    this.meshGrid = null;
    this.meshFull = null;

    this.textureCoordMat = null;

    this.initMesh = function(dimensions, drawto, ID) {
        this.meshPoints = new JitterObject("jit.gl.mesh");
        this.meshPoints.draw_mode = "points";
        this.meshPoints.depth_enable = 0;
        this.meshPoints.layer = FRONT;
        this.meshPoints.color = WHITE;
        this.meshPoints.point_size = 10;
    
        this.meshGrid = new JitterObject("jit.gl.mesh");
        this.meshGrid.draw_mode = "quad_grid";
        this.meshGrid.depth_enable = 0;
        this.meshGrid.layer = MIDDLE;
        this.meshGrid.color = randomColor();
        this.meshGrid.poly_mode = [1, 1];
        this.meshGrid.line_width = 3;

        this.meshFull = new JitterObject("jit.gl.mesh");
        this.meshFull.draw_mode = "quad_grid";
        this.meshFull.depth_enable = 0;
        this.meshFull.layer = BACKGROUND;
        this.meshFull.color = WHITE;

        this.textureCoordMat = new JitterMatrix(2, "float32", [10, 10]);

        this.ID = ID;
        this.meshPoints.drawto = drawto;
        this.meshGrid.drawto   = drawto;
        this.meshFull.drawto   = drawto;

        this.setMeshDim(dimensions);  // calculate and set matrices dimensions
        this.initPositionMat();
        this.assignPositionMatToMesh(); // assign vertex mat to mesh
        this.calcBoundingPolygonMat();

        this.initTextureCoordMat(this.textureCoordMat);
        this.assignTextureCoordMatToMesh();

        this.assignTexture(this.meshFull);
        
        postln("mesh draws to: " + this.meshPoints.drawto)
    }

    this.freeMesh = function() {
        if (this.positionMat) {
            this.positionMat.freepeer();
            this.boundingMat.freepeer();
            this.adjacentCellsMat.freepeer();
            this.textureCoordMat.freepeer();
            this.meshPoints.freepeer();
            this.meshGrid.freepeer();
            this.meshFull.freepeer();
        }
    }

    this.showMesh = function(show) {
        this.meshGrid.enable = show;
        this.meshPoints.enable = show;
    }

    this.setMeshDim = function(dimensions)
    {   
        if (dimensions[0] > 0 && dimensions[1] > 0) {
            this.positionMat.dim = dimensions.slice();
            this.boundingMat.dim = dimensions[0]*2 + (dimensions[1] * 2) - 4;
            this.textureCoordMat.dim = dimensions.slice();
        } 
        else {
            this.positionMat.dim = [4,4];
            this.boundingMat.dim = 4*2 + (4 * 2) - 4;
            this.textureCoordMat.dim = [4, 4];
        }
    }

    this.resizeMesh = function(sizeX, sizeY) {
        var tempMat = new JitterMatrix(3, "float32", [sizeX, sizeY]);
        tempMat.interp = 1;

        tempMat.frommatrix(this.positionMat);
        
        this.setMeshDim([sizeX, sizeY]);

        this.positionMat.frommatrix(tempMat);
        tempMat.freepeer();

        this.assignPositionMatToMesh();
        this.initTextureCoordMat(this.textureCoordMat);
        this.assignTextureCoordMatToMesh();
        this.calcBoundingPolygonMat();
    }


    this.assignPositionMatToMesh = function() {
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
        this.meshFull.vertex_matrix(this.positionMat.name);
    }

    this.assignTextureCoordMatToMesh = function() {
        this.meshFull.texcoord_matrix(this.textureCoordMat.name);
    }

    //-------------------------------------------


}

