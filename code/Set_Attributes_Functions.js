function setenable(val) {
	enable = val;
	nodeCTX.enable = enable;
	videoplane.enable = enable;
}
setenable.local = 1;

function setNodeDrawto() {
	nodeCTX.drawto = drawto;
	videoplane.drawto = drawto;	
}
setNodeDrawto.local = 1;

function buildSaveDict() {
	var saveDict = new Dict();

	// saveDict.replace("mode", mode);
	saveDict.replace("show_mesh", show_mesh);
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

function scaleAllMeshes(scaleX, scaleY) {
	gMesh.scaleMesh(scaleX, scaleY);
	gMesh.setLatestScale();
}
scaleAllMeshes.local = 1;

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

function showMesh(show) {
	show_mesh = show;
	if (gMesh!=null) {
		gMesh.showMesh(show);
	}
	if (!show) {
		gGraphics.resetSingleCircle();
	}
}
showMesh.local = 1;
