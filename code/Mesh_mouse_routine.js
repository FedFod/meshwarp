Mesh.prototype.mouseIdleRoutine = function(mouseWorld) {
    if (this.showMeshUI) {
        this.latestAction = GUI_ELEMENTS.NOTHING;
        this.checkIfMouseIsCloseToMoveHandle(mouseWorld);
        if (gMesh.isSelected) {
            this.setLatestMousePos(mouseWorld);
            this.checkIfMouseIsCloseToVertex(mouseWorld);
    
            if (this.mouseIsCloseTo != GUI_ELEMENTS.VERTEX) {
                this.checkIfMouseIsCloseToScaleHandles(mouseWorld);
                gGraphics.resetSingleCircle();
            }
        }
        this.updateGUI();
    }
}

Mesh.prototype.mouseClickedRoutine = function(mouseWorld, mouseClicked, oldMouseClicked, isGloballySelected) {
    if (this.showMeshUI) {
        if (mouseClicked) {
            if (this.mouseIsCloseTo == GUI_ELEMENTS.MOVE_HANDLE) {
                if (!gGlobal.isOnHandle) {
                    // assignThisAsCurrentlySelectedToGlobal();
                }
                if (isGloballySelected) {
                    this.moveMesh(mouseWorld);
                }
            } 
            if (isGloballySelected) {
                if (!oldMouseClicked && this.mouseIsCloseTo != GUI_ELEMENTS.NOTHING) {
                    this.saveUndoRedoPositionMat();
                }
                if (this.mouseIsCloseTo == GUI_ELEMENTS.SCALE_HANDLE) {
                    this.scaleWithHandle(mouseWorld);
                } else if (this.mouseIsCloseTo == GUI_ELEMENTS.VERTEX) {
                    if (this.selectedVerticesIndices.length > 1) {
                        this.moveSelectedVertices(mouseWorld);
                    } else {
                        this.moveVertexWithMouse(mouseWorld);
                        gGraphics.resetSelected();
                    }
                } else if (this.mouseIsCloseTo != GUI_ELEMENTS.MOVE_HANDLE) {
                    gGraphics.drawFrame(this.latestMousePos, mouseWorld);
                    this.highlightSelectedVertices(mouseWorld);
                }
            }
        }
        else { // mouse is released
            if (this.latestAction == GUI_ELEMENTS.WAS_SCALED) {
                this.setLatestScale();
            }
            else if (this.latestAction == GUI_ELEMENTS.WAS_MOVED_VERTICES) {
                this.deselectVertices();
            }
            if (this.mouseIsCloseTo != GUI_ELEMENTS.NOTHING) {
                this.saveUndoRedoPositionMat();
                this.calcMeshBoundsMat();
            }
            gGraphics.resetSingleCircle();
        }
        this.updateGUI();
    }
    if (!mouseClicked) {
        if (this.checkIfMouseIsInsideMesh(mouseWorld) == this.ID) {
            assignThisAsCurrentlySelectedToGlobal();
        }
    }
}