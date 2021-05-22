Mesh.prototype.mouseIdleRoutine = function(mouseWorld, isGloballySelected) {
    this.checkIfMouseIsCloseToMoveHandle(mouseWorld);
    if (isGloballySelected && this.mouseIsCloseTo == GUI_ELEMENTS.NOTHING) {
        gGraphics.resetSingleCircle();
        this.setLatestMousePos(mouseWorld);
        this.checkIfMouseIsCloseToVertex(mouseWorld);

        if (this.mouseIsCloseTo != GUI_ELEMENTS.VERTEX) {
            this.checkIfMouseIsCloseToScaleHandles(mouseWorld);
        }
    }
    this.updateGUI();
}

Mesh.prototype.mouseClickedRoutine = function(mouseWorld, mouseClicked, oldMouseClicked, isGloballySelected) {
    if (mouseClicked) {
        if (this.mouseIsCloseTo == GUI_ELEMENTS.MOVE_HANDLE) {
            if (!gGlobal.isOnHandle) {
                assignThisAsCurrentlySelectedToGlobal();
            }
            if (isGloballySelected) {
                this.moveMesh(mouseWorld);
            }
            gGraphics.resetSelected();
        } else if (isGloballySelected) {
            if (!oldMouseClicked) {
                this.saveUndoRedoPositionMat();
            }
            if (this.mouseIsCloseTo == GUI_ELEMENTS.SCALE_HANDLE) {
                gGraphics.resetSingleCircle();
                this.scaleWithHandle(mouseWorld);
            } else if (this.mouseIsCloseTo == GUI_ELEMENTS.VERTEX) {
                if (this.selectedVerticesIndices.length > 1) {
                    this.moveSelectedVertices(mouseWorld);
                    gGraphics.resetSingleCircle();
                } else {
                    this.moveVertexWithMouse(mouseWorld);
                    gGraphics.resetSelected();
                }
            } else {
                gGraphics.drawFrame(this.latestMousePos, mouseWorld);
                this.highlightSelectedVertices(mouseWorld);
            }
        }
    }
    else { // mouse is released
        this.setLatestScale();
        // if vertices are moved
        if (this.selectedVerticesIndices.length > 1) {
            this.deselectVertices();
        }
        if (this.mouseIsCloseTo != GUI_ELEMENTS.NOTHING) {
            this.saveUndoRedoPositionMat();
        }
        gGraphics.resetSingleCircle();
    }
    this.updateGUI();
}