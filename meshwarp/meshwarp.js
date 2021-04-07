autowatch = 1;

include("Mesh.js");
include("Utilities.js");

// number of meshes
var meshesNumber = 2; 
declareattribute("meshesNumber", null, null, 1);

var windowDim = [0,0];

var windowRatio = 1; 
function setWindowRatio(ratio) {
	windowRatio = ratio;
}

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

var meshes = [];

var mousePosScreen = [];

function freeMeshes() {
	for (var i=0; i<meshes.length; i++) {
		meshes[i].freeMesh();
	}
}
freeMeshes.local = 1;

function initMeshes() {	
	for (var i=0; i<meshesNumber; i++) {
		meshes.push(new Mesh());
		meshes[i].initMesh(4,4,nodeCTX.name, i); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
	}
}
initMeshes.local = 1;

function init() {	
	nodeCTX.drawto = drawto;
	videoplane.drawto = drawto;	
	freeMeshes();
	initMeshes();
}

function mouseFromScreenToWorld2D(mouseScreen) {
	//return [mouseScreen[0]]
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
			if (windowDim[0] != nodeCTX.dim[0] || windowDim[1] != nodeCTX.dim[1]) {
				setWindowRatio(nodeCTX.dim[0] / nodeCTX.dim[1]);
				windowDim = nodeCTX.dim.splice(0);
				postln(windowDim);
				init(); // RE INIT everything when window size is modified (temporary)
			}
			windowDim = nodeCTX.dim;
			break;
		case "mouse": // get mouse array
			mousePosScreen = (event.args);
			var mouse
			postln(mousePosScreen);
			break;
		case "reshape":
			
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