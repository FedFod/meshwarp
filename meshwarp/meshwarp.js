autowatch = 1;

function postln(arg) {
	//if(verbose)
		post(arg+"\n");
}
postln.local = 1;

var drawto = ""
var swaplisten = null


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
	post("callback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");			

	// if context is root we use swap, if jit.gl.node use draw
	if ((event.eventname=="swap" || event.eventname=="draw")) {
		//drawmovies();
	}
}
swapcallback.local = 1

var implicit_tracker = new JitterObject("jit_gl_implicit");
var implicit_lstnr = new JitterListener(implicit_tracker.name, implicit_callback);

function implicit_callback(event) {
	if(drawto !== implicit_tracker.drawto) {
		setdrawto(implicit_tracker.drawto);
		//outlet(0, "drawto", (cur_drawto.length > 0 ? cur_drawto : vg.curctx));
	}
}
implicit_callback.local = 1;