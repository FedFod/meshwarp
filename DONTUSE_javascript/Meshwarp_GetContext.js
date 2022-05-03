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
			// drawto may be root render or sub-node
			// if root the class will return jit_gl_context_view
			if(gGlobal.proxy.class != "jit_gl_context_view") {
				// class is a sub-node, get the drawto on that
				proxydrawto = gGlobal.proxy.send("getdrawto");
				// recurse until we get root
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
	gGraphics.setDrawto(drawto);
	addToGlobalCtxMap();
	gMesh.setMaskNodeDrawto();

	if(swaplisten)
		swaplisten.subjectname = "";
	swaplisten = new JitterListener(drawto, swapcallback);
}
dosetdrawto.local = 1;
