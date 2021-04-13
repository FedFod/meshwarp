autowatch = 1;

function postln(arg) {
	//if(verbose)
		post(arg+"\n");
}
postln.local = 1;

var impdrawto = ""
var drawto = ""
var swaplisten = null

const is820 = (max.version >= 820);
var proxy = null;
if(is820) {
	proxy = new JitterObject("jit.proxy");
}

function setdrawto(newdrawto) {
	if(newdrawto == drawto || !newdrawto) {
		// bounce
		return;
	}

	if(proxy) {
		proxy.name = newdrawto;
		//proxyattrs = proxy.send("getattributes");
		proxydrawto = proxy.send("getdrawto");
		if(proxydrawto !== null && proxydrawto !== undefined) {
			// important! drawto is an array so get first element
			return setdrawto(proxydrawto[0]);
		}
	}

	postln("setdrawto " + newdrawto);
	drawto = newdrawto;		
	
	if(swaplisten)
		swaplisten.subjectname = "";
	swaplisten = new JitterListener(newdrawto, swapcallback);
}


function swapcallback(event){
	post("callback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");
	// if context is root we use swap, if jit.gl.node use draw
	if ((event.eventname=="swap" || event.eventname=="draw")) {
		
	}
}
swapcallback.local = 1

var implicit_tracker = new JitterObject("jit_gl_implicit");
var implicit_lstnr = new JitterListener(implicit_tracker.name, implicit_callback);

function implicit_callback(event) {
	//postln("implicit event " + implicit_tracker.drawto + " " + event.eventname);

	// important! drawto is an array so get first element
	if(impdrawto != implicit_tracker.drawto[0]) {
		impdrawto = implicit_tracker.drawto[0];
		setdrawto(impdrawto);
	}
}
implicit_callback.local = 1;
