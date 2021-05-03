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
videoplane.layer = layer;

// CAMERA IN NODE
var nodeCamera = new JitterObject("jit.gl.camera");
nodeCamera.drawto = nodeCTX.name;
nodeCamera.ortho = 2;

//---------------------------------------------------------------

function moveVertexOrMesh(mouseWorld) {
	// if it's the handle
	if (gSelectionStruct.cellIndex[0] == -100) { 
		assignThisAsCurrentlySelectedToGlobal();
		gMesh.moveMesh(mouseWorld);
		gGraphics.resetSelected(); 
	} 
	// if we have selected vertices and want to move them
	else if (gSelectionStruct.howManyVerticesSelected > 1 && gSelectionStruct.cellIndex[0] != -1) {
		gMesh.moveSelectedVertices(mouseWorld);
		gSelectionStruct.areVerticesMoved = 1;
		gGraphics.resetSingleCircle();
	} 
	// if we want to move a single vertex
	else { 
		gMesh.moveVertex(mouseWorld, gSelectionStruct.cellIndex.slice()); // move the vertex with the mouse
		if (gSelectionStruct.howManyVerticesSelected == 1) {
			gGraphics.resetSelected(); // delete selected circles
		}
	}
}

function selectMultipleVertices(mouseWorld) {
	gGraphics.drawFrame(gLatestMousePos, mouseWorld);
	gSelectionStruct.howManyVerticesSelected = gMesh.highlightSelectedVertices(gLatestMousePos, mouseWorld);
}

function buildSaveDict(path) {
	var saveDict = new Dict();

	saveDict.replace("meshcount", meshcount);
	saveDict.replace("mode", mode);
	saveDict.replace("show_mesh", show_mesh);
	saveDict.replace("windowRatio", gWindowRatio);

	gMesh.saveDataIntoDict(saveDict);

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
	if (gMesh!=null) {
		gMesh.freeMesh();
	}
	gMesh = null;
}
freeMeshes.local = 1;

function setTexturesMeshes() {
	if (arguments.length > 0) {
		gTextureNames = (arrayfromargs(arguments));
	}
	gMesh.assignTextureToMesh(gTextureNames);
	gMesh.initTextureCoordMat(); // in case there are more than one textures, update the coordinates to put a texture in every mesh
}
setTexturesMeshes.local = 1;

function init(saveDict_) {	
	addThisMeshwarpObjToGlobal();
	gGraphics.resetSingleCircle();
	gGraphics.resetSelected();
	freeMeshes();
	initMeshes(saveDict_);
}
init.local = 1;

function initMeshes(saveDict_) {	
	gMesh = new Mesh();
	gMesh.initMesh(nodeCTX.name, gGlobal.meshwarp_objects.indexOf(nodeCTX.name), mode, saveDict_); 
	setTexturesMeshes();
}
initMeshes.local = 1;

function scaleAllMeshes(scaleX, scaleY) {
	gMesh.scaleMesh(scaleX, scaleY);
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
		gMesh.changeMode(mode);
	}
}
setMode.local = 1;

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
	print("show mesh "+show)
	if (!show) {
		gGraphics.resetSingleCircle();
	}
}
showMesh.local = 1;

