Mesh.prototype.drawMoveHandleInPos = function(pos) {
    this.moveHandle.reset();
    if (pos) {
        this.moveHandle.handlePos = [pos[0], pos[1], 0];
    }
    this.moveHandle.shapeslice(80);
    this.moveHandle.moveto(this.moveHandle.handlePos);
    this.moveHandle.glcolor(LIGHT_BLUE);
    this.moveHandle.framecircle(this.moveHandle.handleSize);
}

Mesh.prototype.drawHandleFull = function() {
    this.moveHandle.glcolor(LIGHT_BLUE_TRANSPARENT);
    this.moveHandle.circle(this.moveHandle.handleSize);
}

Mesh.prototype.drawScaleHandles = function() {
    this.scaleHandles.reset();
    gMinMaxMat.matrixcalc(this.positionMat, this.positionMat);
    var min = gMinMaxMat.min.slice();
    var max = gMinMaxMat.max.slice();

    this.scaleHandles.handlesPositions[0] = [min[0], max[1], 0];
    this.scaleHandles.handlesPositions[1] = [max[0], max[1], 0];
    this.scaleHandles.handlesPositions[2] = [max[0], min[1], 0];
    this.scaleHandles.handlesPositions[3] = [min[0], min[1], 0];

    for (var i=0; i<this.scaleHandles.handlesPositions.length; i++) {
        this.scaleHandles.moveto(this.scaleHandles.handlesPositions[i]);
        this.scaleHandles.framecircle(this.scaleHandles.handleSize);
    }
}

Mesh.prototype.drawScaleHandleFull = function(index) {
    this.scaleHandles.glcolor(LIGHT_BLUE_TRANSPARENT);
    this.scaleHandles.moveto(this.scaleHandles.handlesPositions[index]);
    this.scaleHandles.circle(this.scaleHandles.handleSize);
}