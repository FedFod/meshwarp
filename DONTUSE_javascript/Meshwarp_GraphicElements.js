function GraphicElements() {
    this.graphicsNode = new JitterObject("jit.gl.node");
    this.graphicsNode.capture = 1;
    this.graphicsNode.fsaa = 1;
    this.graphicsNode.erase_color = [0,0,0,0];

    this.graphicsCamera = new JitterObject("jit.gl.camera");
    this.graphicsCamera.drawto = this.graphicsNode.name;
    this.graphicsCamera.ortho = 2;

    this.graphicsVideoplane = new JitterObject("jit.gl.videoplane");
    this.graphicsVideoplane.layer = layer+1;
    this.graphicsVideoplane.transform_reset = 2;
    this.graphicsVideoplane.color = [1,1,1,1];
    this.graphicsVideoplane.blend_enable = 1;
    this.graphicsVideoplane.depth_enable = 0;
    this.graphicsVideoplane.enable = 1;

    this.graphicsVideoplane.texture = this.graphicsNode.out_name;

    this.setDrawto = function(drawto_)
    {
        this.graphicsNode.drawto = drawto_;
        this.graphicsVideoplane.drawto = drawto_;
    }

    this.getGraphicsNodeName = function()
    {
        return this.graphicsNode.name;
    }

    this.setGraphicsVidPlaneLayer = function(layer_) 
    {
        this.graphicsVideoplane.layer = layer_;
    }

    // GUI GRAPHICS
    //---------------------------------------
    this.sketch = new JitterObject("jit.gl.sketch");
    this.sketch.drawto = this.graphicsNode.name;
    this.sketch.depth_enable = 0;
    this.sketch.layer = FRONT+2;
    this.sketch.color = RED;
    this.sketch.line_width = 3;

    this.circleRadius = 0.03;

    this.sketch2 = new JitterObject("jit.gl.sketch");
    this.sketch2.drawto = this.graphicsNode.name;
    this.sketch2.depth_enable = 0;
    this.sketch2.layer = FRONT;
    this.sketch2.color = YELLOW;
    this.sketch2.line_width = 2;    

    this.text = new JitterObject("jit.gl.text");
    this.text.drawto = this.graphicsNode.name;
    this.text.layer = FRONT;
    this.text.fontsize = 30;
    this.text.color = WHITE;

    this.changeSelectionCirclesRadius = function(windowDim) {
        this.circleRadius = 20 / windowDim[1];
    }

    this.transformMouseToWorld = function(screenCoord) {
        return this.sketch.screentoworld(screenCoord);
    }

    this.drawCircle = function(coordsWorld) {   
        this.sketch.reset();
        this.sketch.moveto(coordsWorld);
        this.sketch.framecircle(this.circleRadius);
    }

    this.highlightCircle = function(cellIndex) {
        if (gMesh != null)
		{
            var coordsWorld = gMesh.getPositionMatCell(cellIndex);
            this.drawCircle(coordsWorld);
        }
    }

    this.resetSingleCircle = function() {
        this.sketch.reset();
    }

    this.resetSelected = function() {
        this.sketch2.reset();
    }

    this.drawFrame = function(start, end) {
        debug(DEBUG.GRAPHICS, "is drawing frame")
        assignLatestActionToGlobal(GUI_ELEMENTS.DRAWING_FRAME);
        this.sketch.reset();
        this.sketch.framequad(start[0], start[1], 0, 
                                end[0], start[1], 0,
                                end[0], end[1], 0,
                                start[0], end[1], 0);
    }

    this.free = function() {
        this.sketch.freepeer();
        this.sketch2.freepeer();
        this.text.freepeer();
        this.graphicsNode.freepeer();
        this.graphicsCamera.freepeer();
        this.graphicsVideoplane.freepeer();
    }

    this.drawSelectedCircles = function(coordsWorld) {
        this.sketch2.moveto(coordsWorld);
        this.sketch2.framecircle(this.circleRadius);
    }

    this.drawID = function(position) {
        this.text.position = position;
        if (gMesh != null)
		{
            this.text.text(gMesh.ID);
        }
    }

    this.setLayer = function(val) {
        this.sketch.layer = FRONT+val+1;
        this.sketch2.layer = FRONT+val;
    }

    this.setSingleCircleAndFrameColor = function(color) {
        this.sketch.color = color;
    }

    this.setMultipleSelectionCirclesColor = function(color) {
        this.sketch2.color = color;
    }

    this.setCirclesAndFrameSize = function(val) {
        this.sketch.shapeslice(val*50);
        this.circleRadius = val*0.06;
        this.sketch.line_width = val*3;
        this.sketch2.line_width = val*3;
    }
}