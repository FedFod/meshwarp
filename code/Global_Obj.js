// GLOBAL OBJECT
gGlobal = new Global("gMeshwarp");
if(gGlobal.inited === undefined) {
	gGlobal.inited = true;
	gGlobal.currentlySelected = -1;
	gGlobal.isOnHandle = 0;
	gGlobal.contexts = {};
	gGlobal.meshCount = 0;
	if(max.version >= 820) {
		gGlobal.proxy = new JitterObject("jit.proxy");
		print("created proxy")
	}
	print("gGlobal PhysWorld Name : "+gGlobal.physWorld.name);
}

function notify_selected_meshwarp(currentlySelected) {
    if (nodeCTX.name != currentlySelected) {
        videoplane.layer = 80;
        showMesh(0);
    }
}

function checkIfItIsGloballySelected() {
	return (gGlobal.currentlySelected == nodeCTX.name);
}

function assignThisAsCurrentlySelectedToGlobal() {
    gGlobal.currentlySelected = nodeCTX.name;
    videoplane.layer = 100;
	gGlobal.isOnHandle = 1;
    showMesh(1);
    outlet(0, "notify_selected_meshwarp",nodeCTX.name);
}
assignThisAsCurrentlySelectedToGlobal.local = 1;

// called when drawto set
function addToGlobalCtxMap() {
	print("Global MeshCount : "+gGlobal.meshCount);
	print("addToGlobalCtxMap : " + drawto + ", " + nodeCTX.name);
	// check if context in map, if not create it
	var ctxob = null;
	if(gGlobal.contexts.drawto === undefined) {
		print("create global context " + drawto);
		gGlobal.contexts.drawto = {};
		ctxob = gGlobal.contexts.drawto;
		ctxob.objects = [];
		ctxob.physWorld = new JitterObject("jit.phys.world");
		ctxob.physDraw = new JitterObject("jit.gl.physdraw");
		ctxob.ctxCamera = new JitterObject("jit.gl.camera");
		ctxob.ctxCamera.drawto = proxydrawto[0];
		ctxob.ctxCamera.ortho = 2;
		ctxob.physDraw.worldname = ctxob.physWorld.name;
		ctxob.physDraw.drawto = drawto;
		ctxob.physDraw.depth_enable = 0;
		ctxob.physDraw.layer = 1000;
		initPhysWorld(ctxob.physWorld);
	}
	else {
		ctxob = gGlobal.contexts.drawto;
	}
	ctxob.objects.push(nodeCTX.name);
	gMesh.setPhysWorldNameToMeshBody(ctxob.physWorld.name);
	//postln("context contains...");
	//for(var i = 0; i < ctxob.objects.length; i++) {
	//	postln(ctxob.objects[i]);
	//}

	assignThisAsCurrentlySelectedToGlobal();
}

// called by freebang
function removeFromGlobalCtxMap() {
	print("removeFromGlobalCtxMap : " + drawto + ", " + nodeCTX.name);
	if(drawto !== "" && gGlobal.contexts.drawto !== undefined) {
		var obs = gGlobal.contexts.drawto.objects;
		var index = obs.indexOf(nodeCTX.name);
		if (index != -1) {
			obs.splice(index, 1);
			print("ID "+ index + " REMOVED")
		}
		print("Objects Length : "+obs.length)
		if (obs.length == 0) {
			print("freed global objects")
			gGlobal.contexts.drawto.physDraw.freepeer();
			gGlobal.contexts.drawto.physWorld.freepeer();
			gGlobal.contexts.drawto.ctxCamera.freepeer();
			gGlobal.inited = null;
			gGlobal.contexts.drawto = null;
		}
	}
	
	if(checkIfItIsGloballySelected()) {
		gGlobal.currentlySelected = -1;
		gGlobal.isOnHandle = 0;
	}
	
	gGlobal.meshCount--;
}

function initPhysWorld(physWorld) {
	physWorld.drawto = proxydrawto[0];
	physWorld.worldbox = 0;
	physWorld.dynamics = 0;
}