// GLOBAL OBJECT
var gGlobal = new Global("gMeshwarp");
gGlobal.meshwarpToCheck = -1;
gGlobal.currentlySelected = -1;
gGlobal.isOnHandle = 0;

function notify_selected_meshwarp(currentlySelected) {
    if (nodeCTX.name != currentlySelected) {
        videoplane.layer = 80;
        showMesh(0);
    }
}

function checkIfItIsGloballySelected() {
	return (gGlobal.currentlySelected == nodeCTX.name);
}

function addThisMeshwarpObjToGlobal() {
	if (gGlobal.meshwarp_objects == null) {
		gGlobal.meshwarp_objects = [];
	}
	// ADD OBJ TO GLOBAL IF IT DOESN'T EXIST
    var index = gGlobal.meshwarp_objects.indexOf(nodeCTX.name);
	if (index == -1) {
		gGlobal.meshwarp_objects.push(nodeCTX.name);
		// layer = gGlobal.meshwarp_objects.length-1;
	} 
	assignThisAsCurrentlySelectedToGlobal();

	print("after adding: "+gGlobal.meshwarp_objects)
}
addThisMeshwarpObjToGlobal.local = 1;

function assignThisAsCurrentlySelectedToGlobal() {
    gGlobal.currentlySelected = nodeCTX.name;
    videoplane.layer = 100;
	gGlobal.isOnHandle = 1;
    showMesh(1);
    outlet(0, "notify_selected_meshwarp",nodeCTX.name);
}
assignThisAsCurrentlySelectedToGlobal.local = 1;

function removeThisMeshwarpObjFromGlobal() {
	if (gGlobal.meshwarp_objects != null) {
		print("THIS NODE NAME IN REMOVE " + nodeCTX.name)
		var index = gGlobal.meshwarp_objects.indexOf(nodeCTX.name);
		if (index != -1) {
			gGlobal.meshwarp_objects.splice(index, 1);
			print("ID "+ index + " REMOVED")
		}
		print("after removal: "+gGlobal.meshwarp_objects)
	}
}
removeThisMeshwarpObjFromGlobal.local = 1;

function resetGlobal() {
	gGlobal.meshwarp_objects = null;
    gGlobal.currentlySelected = -1;
	gGlobal.isOnHandle = 0;
}