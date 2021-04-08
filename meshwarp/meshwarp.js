autowatch = 1;

include("Mesh.js");
include("Utilities.js");
include("GraphicElements.js");

// number of meshes
var gMeshesNumber = 4; 
declareattribute("gMeshesNumber", null, null, 1);

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
	meshID: -1,
	reset: function() {
		this.cellIndex = [-1, -1];
		this.meshID = -1;
	}
};

// GLOBAL VARIABLES
var gMeshes = [];
var gMousePosScreen = [];



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
		gMeshes[i].initMesh(4,4,nodeCTX.name, i); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
		postln(gMeshes[i].maxPos)
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

function postln(arg) {
	//if(verbose)
		post(arg+"\n");
}
postln.local = 1;

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
				gWindowDim = nodeCTX.dim.splice(0);
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
				if (gSelectionStruct.cellIndex[0] != -1) {  // we are clicking on a vertex
					gMeshes[gSelectionStruct.meshID].moveVertex(mouseWorld, gSelectionStruct.cellIndex.slice(0,2)); // move the vertex with the mouse
				}
			} else {
				if (gSelectionStruct.meshID != -1) {
					gMeshes[gSelectionStruct.meshID].getMaxMinPositionMat(); // recalculate the new max and min position values
					gSelectionStruct.reset(); // reset the values in the selectionStruct
				}
				gGraphics.reset(); // delete the circle
			}
			
			break;
		case "mouseidle":  // Check if mouse is close to vertices to highlight them
			gMousePosScreen = (event.args);
			var mouseWorld = transformMouseFromScreenToWorld2D(gMousePosScreen); 

			// Iterate through meshes to check in which one the mouse is in
			for (var mesh in gMeshes) { 
				gSelectionStruct.meshID = gMeshes[mesh].checkIfMouseInsideMesh(mouseWorld); // Get the ID of the mesh in which the mouse is in
				if (gSelectionStruct.meshID != -1) { break; } // if we are in a mesh, then break the loop, no need to check further
			}

			if (gSelectionStruct.meshID != -1) { // if we are in a mesh
				gSelectionStruct.cellIndex = gMeshes[gSelectionStruct.meshID].mouseIsCloseToVertex(mouseWorld); // check if one vertex in the mesh is clicked
				if (gSelectionStruct.cellIndex[0] == -1) {  // delete circle if mouse is far from vertex
					gGraphics.reset();
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