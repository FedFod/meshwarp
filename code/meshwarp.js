autowatch = 1;
outlets = 2;
include("Global_Obj.js");
include("GetContext.js");
include("Mesh.js");
include("Mesh_scale.js");
include("Mesh_save_load.js");
include("Mesh_dim.js");
include("Mesh_mouse_interaction.js");
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
				gMousePosScreen = event.args;
				var mouseClicked = gMousePosScreen[2];
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); // transformMouseFromScreenToWorld2D(gMousePosScreen);
				
				if (mouseClicked) {
					if (gSelectionStruct.cellIndex[0] != -1) {  // we are clicking on a vertex or a handle
						moveVertexOrMultipleOrMesh(mouseWorld);
					} else if (checkIfItIsGloballySelected() && show_mesh) {
						selectMultipleVertices(mouseWorld);
					}
				} else { // mouse is released
					// if we moved some vertices
					if (gSelectionStruct.mouseIsOnMesh != 0) {
						gMesh.calcMeshBoundsMat(); // recalculate the bounding matrix only when finished dragging
						gSelectionStruct.reset(); // reset the values in the selectionStruct
					}
					// if we did select some vertices and moved them
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

				outlet(1, gMousePosScreen);
				
				gSelectionStruct.reset(); // reset all the struct values

				var meshID = gMesh.checkIfMouseInsideMesh(mouseWorld);
				// print("meshID "+meshID + " nodeName: "+nodeCTX.name )
				if (meshID != -1) {  // We are inside the mesh
					gSelectionStruct.mouseIsOnMesh = 1; 

					gSelectionStruct.cellIndex = gMesh.mouseIsCloseToHandle(mouseWorld);
					// print("meshID "+meshID + " nodeName: "+nodeCTX.name + " cell: "+gSelectionStruct.cellIndex[0] + " show_mesh: "+show_mesh)
					if (gSelectionStruct.cellIndex[0] == -1 && show_mesh) { // otherwise let's check if we click on a vertex
						// if we are on a mesh, let's check if the mouse is close to a vertex
						if (checkIfItIsGloballySelected()) { // if this is the currently selected meshwarp
							gSelectionStruct.cellIndex = gMesh.mouseIsCloseToVertex(mouseWorld); // check if the mouse is close to any vertex in the mesh
						} 
						// check if the cell currently selected is different from the previous cell selected. 
						// In case it is different we fill the matrix with the adjacent cells for bounding calculation
						if (gSelectionStruct.cellIndex[0] != -1 && 
							(gSelectionStruct.cellIndex[0] != gSelectionStruct.oldCellIndex[0] || 
							gSelectionStruct.cellIndex[1] != gSelectionStruct.oldCellIndex[1])) {
								gSelectionStruct.oldCellIndex = gSelectionStruct.cellIndex.slice();
								if (gSelectionStruct.cellIndex[0] != -100) { // if it's a handle don't recalculate ajiacent cells mat
									gMesh.calcAdjacentCellsMat(gSelectionStruct.cellIndex.slice());
								}
						}
					} 
				}
				else {
					gGraphics.resetSingleCircle(); // we are not inside a mesh
				} 
			}
			break;
			
		case "reshape":
			//gWindowDim = nodeCTX.dim;
			break;
	}
}
swapcallback.local = 1

