function Mesh() {
    this.ID = 0; // ID of the mesh

    this.meshPoints = new JitterObject("jit.gl.mesh");
    this.meshGrid = new JitterObject("jit.gl.mesh");
    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);

    this.initMesh = function(dim_x, dim_y, drawto, ID) {
        this.meshPoints = new JitterObject("jit.gl.mesh");
        this.meshPoints.draw_mode = "points";
        this.meshPoints.depth_enable = 0;
        this.meshPoints.layer = 10;
        this.meshPoints.color = WHITE;
        this.meshPoints.point_size = 10;
    
        this.meshGrid = new JitterObject("jit.gl.mesh");
        this.meshGrid.draw_mode = "tri_grid";
        this.meshGrid.depth_enable = 0;
        this.meshGrid.layer = 9;
        this.meshGrid.color = randomColor();

        this.positionMat = new JitterMatrix(3, "float32", [10, 10]);

        this.ID = ID;
        this.meshPoints.drawto = drawto;
        this.meshGrid.drawto   = drawto;
        this.setMeshDim(dim_x, dim_y);
        this.initPositionMat();
        postln("mesh draws to: " + this.meshPoints.drawto)
    }

    this.freeMesh = function() {
        this.positionMat.freepeer();
        this.meshPoints.freepeer();
        this.meshGrid.freepeer();
    }

    this.setMeshDim = function(dim_x, dim_y)
    {   
        if (dim_x && dim_y) {
            this.positionMat.dim = [dim_x, dim_y];
        } 
        else {
            this.positioMat.dim = [4,4];
        }
    }

    this.initPositionMat = function()
    {
        postln("Initializing vertex matrix for mesh with ID " + this.ID);
    
        // Set values for position matrix
        for(var i=0; i<this.positionMat.dim[0]; i++)
        {
            for(var j=0; j<this.positionMat.dim[1]; j++)
            {   
                var xVal = (i / (this.positionMat.dim[0]-1));
                xVal = map(xVal, 0., 1., -windowRatio + ((windowRatio / (meshesNumber/2)) * this.ID), 
                -windowRatio+(windowRatio/(meshesNumber/2)) + (windowRatio / (meshesNumber/2)) * this.ID);
                var yVal = ((j / (this.positionMat.dim[1]-1)) * 2.0) - 1.0;

                this.positionMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }   

        // assign vertex mat to mesh
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
    }

    //-------------------------------------------

    this.checkIfVertexDragged = function(mouseArray)
    {
        for (var i=0; i<this.positionMat.dim[0]; i++)
        {
            for (var j=0; j<this.positionMat.dim[1]; j++)
            {
                var currVertexPos = this.positionMat.getcell(i,j);
                var distFromMouse = calcDist2D(currVertexPos.slice(0,2), mouseArray.slice(0,2));

                if (distFromMouse <= 0.2) {
                    postln("gotcha")
                }
            }
        }
    }
}