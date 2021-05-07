// GLOBAL OBJECT
gGlobal = new Global("gMeshwarp");
if(gGlobal.inited === undefined) {
	gGlobal.inited = true;
	gGlobal.currentlySelected = -1;
	gGlobal.isOnHandle = 0;
	gGlobal.contexts = {};
	gGlobal.meshCount = 0;
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
	print("addToGlobalCtxMap : " + drawto + ", " + nodeCTX.name);
	// check if context in map, if not create it
	var ctxob = null;
	if(gGlobal.contexts.drawto === undefined) {
		print("create global context " + drawto);
		gGlobal.contexts.drawto = {};
		ctxob = gGlobal.contexts.drawto;
		ctxob.objects = [];
	}
	else {
		ctxob = gGlobal.contexts.drawto;
	}
	ctxob.objects.push(nodeCTX.name);
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
	}
	
	if(checkIfItIsGloballySelected()) {
		gGlobal.currentlySelected = -1;
		gGlobal.isOnHandle = 0;
	}
	
	gGlobal.meshCount--;
}