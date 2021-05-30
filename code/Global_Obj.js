// GLOBAL OBJECT
gGlobal = new Global("gMeshwarp");
gGlobal.mouseIsOnMesh = {};

if(gGlobal.inited === undefined) {
	gGlobal.inited = true;
	gGlobal.currentlySelected = -1;
	gGlobal.latestAction = GUI_ELEMENTS.NOTHING;
	gGlobal.contexts = {};
	gGlobal.meshCount = 0;
	if(max.version >= 820) {
		gGlobal.proxy = new JitterObject("jit.proxy");
	}
}

function notify_selected_meshwarp(currentlySelected) {
    if (nodeCTX.name != currentlySelected) {
        deselectThisFromGlobal();
    }
}

function checkIfItIsGloballySelected() {
	return (gGlobal.currentlySelected == nodeCTX.name);
}

function assignThisAsCurrentlySelectedToGlobal() {
		gGlobal.currentlySelected = nodeCTX.name;
		videoplane.layer = 100;
		assignLatestActionToGlobal(GUI_ELEMENTS.NOTHING);
		gMesh.setMeshAsSelected(true);
		outlet(0, "notify_selected_meshwarp",nodeCTX.name);
}
assignThisAsCurrentlySelectedToGlobal.local = 1;

function deselectThisFromGlobal() {
	videoplane.layer = 80;
	assignLatestActionToGlobal(GUI_ELEMENTS.NOTHING);
	gMesh.setMeshAsSelected(false);
}
deselectThisFromGlobal.local = 1;

function checkContextObs() {
	for(var c in gGlobal.contexts) {
		var ctxOb = gGlobal.contexts[c];
		if(ctxOb.requestInit) {
			ctxOb.ctxNode = new JitterObject("jit.gl.node");
			ctxOb.ctxNode.drawto = nodeCTX.drawto;

			ctxOb.requestInit = false;
			// ctxOb.physWorld = new JitterObject("jit.phys.world");
			// ctxOb.physWorld.name = ctxOb.physWorldName;
			// ctxOb.physWorld.drawto = ctxOb.ctxNode.name;
			// ctxOb.physWorld.worldbox = 0;
			// ctxOb.physWorld.dynamics = 0;

			// ctxOb.physDraw = new JitterObject("jit.gl.physdraw");
			// ctxOb.physDraw.drawto = ctxOb.ctxNode.name;
			// ctxOb.physDraw.worldname = ctxOb.physWorld.name;

			ctxOb.ctxCamera = new JitterObject("jit.gl.camera");
			ctxOb.ctxCamera.drawto = ctxOb.ctxNode.name;
			ctxOb.ctxCamera.ortho = 2;

			// gMesh.setPhysWorldNameToMeshBody(ctxOb.physWorld.name);
		}
	}
}

// called when drawto set
function addToGlobalCtxMap() {
	print("Global MeshCount : "+gGlobal.meshCount);
	print("addToGlobalCtxMap : " + drawto + ", " + nodeCTX.name);
	// check if context in map, if not create it
	var ctxOb = null;
	if(gGlobal.contexts.drawto === undefined || gGlobal.contexts.drawto == null) {
		print("create global context " + drawto);
		gGlobal.contexts.drawto = {};
		ctxOb = gGlobal.contexts.drawto;
		ctxOb.objects = [];
		ctxOb.requestInit = true;
		// ctxOb.physWorldName = drawto + "_physworld";
	}
	else {
		ctxOb = gGlobal.contexts.drawto;
		// gMesh.setPhysWorldNameToMeshBody(ctxOb.physWorldName);
	}
	ctxOb.objects.push(nodeCTX.name);
	assignThisAsCurrentlySelectedToGlobal();
}

// called by notifyDeleted
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
			print("freed global objects");
			gGlobal.contexts.drawto.ctxNode.freepeer();
			gGlobal.contexts.drawto.physDraw.freepeer();
			gGlobal.contexts.drawto.physWorld.freepeer();
			gGlobal.contexts.drawto.ctxCamera.freepeer();
			gGlobal.inited = null;
			gGlobal.contexts.drawto = null;
		}
	}
	
	if(checkIfItIsGloballySelected()) {
		gGlobal.currentlySelected = -1;
	}
	
	gGlobal.meshCount--;
}

function assignLatestActionToGlobal(latestAction) {
	gGlobal.latestAction = latestAction;
}
assignLatestActionToGlobal.local = 1;

function setToGlobalIfMouseIsOnMesh(val) {
	gGlobal.mouseIsOnMesh[nodeCTX.name] = [val, videoplane.layer];
}
setToGlobalIfMouseIsOnMesh.local = 1;
