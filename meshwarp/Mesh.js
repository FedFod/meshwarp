function Mesh()
{
    this.mesh = new JitterObject("jit.gl.mesh");
    this.mesh.draw_mode = "points";
    this.mesh.color = WHITE;
    this.mesh.point_size = 10;
    
    this.ID = 0; // ID of the mesh

    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);

    this.initMesh = function(dim_x, dim_y, drawto, ID)
    {   
        this.ID = ID;
        this.mesh.drawto = drawto;
        this.setMeshDim(dim_x, dim_y);
        this.initPositionMat();
        postln(this.mesh.drawto)
        postln(this.mesh.vertex_matrix.dim);
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
        postln("Initializing vertex matrix for mesh");
        postln(this.positionMat.dim)
    
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
        this.mesh.vertex_matrix(this.positionMat.name);
    }

    //-------------------------------------------
}