autowatch = 1;

include("Mesh.js");
include("Utilities.js");

// number of meshes
var meshesNumber = 2; 
declareattribute("meshesNumber", null, null, 1);

var windowRatio = 1; 
declareattribute("windowRatio");

var meshes = [];

var mousePosScreen = [];

function initMeshes()
{	
	for (var i=0; i<meshesNumber; i++)
	{
		meshes.push(new Mesh());
		meshes[i].initMesh(4,4,drawto, i); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
	}
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

	// if context is root we use swap, if jit.gl.node use draw
	if ((event.eventname=="swap" || event.eventname=="draw")) {
		// RENDER BANG
	} else if (event.eventname=="mouseidle")
	{
		mousePosScreen = (event.args);
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