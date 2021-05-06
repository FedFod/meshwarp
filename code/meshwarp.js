autowatch = 1;
outlets = 2;
include("Global_Obj.js");
include("GetContext.js");
include("Mesh.js");
include("Mesh_scale.js");
include("Mesh_save_load.js");
include("Mesh_dim.js");
include("Mesh_mouse_interaction.js");
include("Mesh_handles.js");
include("Utilities.js");
include("GraphicElements.js");
include("PrivateFunctions.js");
include("Canvas.js");

// GLOBAL VARIABLES
var gMesh = null;
var gMousePosScreen = [];
var gMinimumSelectionDist = 0.06;
var gWindowDim = [256, 256]; //nodeCTX.dim.slice();
var gWindowRatio = 1; 
var gWindowPrevRatio = gWindowRatio;
var gTextureNames = "noTexture";
var gLatestMousePos = [0,0];

// a structure to contain infos relative to the clicked mesh and vertex
var gSelectionStruct = {
	cellIndex: [-1, -1], 
	oldCellIndex: [-1, -1],
	mouseIsOnMesh: 0,
	isTopMesh: 0,
	reset: function() {
		this.cellIndex = [-1, -1];
		this.mouseIsOnMesh = 0;   // the mesh we are going to operate on
	},
	howManyVerticesSelected: 0,
	areVerticesMoved: 0
};

//-----PUBLIC FUNCTIONS----------------
function reset() {
	show_mesh = 1;
	init();
}

function jit_gl_texture(texName) {
	if (gMesh) {
		gMesh.assignTextureToMesh(texName);
	}
}

function save_state(path) {
	postln("saveing to " + path);
	buildSaveDict(path);
}

function load_state(path) {
	postln("loading to " + path);
	loadSaveDict(path);
}

function freebang() {
	//postln("freebang");
	removeThisMeshwarpObjFromGlobal(); // remove from global meshwarp array
	freeMeshes();
	gGraphics.sketch.freepeer();
	nodeCTX.freepeer();
	videoplane.freepeer();
	nodeCamera.freepeer();
	implicit_lstnr.subjectname = ""
	implicit_tracker.freepeer();
	// what else?
}

// ATTRIBUTES
var mode = 0; // default: use NURBS
declareattribute("mode", null, "setMode", 0);

var meshcount = 1; 
declareattribute("meshcount", null, "setHowManyMeshes", 0);

var meshdim = [4, 4];
declareattribute("meshdim", null, "resizeAllMeshes", 0);

var show_mesh = 1;
declareattribute("show_mesh", null, "showMesh", 0);

var enable = 1;
declareattribute("enable", null, "setenable", 0);

var drawto = "";
declareattribute("drawto", null, "setdrawto", 0);

var scale = [1, 1];
declareattribute("scale", null, "scaleAllMeshes", 0);

var nurbs_order = 1;
declareattribute("nurbs_order", null, "setNurbsOrder", 0);

var texture = [""];
declareattribute("texture", null, "setTexturesMeshes", 0);

var layer = 0;
declareattribute("layer", null, "setMeshwarpLayer", 0);

//--------------------------------------------

function swapcallback(event){
	//post("callback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");			
	switch (event.eventname) {
		// if context is root we use swap, if jit.gl.node use draw
		case ("swap" || "draw"):
		// RENDER BANG
			if (gWindowDim[0] != nodeCTX.dim[0] || gWindowDim[1] != nodeCTX.dim[1]) {
				setWindowRatio(nodeCTX.dim);
				gWindowDim = nodeCTX.dim.slice();
				if (gMesh==null) {
					gWindowPrevRatio = gWindowRatio;
					init(); // INIT if meshes don't exist
				}
				gMesh.scaleToWindowRatio();
			}
			break;

		case "mouse": // get mouse array when mouse is clicked or released
			if (enable) {
				gMousePosScreen = event.args.slice();
				var mouseClicked = gMousePosScreen[2];
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); 

				
				if (mouseClicked) {
					if (gSelectionStruct.cellIndex[0] == -100) { // we are on the move handle, even if the meshwarp is not the active one
						moveWholeMesh(mouseWorld);
					} else if (checkIfItIsGloballySelected() && show_mesh) {
						if (gSelectionStruct.cellIndex[0] != -1) {  // we are clicking on something 
							if(gSelectionStruct.cellIndex[0] == -50) {
								gMesh.scaleWithHandle(gLatestMousePos, mouseWorld);
							} else {
								moveSingleVertexOrSelectedVertices(mouseWorld);
							}
						} else { // if we are not clicking on anything then create the vertices selection quad
							selectMultipleVertices(mouseWorld);
						}
					}
				} else { // mouse is released
					// if we moved a single vertex
					if (gSelectionStruct.cellIndex[0] != -1) {
						gMesh.calcMeshBoundsMat(); // recalculate the bounding matrix only when finished dragging
						gSelectionStruct.reset(); // reset the values in the selectionStruct
						if (gSelectionStruct.cellIndex[0] == -50) {
							print("this")
							gMesh.unscaledPosMat.frommatrix(gMesh.positionMat);
						}
					}
					// if we did select more vertices and moved them
					if (gSelectionStruct.howManyVerticesSelected && gSelectionStruct.areVerticesMoved) {
						gSelectionStruct.howManyVerticesSelected = 0;
						gSelectionStruct.areVerticesMoved = 0;
						gMesh.deselectVertices();
					}
					gGraphics.resetSingleCircle(); // delete graphics if mouse unclicked
				}
			}
			break;
		
		case "mouseidle":  // Check if mouse is close to vertices to highlight them
			if (enable) {
				gMousePosScreen = (event.args);
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); //transformMouseFromScreenToWorld2D(gMousePosScreen); 
				gLatestMousePos = mouseWorld.slice(); // set latest mouse pos (used for selecting multiple)

				// physWorld.screenraytest(gMousePosScreen);
				gSelectionStruct.reset(); // reset all the struct values

				if (checkIfItIsGloballySelected() && show_mesh) {
					gSelectionStruct.cellIndex = gMesh.checkIfMouseIsCloseToScaleHandles(mouseWorld); // if we are not in the move handle, check the scale handles
				}
				
				gSelectionStruct.mouseIsOnMesh = gMesh.checkIfMouseInsideMesh(mouseWorld); // check if we are in a mesh and not in an empty area

				if (gSelectionStruct.mouseIsOnMesh != -1) {  // We are inside the mesh
					if (gSelectionStruct.cellIndex[0] == -1) {
						gSelectionStruct.cellIndex = gMesh.checkIfMouseIsCloseToHandle(mouseWorld); // check if mouse is close to move handle
						// if we are on a mesh and it's the selected one, let's check if the mouse is close to a vertex
						if (checkIfItIsGloballySelected() && show_mesh) { // if this is the currently selected meshwarp
							gGraphics.resetSingleCircle(); 
							
							if (gSelectionStruct.cellIndex[0] == -1) { // otherwise let's check if we click on a vertex
								gSelectionStruct.cellIndex = gMesh.mouseIsCloseToVertex(mouseWorld); // check if the mouse is close to any vertex in the mesh
							}
							// check if the cell currently selected is different from the previous cell selected. 
							// In case it is different we fill the matrix with the adjacent cells for bounding calculation
							// calculateBoundingCells(gSelectionStruct);
						} 
					}	
				}
			}
			break;
	}
}
swapcallback.local = 1

