Mesh.prototype.drawMoveHandleInPos = function() {
    this.moveHandle.reset();
    
    this.moveHandle.handlePos = this.currentPos.slice();
    this.moveHandle.shapeslice(80);
    this.moveHandle.moveto(this.moveHandle.handlePos);
    this.moveHandle.glcolor(LIGHT_BLUE);
    this.moveHandle.framecircle(this.moveHandle.handleSize);
}

Mesh.prototype.drawMoveHandleFull = function() {
    if (this.mouseIsCloseTo == GUI_ELEMENTS.MOVE_HANDLE) {
        this.moveHandle.glcolor(LIGHT_BLUE_TRANSPARENT);
        this.moveHandle.circle(this.moveHandle.handleSize);
    }
}

Mesh.prototype.drawScaleHandles = function() {
    this.scaleHandles.reset();
    
    this.scaleHandles.handlesPositions[0] = [-this.currentScale[0]+this.currentPos[0], this.currentScale[1]+this.currentPos[1], 0];
    this.scaleHandles.handlesPositions[1] = [this.currentScale[0]+this.currentPos[0], this.currentScale[1]+this.currentPos[1], 0];
    this.scaleHandles.handlesPositions[2] = [this.currentScale[0]+this.currentPos[0], -this.currentScale[1]+this.currentPos[1], 0];
    this.scaleHandles.handlesPositions[3] = [-this.currentScale[0]+this.currentPos[0], -this.currentScale[1]+this.currentPos[1], 0];

    for (var i=0; i<this.scaleHandles.handlesPositions.length; i++) {
        this.scaleHandles.moveto(this.scaleHandles.handlesPositions[i]);
        this.scaleHandles.framecircle(this.scaleHandles.handleSize);
    }
}

Mesh.prototype.drawScaleHandleFull = function(index) {
    if (this.scaleHandles.index != -1) {
        this.scaleHandles.glcolor(LIGHT_BLUE_TRANSPARENT);
        this.scaleHandles.moveto(this.scaleHandles.handlesPositions[this.scaleHandles.index]);
        this.scaleHandles.circle(this.scaleHandles.handleSize);
    }
}

Mesh.prototype.drawAllHandles = function() {
    this.drawMoveHandleInPos();
    this.drawScaleHandles();
    this.drawMoveHandleFull();
    this.drawScaleHandleFull();
}

Mesh.prototype.updateGUI = function() {
    this.drawAllHandles();
}