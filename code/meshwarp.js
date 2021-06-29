autowatch = 1;
outlets = 2;
include("Meshwarp_Utilities.js");
include("Global_Obj.js");
include("GetContext.js");
include("Mesh.js");
include("Mesh_scale.js");
include("Mesh_save_load.js");
include("Mesh_dim.js");
include("Mesh_movement.js");
include("Mesh_handles.js");
include("Mesh_mouse_routine.js");
include("GraphicElements.js");
include("PrivateFunctions.js");
include("Set_Attributes_Functions");
include("Canvas.js"); // what's that??

// ATTRIBUTES
var meshdim = [4, 4];
declareattribute("meshdim", null, "resizeAllMeshes", 0);

var show_ui = 1;
declareattribute("show_ui", null, "showUI", 0);

var enable = 1;
declareattribute("enable", null, "setenable", 0);

var drawto = "";
declareattribute("drawto", null, "setdrawto", 0);

var scale = [1, 1];
declareattribute("scale", null, "setScale", 0);
var position = [0,0,0];
declareattribute("position", null, "setPosition", 0);
var rotatez = 0;
declareattribute("rotatez", null, "setRotatez", 0);

var texture = [""];
declareattribute("texture", null, "setTexturesMeshes", 0);

var layer = 0;
declareattribute("layer", null, "setMeshLayer", 0);

var color = WHITE.slice();
declareattribute("color", null, "setColor", 0);

var ui_grid_color = randomColor();
declareattribute("ui_grid_color", null, "setUIGridColor", 0);

var blend_enable = 0;
declareattribute("blend_enable", null, "setBlendEnable", 0);

var nurbs_order = 1;
declareattribute("nurbs_order", null, "setNurbsOrder", 0);
var use_nurbs = 0; // default: use NURBS
declareattribute("use_nurbs", null, "setNurbsOrMeshMode", 0);
var lock_to_aspect = 0;
declareattribute("lock_to_aspect", null, "setScaleRelativeToAspect", 0);

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
				gGraphics.changeSelectionCirclesRadius(gWindowDim);
			}
			checkContextObs();
			checkModifiersKeyDown();
			break;

		case "mouse": 
			if (enable) {
				var oldMouseState = gMousePosScreen.slice();
				gMousePosScreen = event.args.slice();
				gMesh.mouseClickedRoutine(gMousePosScreen, oldMouseState);
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
			gIsMouseInsideWindow = false;
			break;
		
		case "keydown": 
			// print(event.args)
			// print("case")
			break;
	}
}
swapcallback.local = 1

