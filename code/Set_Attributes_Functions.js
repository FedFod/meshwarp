//-----PUBLIC FUNCTIONS----------------
function undo() {
	gMesh.undo();
}

function redo() {
	gMesh.redo();
}

function reset() {
	show_mesh = 1;
	gGraphics.resetSingleCircle();
	gGraphics.resetSelected();
	gMesh.initMesh(nodeCTX.name);
	assignThisAsCurrentlySelectedToGlobal();
}

function move_vertex(indexX, indexY, posX, posY) {
	var tempPos = [posX, posY]; 
	var tempIndex = [indexX, indexY];
	if (checkIfVec2AreDifferent(tempIndex, gMesh.selectedVertexIndex)) {
		var tempPos = gMesh.getPositionMatCell(tempIndex);
	}
	gMesh.moveVertex(tempPos, tempIndex);
}

function jit_gl_texture(texName) {
	if (gMesh) {
		gMesh.assignTextureToMesh(texName);
	}
}

function write(path) {
	postln("saveing to " + path);
	saveDictToPath(path);
}

function read(path) {
	postln("loading to " + path);
	loadSaveDict(path);
}

function getvalueof() {
	postln("getvalueof");
	return buildSaveDict(null);
}

function setvalueof(dict) {
	postln("setvalueof");
	loadFromDict(dict);
}

// ATTRIBUTES ----------------------------------
function setenable(val) {
	enable = val;
	nodeCTX.enable = enable;
	videoplane.enable = enable;
	showUI(val);
	gMesh.setenable(val);
}
setenable.local = 1;

function scaleToTextureRatio() {
	gMesh.scaleToTextureRatio();
}
scaleToTextureRatio.local = 1;

function setColor() {
	color = arrayfromargs(messagename, arguments).slice(1,5);
	gMesh.setColor(color);
}
setColor.local = 1;

function setBlendEnable(val) {
	gMesh.setBlendEnable(val);
}
setBlendEnable.local = 1;

function buildSaveDict() {
	var saveDict = new Dict();

	// saveDict.replace("mode", mode);
	saveDict.replace("show_ui", show_ui);
	saveDict.replace("windowRatio", gWindowRatio);
	gMesh.saveDataIntoDict(saveDict);
	return saveDict;
}
buildSaveDict.local = 1;

function saveDictToPath(path) {
	var saveDict = buildSaveDict();
	saveDict.export_json(path);
}
saveDictToPath.local = 1;

function loadSaveDict(path) {
	var saveDict = new Dict();
	saveDict.import_json(path);
	
	loadFromDict(saveDict);
}
loadSaveDict.local = 1;

function loadFromDict(saveDict) {
	use_nurbs = saveDict.get("use_nurbs");
	gWindowRatio = saveDict.get("windowRatio");

	gMesh.loadDict(saveDict); 
	// gMesh.changeMode(mode);
	setTexturesMeshes();
}
loadFromDict.local = 1;

function setTexturesMeshes() {
	if (arguments.length > 0) {
		gTextureNames = (arrayfromargs(arguments));
	}
	gMesh.assignTextureToMesh(gTextureNames);
	gMesh.initAndAssignTextureCoordMat(); // in case there are more than one textures, update the coordinates to put a texture in every mesh
}
setTexturesMeshes.local = 1;

function setScale(scaleX, scaleY) {
	gMesh.scaleMesh(scaleX, scaleY);
	gMesh.setLatestScale();
}
setScale.local = 1;

function setPosition(posX, posY, posZ) {
	gMesh.setMeshPosition([posX, posY, posZ]);
	gMesh.updateGUI();
	gMesh.calcMeshBoundsMat();
}
setPosition.local = 1;

function setMeshLayer(val) {
	layer = val;
	setVideoplaneLayer(val);
}
setMeshLayer.local = 1;

function setVideoplaneLayer(val) {
	videoplane.layer = val;
}
setVideoplaneLayer.local = 1;

function setNurbsOrMeshMode(arg) {
	if (arg == 0 || arg == 1) {
		use_nurbs = arg;
		gMesh.setNurbsOrMeshMode(use_nurbs);
	}
}
setNurbsOrMeshMode.local = 1;

function setNurbsOrder(order) {
	gMesh.changeNurbsOrder(order);
}
setNurbsOrder.local = 1;

// Resize all the meshes
function resizeAllMeshes(meshSizeX, meshSizeY) {
	var xSize = Math.max(meshSizeX, 2);
	var ySize = Math.max(meshSizeY, 2);
	meshdim = [xSize, ySize];
	if (gMesh!=null) {
		gMesh.resizeMeshDim([xSize, ySize]);
	}
}
resizeAllMeshes.local = 1;

function showUI(show) {
	show_ui = show;
	if (gMesh!=null && show) {
		assignThisAsCurrentlySelectedToGlobal();
	}
	else if (!show) {
		deselectThisFromGlobal();
		gGraphics.resetSingleCircle();
		gGraphics.resetSelected();
	}
}
showUI.local = 1;
