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
            debug(DEBUG.GLOBAL_SELECTION, "IS INSIDE")
            setToGlobalIfMouseIsOnMesh(true);        } 
        else {
            debug(DEBUG.GLOBAL_SELECTION, "IS NOT INSIDE")
            setToGlobalIfMouseIsOnMesh(false);        }
    }
    debug(DEBUG.GLOBAL_SELECTION, "LATEST ACTION "+gGlobal.latestAction)
    if (!mouseClicked && gGlobal.latestAction === GUI_ELEMENTS.NOTHING) {
        debug(DEBUG.GLOBAL_SELECTION, gGlobal.mouseIsOnMesh[nodeCTX.name])
        if (gGlobal.mouseIsOnMesh[nodeCTX.name][0]) {
            var alreadyFound = [false, 80];
            for (var isIt in gGlobal.mouseIsOnMesh) {
                if (gGlobal.mouseIsOnMesh[isIt][0] && isIt != nodeCTX.name) {
                    alreadyFound = gGlobal.mouseIsOnMesh[isIt].slice();
                    break;
                }
            }
            debug(DEBUG.GLOBAL_SELECTION, "other mesh layer : "+alreadyFound[1])
            if (alreadyFound[1] < videoplane.layer) {
                debug(DEBUG.GLOBAL_SELECTION, "assigning to global")
                assignThisAsCurrentlySelectedToGlobal();
            }
        } else if (gGlobal.latestAction === GUI_ELEMENTS.NOTHING) {
            debug(DEBUG.GLOBAL_SELECTION, "setting layer to 80")
            deselectThisFromGlobal();
            setToGlobalIfMouseIsOnMesh(false);  
        }
        debug(DEBUG.GLOBAL_SELECTION, gGlobal.mouseIsOnMesh[nodeCTX.name][1])
    } 
}