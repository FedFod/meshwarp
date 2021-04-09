autowatch = 1;

include("Mesh.js");
include("Utilities.js");
include("GraphicElements.js");

// number of meshes
var gMeshesNumber = 4; 
declareattribute("gMeshesNumber", null, null, 1);

// Size of Meshes
var gMeshSize = [4, 8];
declareattribute("gMeshSize", null, null, 1);

var gWindowDim = [0,0];
var gWindowRatio = 1; 
function setWindowRatio(ratio) {
	gWindowRatio = ratio;
}

// OBJECTS USED GLOBALLY 
// jit.3m to find max and min
var gJit3m = new JitterObject("jit.3m");
var gGraphics = new GraphicElements();

// a structure to contain infos relative to the clicked mesh and vertex
var gSelectionStruct = {
	cellIndex: [-1, -1], 
	meshIDsToCheck: new Array(),
	meshIDToClick: -1,
	reset: function() {
		this.cellIndex = [-1, -1];
		this.meshIDsToCheck = [];  // we need to check multiple meshes in case they overlap
		this.meshIDToClick = -1;   // the mesh we are going to operate on
	}
};

// GLOBAL VARIABLES
var gMeshes = [];
var gMousePosScreen = [];
var gMinimumSelectionDist = 0.06;

// JIT_GL_NODE
var nodeCTX = new JitterObject("jit.gl.node");
nodeCTX.name = "##mesherNodeCTX##";
nodeCTX.capture = 1;
nodeCTX.automatic = 1;
nodeCTX.adapt = 1;

// VIDEOPLANE
var videoplane = new JitterObject("jit.gl.videoplane");
videoplane.transform_reset = 2;
videoplane.color = WHITE;
videoplane.texture = nodeCTX.out_name;

// CAMERA IN NODE
var nodeCamera = new JitterObject("jit.gl.camera");
nodeCamera.drawto = nodeCTX.name;
nodeCamera.ortho = 2;



function freeMeshes() {
	if (gMeshes.length > 0) {
		for (var mesh in gMeshes) {
			gMeshes[mesh].freeMesh();
		}
	}
}
freeMeshes.local = 1;

function initMeshes() {	
	
	for (var i=0; i<gMeshesNumber; i++) {
		gMeshes.push(new Mesh());
		gMeshes[i].initMesh(gMeshSize.slice(0,2),nodeCTX.name, i); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
	}
}
initMeshes.local = 1;

function init() {	
	nodeCTX.drawto = drawto;
	videoplane.drawto = drawto;	
	freeMeshes();
	initMeshes();
	gGraphics.initGraphicElements();
}

// ROB 
//--------------------------------------------

var drawto = "theWorld"; // initialized for the moment
var swaplisten = null; // The listener for the jit.world

function setdrawto(arg) {
	if(arg === drawto || !arg) {
		// bounce
		return;
	}

	postln("setdrawto " + arg);
	drawto=arg;	
	
	if(swaplisten)
		swaplisten.subjectname = "";
	swaplisten = new JitterListener(drawto,swapcallback);

}

function swapcallback(event){
	//post("callback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");			

	switch (event.eventname) {
		// if context is root we use swap, if jit.gl.node use draw
		case ("swap" || "draw"):
		// RENDER BANG
			if (gWindowDim[0] != nodeCTX.dim[0] || gWindowDim[1] != nodeCTX.dim[1]) {
				setWindowRatio(nodeCTX.dim[0] / nodeCTX.dim[1]);
				gWindowDim = nodeCTX.dim.slice();
				postln(gWindowDim);
				init(); // RE INIT everything when window size is modified (temporary)
			}
			break;
		case "mouse": // get mouse array when mouse is clicked or released
			gMousePosScreen = (event.args);
			var mouseClicked = gMousePosScreen[2];
			//postln(gMousePosScreen);
			var mouseWorld = transformMouseFromScreenToWorld2D(gMousePosScreen);

			if (mouseClicked) {
				if (gSelectionStruct.cellIndex[0] != -1 && gSelectionStruct.meshIDToClick != -1) {  // we are clicking on a vertex
					gMeshes[gSelectionStruct.meshIDToClick].moveVertex(mouseWorld, gSelectionStruct.cellIndex.slice(0,2)); // move the vertex with the mouse
				}
			} else { // mouse is released
				if (gSelectionStruct.meshIDToClick != -1) {
					gMeshes[gSelectionStruct.meshIDToClick].getMaxMinPositionMat(); // recalculate the new max and min position values
					gMeshes[gSelectionStruct.meshIDToClick].calcBoundingPolygonMat() // recalculate the bounding matrix
					gSelectionStruct.reset(); // reset the values in the selectionStruct
				}
				gGraphics.reset(); // delete the circle
			}
			break;

		case "mouseidle":  // Check if mouse is close to vertices to highlight them
			gMousePosScreen = (event.args);
			var mouseWorld = transformMouseFromScreenToWorld2D(gMousePosScreen); 

			gSelectionStruct.reset(); // reset all the struct values

			// Iterate through meshes to check in which one the mouse is in
			for (var mesh in gMeshes) { 
				var meshID = gMeshes[mesh].checkIfMouseInsideMesh(mouseWorld); // Get the ID of the mesh in which the mouse is in (if it's inside any)
				if (meshID != -1) { 
					gSelectionStruct.meshIDsToCheck.push(meshID); // push in this array all the IDs of the meshes the mouse is in (it could be more than one when meshes overlap)
				} 
			}

			// if we are on a mesh, let's check if the mouse is close to a vertex
			for (var i=0; i<gSelectionStruct.meshIDsToCheck.length; i++) { // check all the meshes the mouse is in
				gSelectionStruct.cellIndex = gMeshes[gSelectionStruct.meshIDsToCheck[i]].mouseIsCloseToVertex(mouseWorld); // check if the mouse is close to any vertex in the mesh
				
				if (gSelectionStruct.cellIndex[0] == -1) {  // if mouse is not close to vertex than delete highlight circle
					gGraphics.reset();
				} else {
					gSelectionStruct.meshIDToClick = gSelectionStruct.meshIDsToCheck[i]; // This is the mesh we are working with
					break; // We just need to check a single mesh
				}
			}
			break;
			
		case "reshape":
			gWindowDim = nodeCTX.dim;
			break;
	}
}
swapcallback.local = 1

var implicit_tracker = new JitterObject("jit_gl_implicit");
postln(implicit_tracker.name)
var implicit_lstnr = new JitterListener(implicit_tracker.name, implicit_callback);

function implicit_callback(event) {
	if(drawto !== implicit_tracker.drawto) {
		setdrawto(implicit_tracker.drawto);
		//outlet(0, "drawto", (cur_drawto.length > 0 ? cur_drawto : vg.curctx));
	}
	postln(drawto)
}
implicit_callback.local = 1;