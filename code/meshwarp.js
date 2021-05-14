autowatch = 1;
outlets = 2;
include("Global_Obj.js");
include("GetContext.js");
include("Mesh.js");
include("Mesh_scale.js");
include("Mesh_save_load.js");
include("Mesh_dim.js");
include("Mesh_movement.js");
include("Mesh_handles.js");
include("Utilities.js");
include("GraphicElements.js");
include("PrivateFunctions.js");
include("Set_Attributes_Functions");
include("Canvas.js");

// ATTRIBUTES
var use_nurbs = 0; // default: use NURBS
declareattribute("use_nurbs", null, "setNurbsOrMeshMode", 0);

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

// GLOBAL VARIABLES
var gMousePosScreen = [];
var gMinimumSelectionDist = 0.06;
var gWindowDim = [256, 256]; //nodeCTX.dim.slice();
var gWindowRatio = 1; 
var gWindowPrevRatio = gWindowRatio;
var gTextureNames = "noTexture";

var gMesh = new Mesh(gGlobal.meshCount++);
gMesh.initMesh(nodeCTX.name);
setTexturesMeshes();

// a structure to contain infos relative to the clicked mesh and vertex
var gSelectionStruct = {
	mouseIsOnWhat: GUI_ELEMENTS.NOTHING,
	cellIndex: GUI_ELEMENTS.NEGATIVE_INDEX.slice(), 
	oldCellIndex: GUI_ELEMENTS.NEGATIVE_INDEX.slice(),
	mouseIsOnMesh: false,
	howManyVerticesSelected: 0,
	areVerticesMoved: 0,
	isScaled: 0,
	isOnScaleHandle: 0,

	reset: function() {
		this.cellIndex = GUI_ELEMENTS.NEGATIVE_INDEX.slice();
		this.mouseIsOnMesh = false;   // the mesh we are going to operate on
		this.mouseIsOnWhat = GUI_ELEMENTS.NOTHING;
	}
};

//-----PUBLIC FUNCTIONS----------------
function reset() {
	show_mesh = 1;
	gGlobal.isOnHandle == 0;
	gGraphics.resetSingleCircle();
	gGraphics.resetSelected();
	gMesh.initMesh(nodeCTX.name);
}

function move_vertex(indexX, indexY, posX, posY) {
	gMesh.moveVertex([posX, posY], [indexX, indexY]);
}

function jit_gl_texture(texName) {
	if (gMesh) {
		gMesh.assignTextureToMesh(texName);
	}
}

function save_state(path) {
	postln("saveing to " + path);
	saveDictToPath(path);
}

function load_state(path) {
	postln("loading to " + path);
	loadSaveDict(path);
}

function getvalueof() {
	postln("getvalueof");
	return buildSaveDict(null);
}

function setvalueof(dict) {
	postln("setvalueof");
	loadFromDict(dict);
}

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
				gWindowPrevRatio = gWindowRatio;
			}
			checkContextObs();
			break;

		case "mouse": // get mouse array when mouse is clicked or released
			if (enable) {
				gMousePosScreen = event.args.slice();
				var mouseClicked = gMousePosScreen[2];
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); 

				if (mouseClicked) {
					if (gSelectionStruct.mouseIsOnWhat == GUI_ELEMENTS.MOVE_HANDLE) { // we are on the move handle, even if the meshwarp is not the active one
						moveWholeMesh(mouseWorld);
					} else if (checkIfItIsGloballySelected()) {
						if(gSelectionStruct.mouseIsOnWhat == GUI_ELEMENTS.SCALE_HANDLE) {
							gGraphics.resetSingleCircle(); 
							gMesh.scaleWithHandle(mouseWorld);
							gSelectionStruct.isScaled = true;
						} else if (gSelectionStruct.mouseIsOnWhat == GUI_ELEMENTS.VERTEX) {
							if (gSelectionStruct.howManyVerticesSelected > 1) {
								gMesh.moveSelectedVertices(mouseWorld);
								gGraphics.resetSingleCircle();
								gSelectionStruct.areVerticesMoved = true;
							} else {
								gMesh.moveVertex(mouseWorld, gSelectionStruct.cellIndex.slice()); // move the vertex with the mouse
								gGraphics.resetSelected(); // delete selected circles
							}
						} else { // if we are not clicking on anything then create the vertices selection quad
							selectMultipleVertices(mouseWorld);
						}
					} 
				} else { // mouse is released
					// if we moved a single vertex
					if (gSelectionStruct.isScaled) {
						gSelectionStruct.isScaled = false;
						gMesh.setLatestScale();
					}
					if (gSelectionStruct.mouseIsOnWhat != GUI_ELEMENTS.NOTHING) {
						gMesh.calcMeshBoundsMat(); // recalculate the bounding matrix only when finished dragging
						gSelectionStruct.reset(); // reset the values in the selectionStruct
					}
					// if we did select more vertices and moved them
					if (gSelectionStruct.howManyVerticesSelected && gSelectionStruct.areVerticesMoved) {
						gSelectionStruct.howManyVerticesSelected = 0;
						gSelectionStruct.areVerticesMoved = false;
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
				//print("mouseidle " + gMesh.ID + " latest mouse pos " + gMesh.getLatestMousePos() + " mouse world "+ mouseWorld);
				//if (checkIfVec2AreDifferent(mouseWorld, gMesh.getLatestMousePos())) {
					// we are using default cam position and far_clip distance for our ray z points
					// var ray = [mouseWorld[0], mouseWorld[1], 2, mouseWorld[0], mouseWorld[1], -98 ];
					// var result = gGlobal.contexts.drawto.physWorld.raytest(ray);
					// if(result) {
					// 	print("raytest " + result[0]);
					// }

					gSelectionStruct.reset(); // reset all the struct values
					// gSelectionStruct.mouseIsOnMesh = gMesh.checkIfMouseIsInsideMesh(mouseWorld); // check if we are in a mesh and not in an empty area
					gSelectionStruct.mouseIsOnMesh = true;
	
					if (gSelectionStruct.mouseIsOnMesh != GUI_ELEMENTS.NOTHING) {  // We are inside the mesh
						gSelectionStruct.mouseIsOnWhat = gMesh.checkIfMouseIsCloseToMoveHandle(mouseWorld); // check if mouse is close to move handle
						if (checkIfItIsGloballySelected() && gSelectionStruct.mouseIsOnWhat == GUI_ELEMENTS.NOTHING) { // if this is the currently selected meshwarp
							gGraphics.resetSingleCircle(); 

							gMesh.setLatestMousePos(mouseWorld);

							
							gSelectionStruct.mouseIsOnWhat = gMesh.checkIfMouseIsCloseToVertex(mouseWorld); // check if the mouse is close to any vertex in the mesh
							
							if (gSelectionStruct.mouseIsOnWhat == GUI_ELEMENTS.VERTEX) {
								gSelectionStruct.cellIndex = gMesh.getSelectedVertexIndex();
							} else {
								gSelectionStruct.mouseIsOnWhat = gMesh.checkIfMouseIsCloseToScaleHandles(mouseWorld); // if we are not in the move handle, check the scale handles
							}
							// check if the cell currently selected is different from the previous cell selected. 
							// In case it is different we fill the matrix with the adjacent cells for bounding calculation
							// calculateBoundingCells(gSelectionStruct);
						}
					}
				//}
			}
			break;
	}
}
swapcallback.local = 1

