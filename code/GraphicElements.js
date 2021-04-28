function GraphicElements(nodectx) {
    this.sketch = new JitterObject("jit.gl.sketch");
    this.sketch.drawto = nodectx;
    this.sketch.depth_enable = 0;
    this.sketch.layer = FRONT;
    this.sketch.color = RED;
    this.sketch.line_width = 2;

    this.circleRadius = 0.03;

    this.transformMouseToWorld = function(screenCoord) {
        return this.sketch.screentoworld(screenCoord);
    }

    this.drawCircle = function(coordsWorld) {   
        this.sketch.reset();
        this.sketch.moveto(coordsWorld);
        this.sketch.framecircle(this.circleRadius);
    }

    this.reset = function() {
        this.sketch.reset();
    }

    this.drawSelection = function(start, end) {
        this.sketch.reset();
        this.sketch.framequad(start[0], start[1], 0, 
                                end[0], start[1], 0,
                                end[0], end[1], 0,
                                start[0], end[1], 0);
    }
}