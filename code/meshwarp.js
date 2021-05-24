autowatch = 1;
outlets = 2;
include("Global_Obj.js");
include("GetContext.js");
include("Mesh.js");
include("Mesh_scale.js");
include("Mesh_save_load.js");
include("Mesh_dim.js");
include("Mesh_movement.js");
include("Mesh_handles.js");
include("Mesh_mouse_routine.js");
include("Utilities.js");
include("GraphicElements.js");
include("PrivateFunctions.js");
include("Set_Attributes_Functions");
include("Canvas.js");

// ATTRIBUTES
var use_nurbs = 0; // default: use NURBS
declareattribute("use_nurbs", null, "setNurbsOrMeshMode", 0);

var meshdim = [4, 4];
declareattribute("meshdim", null, "resizeAllMeshes", 0);

var show_mesh = 1;
declareattribute("show_mesh", null, "showMesh", 0);

var enable = 1;
declareattribute("enable", null, "setenable", 0);

var drawto = "";
declareattribute("drawto", null, "setdrawto", 0);

var scale = [1, 1];
declareattribute("scale", null, "scaleAllMeshes", 0);

var nurbs_order = 1;
declareattribute("nurbs_order", null, "setNurbsOrder", 0);

var texture = [""];
declareattribute("texture", null, "setTexturesMeshes", 0);

var layer = 0;
declareattribute("layer", null, "setMeshwarpLayer", 0);

var color = WHITE.slice();
declareattribute("color", null, "setColor", 0);

var blend_enable = 0;
declareattribute("blend_enable", null, "setBlendEnable", 0);

var set_to_aspect = 0;
declareattribute("set_to_aspect", null, "scaleToTextureRatio", 0);

// GLOBAL VARIABLES
var gMousePosScreen = [];
var gMinimumSelectionDist = 0.06;
var gWindowDim = [256, 256]; //nodeCTX.dim.slice();
var gWindowRatio = 1; 
var gWindowPrevRatio = gWindowRatio;
var gTextureNames = "noTexture";
var gIsMouseInsideWindow = false;
var gKeysPressed = {
	shiftPressed: false,
	ctrlPressed: false,
	mouseClicked: false,
	zAndCtrlPressed: false
};

var gMesh = new Mesh(gGlobal.meshCount++);
gMesh.initMesh(nodeCTX.name);
setTexturesMeshes();

//-----PUBLIC FUNCTIONS----------------
function undo() {
	gMesh.undo();
}

function redo() {
	gMesh.redo();
}

function reset() {
	show_mesh = 1;
	gGlobal.isOnHandle == 0;
	gGraphics.resetSingleCircle();
	gGraphics.resetSelected();
	gMesh.initMesh(nodeCTX.name);
}

function use_aspect_ratio() {
	gMesh.scaleToAspectRatio();
}

function move_vertex(indexX, indexY, posX, posY) {
	gMesh.moveVertex([posX, posY], [indexX, indexY]);
}

function jit_gl_texture(texName) {
	if (gMesh) {
		gMesh.assignTextureToMesh(texName);
	}
}

function save_state(path) {
	postln("saveing to " + path);
	saveDictToPath(path);
}

function load_state(path) {
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

//--------------------------------------------

function swapcallback(event){
	//post("callback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");			
	switch (event.eventname) {
		// if context is root we use swap, if jit.gl.node use draw
		case ("swap" || "draw"):
		// RENDER BANG
			if (gWindowDim[0] != nodeCTX.dim[0] || gWindowDim[1] != nodeCTX.dim[1]) {
				setWindowRatio(nodeCTX.dim);
				gWindowDim = nodeCTX.dim.slice();
				gWindowPrevRatio = gWindowRatio;
			}
			checkContextObs();
			checkModifiersKeyDown();
			break;

		case "mouse": 
			if (enable) {
				gMousePosScreen = event.args.slice();
				var oldMouseClicked = gKeysPressed.mouseClicked;
				gKeysPressed.mouseClicked = gMousePosScreen[2];
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); 

				gMesh.mouseClickedRoutine(mouseWorld, gKeysPressed.mouseClicked, oldMouseClicked, checkIfItIsGloballySelected());

			}
			break;
		
		case "mouseidle":  // Check if mouse is close to vertices to highlight them
			if (enable) {
				gMousePosScreen = (event.args);
				gIsMouseInsideWindow = true;
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); //transformMouseFromScreenToWorld2D(gMousePosScreen); 
					// we are using default cam position and far_clip distance for our ray z points
				// var ray = [mouseWorld[0], mouseWorld[1], 2, mouseWorld[0], mouseWorld[1], -98 ];
				// var result = gGlobal.contexts.drawto.physWorld.raytest(ray);
				// print(gMesh.physBody.enable + " " + gMesh.ID)
				// if(result) {
				// 	print("raytest " + result[0]);
				// }

				gMesh.mouseIdleRoutine(mouseWorld);
			}
			break;

		case "mouseidleout":
			// print(event.args)
			gIsMouseInsideWindow = false;
			break;
		
		case "keydown": 
			// print(event.args)
			// print("case")
			break;
	}
}
swapcallback.local = 1

