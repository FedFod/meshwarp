// JIT_GL_NODE
var nodeCTX = new JitterObject("jit.gl.node");
//nodeCTX.name = "##mesherNodeCTX##";
nodeCTX.capture = 1;
nodeCTX.automatic = 1;
nodeCTX.adapt = 1;
nodeCTX.erase_color = [0, 0, 0, 0];

// OBJECTS INSTANCES USED GLOBALLY 
var gGraphics = new GraphicElements(nodeCTX.name);

// VIDEOPLANE
var videoplane = new JitterObject("jit.gl.videoplane");
videoplane.transform_reset = 2;
videoplane.color = WHITE;
videoplane.texture = nodeCTX.out_name;
videoplane.depth_enable = 0;
videoplane.blend_enable = 1;

// CAMERA IN NODE
var nodeCamera = new JitterObject("jit.gl.camera");
nodeCamera.drawto = nodeCTX.name;
nodeCamera.ortho = 2;

function buildSaveDict(path) {
	var saveDict = new Dict();
	var saveMatOb = new Object();

	saveDict.replace("meshes", meshes);
	saveDict.replace("mode", mode);
	saveDict.replace("show_meshes", show_meshes);
	saveDict.replace("windowRatio", gWindowRatio);

	for (var mesh in gMeshes) {
		var posMatArray = gMeshes[mesh].positionMatToArray();
		var matProp = { planes: "", type: "", dim: "" };
		gMeshes[mesh].getPositionMatProperties(matProp);
		saveDict.replace("positionMat"+mesh+"::planecount", matProp.planes);
		saveDict.append("positionMat"+mesh+"::type", matProp.type);
		saveDict.append("positionMat"+mesh+"::dimensions", matProp.dim);

		//saveDict.append("positionMat"+mesh, posMatArray);
		saveMatOb["positionMat"+mesh] = posMatArray;
	}
	var saveDictData = new Dict();
	saveDictData.parse(JSON.stringify(saveMatOb));
	saveDict.replace("positionMatData", saveDictData);
	saveDict.export_json(path);
}

function loadSaveDict(path) {
	var saveDict = new Dict();
	saveDict.import_json(path);
	
	meshes = saveDict.get("meshes");
	mode = saveDict.get("mode");
	gWindowRatio = saveDict.get("windowRatio");

	init(saveDict);
}

function freeMeshes() {
	if (gMeshes.length > 0) {
		for (var mesh in gMeshes) {
			gMeshes[mesh].freeMesh();
		}
	}
	gMeshes = [];
}
freeMeshes.local = 1;

function initMeshes(saveDict_) {	
	gMeshes = [];
	for (var i=0; i<meshes; i++) {
		gMeshes.push(new Mesh());
		gMeshes[i].initMesh(nodeCTX.name, i, mode, saveDict_); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
	}
}
initMeshes.local = 1;

function init(saveDict_) {	
	freeMeshes();
	initMeshes(saveDict_);
}
init.local = 1;

function setWindowRatio(dims) {
	gWindowRatio = dims[0] / dims[1];
} 
setWindowRatio.local = 1;

function setNodeDrawto() {
	nodeCTX.drawto = drawto;
	videoplane.drawto = drawto;	
}
setNodeDrawto.local = 1;

function setMode(arg) {
	if (arg == 0 || arg == 1) {
		mode = arg;
		for (var mesh in gMeshes) {
			gMeshes[mesh].changeMode(mode);
		}
	}
}
setMode.local = 1;

// Set number of meshes
function setHowManyMeshes(numberMeshes) {
	if (numberMeshes > 0 && numberMeshes < 20) {
		meshes = numberMeshes;
		freeMeshes();
		initMeshes();
	}
}
setHowManyMeshes.local = 1;

// Resize all the meshes
function resizeAllMeshes(meshSizeX, meshSizeY) {
	var xSize = Math.max(meshSizeX, 2);
	var ySize = Math.max(meshSizeY, 2);
	resize_meshes = [xSize, ySize];
	for (mesh in gMeshes) {
		gMeshes[mesh].resizeMesh([xSize, ySize]);
	}
}
resizeAllMeshes.local = 1;

// Resize single mesh
function resizeSingleMesh(index, meshSizeX, meshSizeY) {
	if (index < gMeshes.length) {
		var xSize = Math.max(meshSizeX, 2);
		var ySize = Math.max(meshSizeY, 2);
		gMeshes[index].resizeMesh([xSize, ySize]);
	}
}
resizeSingleMesh.local = 1;

function showMeshes(show) {
	for (mesh in gMeshes) {
		gMeshes[mesh].showMesh(show);
	}
	if (!show) {
		gGraphics.reset();
	}
	gShowMeshes = show;
}
showMeshes.local = 1;

