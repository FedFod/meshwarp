// GLOBAL OBJECT
gGlobal = new Global("gMeshwarp");

if(gGlobal.inited === undefined) {
	gGlobal.mouseIsOnMesh = {};
	gGlobal.inited = true;
	gGlobal.latestAction = GUI_ELEMENTS.NOTHING;
	gGlobal.contexts = {};
	gGlobal.meshCount = 0;
	if(max.version >= 820) {
		gGlobal.proxy = new JitterObject("jit.proxy");
	}
}

function notify_selected_meshwarp(currentlySelected, selectedContext) {
    if (drawto == selectedContext && nodeCTX.name != currentlySelected) {
        deselectThisFromGlobal();
    }
}

function ctxInGlobal() {
	return (gGlobal.contexts[drawto] !== undefined && gGlobal.contexts[drawto] !== null);
}

gGlobal.checkIfItIsGloballySelected = function(nodeName) {
	return (ctxInGlobal() && gGlobal.contexts[drawto].currentlySelected == nodeName);
}

gGlobal.getMaxLayer = function() {
	var maxLayer = -1000;
	for (var meshwarp in gGlobal.mouseIsOnMesh) {
		if (gGlobal.mouseIsOnMesh[meshwarp].layer > maxLayer) {
			maxLayer = gGlobal.mouseIsOnMesh[meshwarp].layer;
		}
	}
	return maxLayer;
}

function assignThisAsCurrentlySelectedToGlobal() {
	if(ctxInGlobal()) {
		gGlobal.contexts[drawto].currentlySelected = nodeCTX.name;
		assignLatestActionToGlobal(GUI_ELEMENTS.NOTHING);
		gMesh.setMeshAsSelected(true);
		var maxLayer = gGlobal.getMaxLayer();
		setVideoplaneLayer(maxLayer+1);
		gGraphics.setLayer(maxLayer+2);
		
		outlet(0, "notify_selected_meshwarp", nodeCTX.name, drawto);
	}
}
assignThisAsCurrentlySelectedToGlobal.local = 1;

function deselectThisFromGlobal() {
	setVideoplaneLayer(layer); 
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
checkContextObs.local = 1;

// called when drawto set
function addToGlobalCtxMap() {
	debug(DEBUG.GENERAL, "Global MeshCount : "+gGlobal.meshCount);
	debug(DEBUG.GENERAL, "addToGlobalCtxMap : " + drawto + ", " + nodeCTX.name);
	// check if context in map, if not create it
	var ctxOb = null;
	if(gGlobal.contexts[drawto] === undefined || gGlobal.contexts[drawto] == null) {
		debug(DEBUG.GENERAL, "create global context " + drawto);
		gGlobal.contexts[drawto] = {};
		ctxOb = gGlobal.contexts[drawto];
		ctxOb.objects = [];
		ctxOb.requestInit = true;
		ctxOb.currentlySelected = -1;
		// ctxOb.physWorldName = drawto + "_physworld";
	}
	else {
		ctxOb = gGlobal.contexts[drawto];
		// gMesh.setPhysWorldNameToMeshBody(ctxOb.physWorldName);
	}
	ctxOb.objects.push(nodeCTX.name);
	setToGlobalIfMouseIsOnMesh(false);
	assignThisAsCurrentlySelectedToGlobal();

	// print("addToGlobalCtxMap")
	// for (var c in gGlobal.contexts) {
	// 	print (c);
	// 	print(gGlobal.contexts[c]);
	// }
}

// called by notifyDeleted
function removeFromGlobalCtxMap() {
	debug(DEBUG.GENERAL, "removeFromGlobalCtxMap : " + drawto + ", " + nodeCTX.name);
	if(drawto !== "" && gGlobal.contexts[drawto] !== undefined) {
		var obs = gGlobal.contexts[drawto].objects;
		var index = obs.indexOf(nodeCTX.name);
		if (index != -1) {
			obs.splice(index, 1);
			debug(DEBUG.GENERAL, "ID "+ index + " REMOVED")
		}
		debug(DEBUG.GENERAL, "Objects Length : "+obs.length)
		if (obs.length == 0) {
			debug(DEBUG.GENERAL, "freed global objects");
			gGlobal.contexts[drawto].ctxNode.freepeer();
			// gGlobal.contexts.drawto.physDraw.freepeer();
			// gGlobal.contexts.drawto.physWorld.freepeer();
			gGlobal.contexts[drawto].ctxCamera.freepeer();
			gGlobal.inited = null;
			gGlobal.contexts[drawto] = null;
		}
	}
	removeFromGlobalCtxMap.local = 1;
	
	if(gGlobal.checkIfItIsGloballySelected(nodeCTX.name)) {
		gGlobal.contexts[drawto].currentlySelected = -1;
		gGlobal.mouseIsOnMesh[nodeCTX.name].isOnMesh = false;
	}
	
	gGlobal.meshCount--;
}

function assignLatestActionToGlobal(latestAction) {
	gGlobal.latestAction = latestAction;
}
assignLatestActionToGlobal.local = 1;

function setToGlobalIfMouseIsOnMesh(val) {
	gGlobal.mouseIsOnMesh[nodeCTX.name] = {isOnMesh: val, layer: videoplane.layer};
}



