Mesh.prototype.mouseIdleRoutine = function(mouseWorld) {
    if (this.showMeshUI) {
        this.latestAction = GUI_ELEMENTS.NOTHING;
        this.checkIfMouseIsCloseToMoveHandle(mouseWorld);
        this.setLatestMousePos(mouseWorld);
        this.checkIfMouseIsCloseToVertex(mouseWorld);
        if (this.mouseIsCloseTo != GUI_ELEMENTS.VERTEX) {
            this.checkIfMouseIsCloseToScaleHandles(mouseWorld);
            gGraphics.resetSingleCircle();
        }
        this.updateGUI();
    }
}

Mesh.prototype.mouseClickedRoutine = function(mouseState, oldMouseState_) {
    var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); 
    var mouseClicked = mouseState[2];

    if (this.showMeshUI) {
        var oldMouseClicked = oldMouseState_[2];

        if (mouseClicked) {
            // gGraphics.drawID(this.getMeshCenter(this.positionMat));
            if (!oldMouseClicked && this.mouseIsCloseTo != GUI_ELEMENTS.NOTHING) {
                this.saveUndoRedoPositionMat();
            }
            switch (this.mouseIsCloseTo) {
                case (GUI_ELEMENTS.MOVE_HANDLE):
                    this.moveMeshWithHandle(mouseWorld);
                    break;
                case (GUI_ELEMENTS.SCALE_HANDLE):
                    this.scaleWithHandle(mouseWorld);
                    break;
                case (GUI_ELEMENTS.VERTEX):
                    if (this.selectedVerticesIndices.length > 1) {
                        this.moveSelectedVertices(mouseWorld);
                    } else {
                        this.moveVertexWithMouse(mouseWorld);
                        gGraphics.resetSelected();
                    }
                    break;
                case (GUI_ELEMENTS.NOTHING):
                    if (checkIfVec2AreDifferent(mouseState, oldMouseState_)) {
                        gGraphics.drawFrame(this.latestMousePos, mouseWorld);
                        this.highlightSelectedVertices(mouseWorld);
                    }
                default: 
                    break;
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
        assignLatestActionToGlobal(this.latestAction);
        this.updateGUI();
    }

    // SELECT MESH GLOBALLY
    if (mouseClicked) {
        if (this.checkIfMouseIsInsideMesh(mouseWorld) == this.ID) {
            setToGlobalIfMouseIsOnMesh(true);        } 
        else {
            setToGlobalIfMouseIsOnMesh(false);        }
    }

    if (!mouseClicked && gGlobal.latestAction === GUI_ELEMENTS.NOTHING) {
        if (gGlobal.mouseIsOnMesh[nodeCTX.name].isOnMesh) {
            var foundLayers = [];
            for (var mesh in gGlobal.mouseIsOnMesh) {
                if (gGlobal.mouseIsOnMesh[mesh].isOnMesh) {
                    foundLayers.push(gGlobal.mouseIsOnMesh[mesh].layer)
                }
            }
            if (foundLayers.length > 1) {
                if (foundLayers.max() == layer) {
                    assignThisAsCurrentlySelectedToGlobal();
                } 
            } else {
                assignThisAsCurrentlySelectedToGlobal();
            }
        } else if (gGlobal.latestAction === GUI_ELEMENTS.NOTHING) {
            deselectThisFromGlobal();
            setToGlobalIfMouseIsOnMesh(false);  
        }
    } 
}