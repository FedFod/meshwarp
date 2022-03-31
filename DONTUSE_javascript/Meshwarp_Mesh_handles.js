Mesh.prototype.initMvmtHandle = function(drawto_) {
    this.moveHandle = new JitterObject("jit.gl.sketch", drawto_);
    this.moveHandle.layer = FRONT;
    this.moveHandle.color = LIGHT_BLUE;
    this.moveHandle.line_width = 2;
    this.moveHandle.handlePos = [];
    this.moveHandle.handleSize = 0.08;
    this.moveHandle.blend_enable = 1;
    this.moveHandle.depth_enable = 0;
    this.drawMoveHandleInPos(this.getMeshCenter(this.positionMat));
}

Mesh.prototype.initScaleHandles = function(drawto_) {
    // FF_Utils.Print("INIT SCALE  HANDLES");
    this.scaleHandles = new JitterObject("jit.gl.sketch", drawto_);
    this.scaleHandles.layer = FRONT;
    this.scaleHandles.color = ORANGE;
    this.scaleHandles.line_width = 2;
    this.scaleHandles.blend_enable = 1;
    this.scaleHandles.depth_enable = 0;
    this.scaleHandles.handleSize = 0.1;
    this.scaleHandles.handlesPositions = [];
    this.scaleHandles.index = -1;
    this.drawScaleHandles();
}

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

Mesh.prototype.setScaleHandlesPositions = function() {
    this.scaleHandles.handlesPositions[0] = [-this.currentScale[0]+this.currentPos[0], this.currentScale[1]+this.currentPos[1], 0];
    this.scaleHandles.handlesPositions[1] = [this.currentScale[0]+this.currentPos[0], this.currentScale[1]+this.currentPos[1], 0];
    this.scaleHandles.handlesPositions[2] = [this.currentScale[0]+this.currentPos[0], -this.currentScale[1]+this.currentPos[1], 0];
    this.scaleHandles.handlesPositions[3] = [-this.currentScale[0]+this.currentPos[0], -this.currentScale[1]+this.currentPos[1], 0];
}

Mesh.prototype.drawScaleHandles = function() {
    this.scaleHandles.reset();
    for (var i=0; i<this.scaleHandles.handlesPositions.length; i++) {
        this.scaleHandles.moveto(this.scaleHandles.handlesPositions[i]);
        this.scaleHandles.framecircle(this.scaleHandles.handleSize);
    }
}

Mesh.prototype.rotateScaleHandles = function(angle) {
    for (var i=0; i<this.scaleHandles.handlesPositions.length; i++) {
        this.scaleHandles.handlesPositions[i] = subVec2D(this.scaleHandles.handlesPositions[i], this.currentPos);
        this.scaleHandles.handlesPositions[i] = rotate2D(this.scaleHandles.handlesPositions[i], angle);
        this.scaleHandles.handlesPositions[i] = sumVec2D(this.scaleHandles.handlesPositions[i], this.currentPos);
    }
    this.drawScaleHandles();
}

Mesh.prototype.drawScaleHandleFull = function() {
    if (this.scaleHandles.index != -1) {
        this.scaleHandles.glcolor(LIGHT_BLUE_TRANSPARENT);
        this.scaleHandles.moveto(this.scaleHandles.handlesPositions[this.scaleHandles.index]);
        this.scaleHandles.circle(this.scaleHandles.handleSize);
    }
}

Mesh.prototype.updateGUI = function() {
    this.drawMoveHandleInPos();
    this.setScaleHandlesPositions();
    // this.rotateScaleHandles(this.latestRotation);
    this.drawScaleHandles();
    this.drawMoveHandleFull();
    this.drawScaleHandleFull();
}

Mesh.prototype.showMoveHandle = function(val) {
    this.moveHandle.enable = val;
    this.enableMoveHandle = val;
}

Mesh.prototype.showScaleHandles = function(val) {
    this.scaleHandles.enable = val;
    this.enableScaleHandles = val;
}
