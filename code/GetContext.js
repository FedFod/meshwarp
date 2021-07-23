// ROB 
//--------------------------------------------

var implicitdrawto = "";
var swaplisten = null; // The listener for the jit.world
var explicitdrawto = false;

var implicit_tracker = new JitterObject("jit_gl_implicit");
// postln("implicit tracker name: "+implicit_tracker.name)
var implicit_lstnr = new JitterListener(implicit_tracker.name, implicit_callback);

function implicit_callback(event) { 
	if(!explicitdrawto && implicitdrawto != implicit_tracker.drawto[0]) {
		// important! drawto is an array so get first element
		implicitdrawto = implicit_tracker.drawto[0];
		dosetdrawto(implicitdrawto);
	}
}
implicit_callback.local = 1;

function setDrawto(val) {
	explicitdrawto = true;
	dosetdrawto(val);
}

function dosetdrawto(newdrawto) {
	if(newdrawto == drawto || !newdrawto) {
		// bounce
		return;
	}
	//postln("drawto class " + proxy.class);
	if(gGlobal.proxy !== undefined) {
		gGlobal.proxy.name = newdrawto;
		//postln("drawto class " + proxy.class);
		if(gGlobal.proxy.class !== undefined) {
			if(gGlobal.proxy.class != "jit_gl_context_view") { // what class is that?
				proxydrawto = gGlobal.proxy.send("getdrawto");
				// important! drawto is an array so get first element
				return dosetdrawto(proxydrawto[0]);
			}
		}
		else {
			proxydrawto = gGlobal.proxy.send("getdrawto");
			if(proxydrawto !== null && proxydrawto !== undefined) {
				return dosetdrawto(proxydrawto[0]);  // name of the internal node
			}
		}
	}
	// postln("setdrawto " + newdrawto);
	drawto = newdrawto;	
	setNodeDrawto();
	addToGlobalCtxMap();

	if(swaplisten)
		swaplisten.subjectname = "";
	swaplisten = new JitterListener(drawto, swapcallback);
}
dosetdrawto.local = 1;
