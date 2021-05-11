// JIT_GL_NODE
var nodeCTX = new JitterObject("jit.gl.node");
//nodeCTX.name = "##mesherNodeCTX##";
nodeCTX.capture = 1;
nodeCTX.automatic = 1;
nodeCTX.adapt = 1;
nodeCTX.erase_color = [0, 0, 0, 0];
nodeCTX.fsaa = 1;

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

// PHYS PICKING
var physWorld = new JitterObject("jit.phys.world");
physWorld.dynamics = 0;
physWorld.worldbox = 0;

var physBody = new JitterObject("jit.phys.body");
physBody.worldname = physWorld.name;
physBody.shape = "convexhull";

var physDraw = new JitterObject("jit.gl.physdraw");
physDraw.worldname = physWorld.name;
physDraw.enable = 1;

// var phys_lstnr = new JitterListener(physWorld.name, phys_callback);

// function phys_callback(event) {
// 	print(event)
// }

//---------------------------------------------------------------

function setNodeDrawto() {
	nodeCTX.drawto = drawto;
	videoplane.drawto = drawto;	
	physWorld.drawto = drawto;
	physDraw.drawto = drawto;
}
setNodeDrawto.local = 1;

function moveWholeMesh(mouseWorld) {
	// if it's in the handle
	if (gGlobal.isOnHandle == 0) {
		assignThisAsCurrentlySelectedToGlobal();
	}
	if (checkIfItIsGloballySelected()) {
		gMesh.moveMesh(mouseWorld);
	}
	gGraphics.resetSelected(); 
}

function moveSingleVertexOrSelectedVertices(mouseWorld) {
	// if we have selected vertices and want to move them
	if (gSelectionStruct.howManyVerticesSelected > 1 && gSelectionStruct.cellIndex[0] != -1) {
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
moveSingleVertexOrSelectedVertices.local = 1;

function selectMultipleVertices(mouseWorld) {
	gGraphics.drawFrame(gLatestMousePos, mouseWorld);
	gSelectionStruct.howManyVerticesSelected = gMesh.highlightSelectedVertices(gLatestMousePos, mouseWorld);
}
selectMultipleVertices.local = 1;

function calculateBoundingCells(selectionStruct) {
	if (selectionStruct.cellIndex[0] != -1 && (selectionStruct.cellIndex[0] != selectionStruct.oldCellIndex[0] || 
		selectionStruct.cellIndex[1] != selectionStruct.oldCellIndex[1])) {
		selectionStruct.oldCellIndex = selectionStruct.cellIndex.slice();
		if (selectionStruct.cellIndex[0] != -100) { // if it's a handle don't recalculate ajiacent cells mat
			gMesh.calcAdjacentCellsMat(selectionStruct.cellIndex.slice());
		}
	}
}
calculateBoundingCells.local = 1;

function buildSaveDict() {
function buildSaveDict(path) {
	var saveDict = new Dict();

	saveDict.replace("meshcount", meshcount);
	// saveDict.replace("meshcount", meshcount);
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
	
	// meshcount = saveDict.get("meshcount");
	mode = saveDict.get("mode");
	gWindowRatio = saveDict.get("windowRatio");

	gMesh.loadDict(saveDict); 
	gMesh.changeMode(mode);
	setTexturesMeshes();
}

function setTexturesMeshes() {
	if (arguments.length > 0) {
		gTextureNames = (arrayfromargs(arguments));
	}
	gMesh.assignTextureToMesh(gTextureNames);
	gMesh.initTextureCoordMat(); // in case there are more than one textures, update the coordinates to put a texture in every mesh
	gMesh.initAndAssignTextureCoordMat(); // in case there are more than one textures, update the coordinates to put a texture in every mesh
}
setTexturesMeshes.local = 1;

function scaleAllMeshes(scaleX, scaleY) {
	gMesh.scaleMesh(scaleX, scaleY);
	gMesh.setLatestScale();
}
scaleAllMeshes.local = 1;

function setWindowRatio(dims) {
	gWindowRatio = dims[0] / dims[1];
} 
setWindowRatio.local = 1;

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
	if (!show) {
		gGraphics.resetSingleCircle();
	}
}
showMesh.local = 1;

