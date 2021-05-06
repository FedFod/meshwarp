// ROB 
//--------------------------------------------

var implicitdrawto = "";
var swaplisten = null; // The listener for the jit.world
var explicitdrawto = false;

//const is820 = (max.version >= 820);
var is820 = (max.version >= 820);
var proxy = null;
if(is820) {
	proxy = new JitterObject("jit.proxy");
}

function setenable(val) {
	enable = val;
	nodeCTX.enable = enable;
	videoplane.enable = enable;
}

function setdrawto(val) {
	explicitdrawto = true;
	dosetdrawto(val);
}

function dosetdrawto(newdrawto) {
	if(newdrawto == drawto || !newdrawto) {
		// bounce
		return;
	}

	if(proxy) {
		proxy.name = newdrawto;
		//postln("drawto class " + proxy.class);
		if(proxy.class !== undefined) {
			if(proxy.class != "jit_gl_context_view") { // what class is that??
				proxydrawto = proxy.send("getdrawto");
				// important! drawto is an array so get first element
				return dosetdrawto(proxydrawto[0]);
			}
		}
		else {
			// remove once 8.2 is updated to support proxy.class
			proxydrawto = proxy.send("getdrawto");
			if(proxydrawto !== null && proxydrawto !== undefined) {
				return dosetdrawto(proxydrawto[0]);  // name of the internal node
			}
		}
	}
	// postln("setdrawto " + newdrawto);
	drawto = newdrawto;	
	
	setNodeDrawto();
	
	if(swaplisten)
		swaplisten.subjectname = "";
	swaplisten = new JitterListener(drawto, swapcallback);

}
dosetdrawto.local = 1;

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