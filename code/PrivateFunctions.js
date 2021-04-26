// JIT_GL_NODE
var nodeCTX = new JitterObject("jit.gl.node");
//nodeCTX.name = "##mesherNodeCTX##";
nodeCTX.capture = 1;
nodeCTX.automatic = 1;
nodeCTX.adapt = 1;
nodeCTX.erase_color = [0, 0, 0, 0];

// OBJECTS INSTANCES USED GLOBALLY 
var gGraphics = new GraphicElements(nodeCTX.name);
var gMinMaxMat = new JitterObject("jit.3m");

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

	saveDict.replace("meshcount", meshcount);
	saveDict.replace("mode", mode);
	saveDict.replace("show_meshes", show_meshes);
	saveDict.replace("windowRatio", gWindowRatio);

	for (var mesh in gMeshes) {
		gMeshes[mesh].saveDataIntoDict(saveDict);
	}

	saveDict.export_json(path);
}

function loadSaveDict(path) {
	var saveDict = new Dict();
	saveDict.import_json(path);
	
	meshcount = saveDict.get("meshcount");
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
	for (var i=0; i<meshcount; i++) {
		gMeshes.push(new Mesh());
		gMeshes[i].initMesh(nodeCTX.name, i, mode, saveDict_); 
	}
	setTexturesMeshes();
}
initMeshes.local = 1;

function setTexturesMeshes() {
	if (arguments.length > 0) {
		gTextureNames = (arrayfromargs(arguments));
	}
	for (var i=0; i<gMeshes.length; i++) {
		gMeshes[i].assignTextureToMesh(gTextureNames[i%gTextureNames.length]);
		gMeshes[i].initTextureCoordMat(); // in case there are more than one textures, update the coordinates to put a texture in every mesh
	}
}
setTexturesMeshes.local = 1;

function init(saveDict_) {	
	gGraphics.reset();
	freeMeshes();
	initMeshes(saveDict_);
}
init.local = 1;

function scaleAllMeshes(scaleX, scaleY) {
	for (var mesh in gMeshes) {
		gMeshes[mesh].scaleMesh(scaleX, scaleY);
	}
}
scaleAllMeshes.local = 1;

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

function setNurbsOrder(orderX, orderY) {
	if (orderX > 0 && orderX < 4 && orderY > 0 && orderY < 4) {
		for (var mesh in gMeshes) {
			gMeshes[mesh].changeNurbsOrder(orderX, orderY);
		}
	}
}
setNurbsOrder.local = 1;

// Set number of meshcount
function setHowManyMeshes(numberMeshes) {
	if (numberMeshes > 0 && numberMeshes < 20) {
		meshcount = numberMeshes;
		freeMeshes();
		initMeshes();
	}
}
setHowManyMeshes.local = 1;

// Resize all the meshes
function resizeAllMeshes(meshSizeX, meshSizeY) {
	var xSize = Math.max(meshSizeX, 2);
	var ySize = Math.max(meshSizeY, 2);
	meshdim = [xSize, ySize];
	for (mesh in gMeshes) {
		gMeshes[mesh].resizeMesh([xSize, ySize]);
	}
}
resizeAllMeshes.local = 1;

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

