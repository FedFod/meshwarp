function GraphicElements(nodectx) {
    this.sketch = new JitterObject("jit.gl.sketch");
    this.sketch.drawto = nodectx;
    this.sketch.depth_enable = 0;
    this.sketch.layer = FRONT+1;
    this.sketch.color = RED;
    this.sketch.line_width = 2;

    this.circleRadius = 0.03;

    this.sketch2 = new JitterObject("jit.gl.sketch");
    this.sketch2.drawto = nodectx;
    this.sketch2.depth_enable = 0;
    this.sketch2.layer = FRONT;
    this.sketch2.color = YELLOW;
    this.sketch2.line_width = 2;    

    this.free = function() {
        this.sketch.freepeer();
        this.sketch2.freepeer();
    }

    this.transformMouseToWorld = function(screenCoord) {
        return this.sketch.screentoworld(screenCoord);
    }

    this.drawCircle = function(coordsWorld) {   
        if (checkIfItIsGloballySelected()) {
            this.sketch.reset();
            this.sketch.moveto(coordsWorld);
            this.sketch.framecircle(this.circleRadius);
        }
    }

    this.resetSingleCircle = function() {
        this.sketch.reset();
    }

    this.resetSelected = function() {
        this.sketch2.reset();
    }

    this.drawFrame = function(start, end) {
        this.sketch.reset();
        this.sketch.framequad(start[0], start[1], 0, 
                                end[0], start[1], 0,
                                end[0], end[1], 0,
                                start[0], end[1], 0);
    }

    this.drawSelectedCircles = function(coordsWorld) {
        this.sketch2.moveto(coordsWorld);
        this.sketch2.framecircle(this.circleRadius);
    }
}