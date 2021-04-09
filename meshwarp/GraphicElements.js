function GraphicElements() {
    this.sketch = new JitterObject("jit.gl.sketch");
    this.sketch.depth_enable = 0;
    this.sketch.layer = FRONT;
    this.sketch.color = RED;
    this.sketch.line_width = 2;

    this.circleRadius = 0.03;

    this.setDrawto = function(drawto) {
        this.sketch.drawto = drawto;
        postln(this.sketch.drawto)
    }

    this.initGraphicElements = function() {
        this.setDrawto(nodeCTX.name);
    }

    this.drawCircle = function(coordsWorld) {   
        this.sketch.reset();
        this.sketch.moveto(coordsWorld);
        this.sketch.framecircle(this.circleRadius);
    }

    this.reset = function() {
        this.sketch.reset();
    }
}