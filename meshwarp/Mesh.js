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
        if (this.positionMat) {
            this.positionMat.freepeer();
            this.meshPoints.freepeer();
            this.meshGrid.freepeer();
        }
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
        this.assignPositionMatToMesh();

        this.getMaxMinPositionMat();
    }

    this.setVertexPos = function(coordsWorld, cellIndex) {
        this.positionMat.setcell2d(cellIndex[0], cellIndex[1], coordsWorld[0], coordsWorld[1], 0.0);
    }

    this.assignPositionMatToMesh = function() {
        this.meshPoints.vertex_matrix(this.positionMat.name);
        this.meshGrid.vertex_matrix(this.positionMat.name);
    }

    //-------------------------------------------

    this.moveVertex = function(coordsWorld, cellIndex) {
        this.setVertexPos(coordsWorld, cellIndex);
        this.assignPositionMatToMesh();
    }

    this.checkIfMouseInsideMesh = function(mouseWorld)
    {
        if (mouseWorld[0] >= this.minPos[0] && mouseWorld[0] <= this.maxPos[0])
        {
            return this.ID;
        } else {
            return -1;
        }
    }

    this.checkIfVertexIsClicked = function(mouseWorld)
    {   
        for (var i=0; i<this.positionMat.dim[0]; i++)
        {
            for (var j=0; j<this.positionMat.dim[1]; j++)
            {
                var currVertexPos = this.positionMat.getcell(i,j);
                var distFromMouse = calcDist2D(currVertexPos.slice(0,2), mouseWorld.slice(0,2));

                if (distFromMouse <= 0.1) {
                    graphics.drawCircle(currVertexPos);
                    return [i, j].splice(0);
                }
            }
        } 
        return [-1, -1].splice(0);
    } 
}