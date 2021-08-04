function GraphicElements(nodectx) {
    this.sketch = new JitterObject("jit.gl.sketch");
    this.sketch.drawto = nodectx;
    this.sketch.depth_enable = 0;
    this.sketch.layer = FRONT+2;
    this.sketch.color = RED;
    this.sketch.line_width = 3;

    this.circleRadius = 0.03;

    this.sketch2 = new JitterObject("jit.gl.sketch");
    this.sketch2.drawto = nodectx;
    this.sketch2.depth_enable = 0;
    this.sketch2.layer = FRONT;
    this.sketch2.color = YELLOW;
    this.sketch2.line_width = 2;    

    this.text = new JitterObject("jit.gl.text");
    this.text.drawto = nodectx;
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
        if (gGlobal.checkIfItIsGloballySelected(nodeCTX.name)) {
            this.sketch.reset();
            this.sketch.moveto(coordsWorld);
            this.sketch.framecircle(this.circleRadius);
        }
    }

    this.highlightCircle = function(cellIndex) {
        var coordsWorld = gMesh.getPositionMatCell(cellIndex);
        this.drawCircle(coordsWorld);
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
    }

    this.drawSelectedCircles = function(coordsWorld) {
        this.sketch2.moveto(coordsWorld);
        this.sketch2.framecircle(this.circleRadius);
    }

    this.drawID = function(position) {
        this.text.position = position;
        this.text.text(gMesh.ID);
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