function Mesh() {
    this.ID = 0; // ID of the mesh

    this.meshPoints = new JitterObject("jit.gl.mesh");
    this.meshGrid = new JitterObject("jit.gl.mesh");
    this.positionMat = new JitterMatrix(3, "float32", [10, 10]);

    this.maxPos = [-1000, -1000];
    this.minPos = [1000, 1000];

    this.initMesh = function(dim_x, dim_y, drawto, ID) {
        this.meshPoints = new JitterObject("jit.gl.mesh");
        this.meshPoints.draw_mode = "points";
        this.meshPoints.depth_enable = 0;
        this.meshPoints.layer = FRONT;
        this.meshPoints.color = WHITE;
        this.meshPoints.point_size = 10;
    
        this.meshGrid = new JitterObject("jit.gl.mesh");
        this.meshGrid.draw_mode = "tri_grid";
        this.meshGrid.depth_enable = 0;
        this.meshGrid.layer = BACKGROUND;
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

    this.getMaxMinPositionMat = function()
    {
        gJit3m.matrixcalc(this.positionMat, this.positionMat);
        this.minPos = gJit3m.min.slice(0, 2);
        this.maxPos = gJit3m.max.slice(0, 2);

        postln("min pos values (x, y): "+this.minPos);
        postln("max pos values (x, y): "+this.maxPos);
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
                xVal = map(xVal, 0., 1., -gWindowRatio + ((gWindowRatio / (gMeshesNumber/2)) * this.ID), 
                -gWindowRatio+(gWindowRatio/(gMeshesNumber/2)) + (gWindowRatio / (gMeshesNumber/2)) * this.ID);
                var yVal = ((j / (this.positionMat.dim[1]-1)) * 2.0) - 1.0;

                this.positionMat.setcell2d(i, j, xVal, yVal, 0.0);
            }
        }   

        // assign vertex mat to mesh
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);

        this.getMaxMinPositionMat();
    }

    //-------------------------------------------

    this.checkIfMouseInsideMesh = function(mouseWorld)
    {
        if (mouseWorld[0] >= this.minPos[0] && mouseWorld[0] <= this.maxPos[0])
        {
            return 1;
        } else {
            return 0;
        }
    }

    this.checkIfVertexDragged = function(mouseWorld)
    {   
        if (this.checkIfMouseInsideMesh(mouseWorld))
        {
            for (var i=0; i<this.positionMat.dim[0]; i++)
            {
                for (var j=0; j<this.positionMat.dim[1]; j++)
                {
                    var currVertexPos = this.positionMat.getcell(i,j);
                    var distFromMouse = calcDist2D(currVertexPos.slice(0,2), mouseWorld.slice(0,2));
    
                    if (distFromMouse <= 0.1) {
                        graphics.drawCircle(mouseWorld);
                    }
                }
            }
        }
    }
}