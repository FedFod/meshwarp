Mesh.prototype.mouseIdleRoutine = function(mouseWorld) {
    if (this.showMeshUI) {
        //print(" showMeshUI mouse idle " + drawto);
        this.checkIfMouseIsCloseToMoveHandle(mouseWorld);
        this.checkIfMouseIsCloseToVertex(mouseWorld);
        if (this.mouseIsCloseTo != GUI_ELEMENTS.VERTEX) {
            this.checkIfMouseIsCloseToScaleHandles(mouseWorld);
            gGraphics.resetSingleCircle();
        }
        this.updateGUI();
    }
    else if (mask_mode)
    {
        this.checkIfMouseCloseToAnyMaskVertex(mouseWorld);
    }
    if (mask_mode || this.showMeshUI)
    {
        this.latestAction = GUI_ELEMENTS.NOTHING;
        this.resetMaskLatestAction();
        this.setLatestMousePos(mouseWorld);
    }
}

Mesh.prototype.mouseClickedRoutine = function(mouseState, oldMouseState_) {
    var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); 
    var mouseClicked = mouseState[2];
    var ctxOb = gGlobal.contexts[drawto];

    if (this.showMeshUI) {
        if (mouseClicked != 0) {
            debug(DEBUG.GLOBAL_SELECTION, "showMeshUI mouse clicked");
            switch (this.mouseIsCloseTo) {
                case (GUI_ELEMENTS.MOVE_HANDLE):
                    this.moveMeshWithHandle(mouseWorld);
                    break;
                case (GUI_ELEMENTS.SCALE_HANDLE):
                    this.scaleWithHandle(mouseWorld);
                    break;
                case (GUI_ELEMENTS.VERTEX):
                    if (this.selectedVerticesIndices.length > 1) {
                        if(this.isCurVertexInSelected()) {
                            this.moveSelectedVertices(mouseWorld);
                        }
                        else {
                            this.deselectVertices();
                            this.moveVertexWithMouse(mouseWorld);                           
                        }
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
            if (gCTRLPressed) {
                this.moveMeshWithCtrl(mouseWorld);
            }   
        }
        else { // mouse is released
            if (this.latestAction == GUI_ELEMENTS.WAS_SCALED) {
                this.setLatestScale_calcBoundsMat();
            }
            else if (this.latestAction == GUI_ELEMENTS.WAS_MOVED_VERTICES) {
                //this.deselectVertices();
            }
            else if (this.latestAction == GUI_ELEMENTS.WAS_MOVED_MESH) {
                this.storeLatestMeshPos();
            }
            if (this.latestAction != GUI_ELEMENTS.NOTHING) {
                this.saveUndoRedoPositionMat();
                this.calcMeshBoundsMat();
            }
            gGraphics.resetSingleCircle();
        }
        assignLatestActionToGlobal(this.latestAction);
        this.updateGUI();
    }

    // SELECT MESH GLOBALLY
    if (mouseClicked > 0) {
        var tempMouse = [mouseWorld[0], mouseWorld[1], 0];

        if (this.checkIfMouseIsInsideMesh(mouseWorld) == this.ID) {
            debug(DEBUG.GLOBAL_SELECTION, "mouse clicked true")
            setToGlobalIfMouseIsOnMesh(true);  

            // debug(DEBUG.MASK, "this Mesh Selected")
            if (mask_mode && gGlobal.checkIfItIsGloballySelected(nodeCTX.name))
            {   
                if (mouseClicked == 2 && gShiftPressed)
                {       
                    if (!this.addVertexToMaskMesh(tempMouse))
                    {
                        this.createNewMaskMesh(tempMouse);
                    }
                }
            } 
        } 
        else 
        {
            debug(DEBUG.GLOBAL_SELECTION, "mouse clicked false")
            setToGlobalIfMouseIsOnMesh(false);        
        }

        if (gGlobal.checkIfItIsGloballySelected(nodeCTX.name) && mask_mode)
        {
            if (mouseClicked == 2 && gShiftPressed)
            {   
                this.deleteMaskMesh();
            }
            else if (mouseClicked == 1)
            {   
                // Move Mask vertices or whole Mask
                this.moveSelectedMaskVertex(tempMouse);
            }
        }
    }
    else if (mask_mode && gGlobal.checkIfItIsGloballySelected(nodeCTX.name))
    {
        if (this.maskLatestAction.action != "NOTHING")
        {
            this.saveUndoRedoMaskState();
        }
    }

    if (!mouseClicked && ctxOb.latestAction === GUI_ELEMENTS.NOTHING) {
        if (ctxOb.mouseIsOnMesh[nodeCTX.name].isOnMesh) {
            debug(DEBUG.GLOBAL_SELECTION, "mouse clicked mouseIsOnMesh")
            var foundLayers = [];
            for (var mesh in ctxOb.mouseIsOnMesh) {
                if (ctxOb.mouseIsOnMesh[mesh].isOnMesh) {
                    foundLayers.push(ctxOb.mouseIsOnMesh[mesh].layer)
                }
            }
            if (foundLayers.length > 1) {
                if (getMaxFromArray(foundLayers) == layer) {
                    assignThisAsCurrentlySelectedToGlobal();
                } 
            } else {
                assignThisAsCurrentlySelectedToGlobal();
            }
        } else if (ctxOb.latestAction === GUI_ELEMENTS.NOTHING) {
            debug(DEBUG.GLOBAL_SELECTION, "mouse clicked deselectThisFromGlobal")
            deselectThisFromGlobal();
            setToGlobalIfMouseIsOnMesh(false);  
        }
    } 
}