autowatch = 1;
outlets = 2;
include("Meshwarp_Utilities.js");
include("Meshwarp_Global_Obj.js");
include("Meshwarp_GetContext.js");
include("Meshwarp_Mesh.js");
include("Meshwarp_Mesh_scale.js");
include("Meshwarp_Mesh_save_load.js");
include("Meshwarp_Mesh_dim.js");
include("Meshwarp_Mesh_movement.js");
include("Meshwarp_Mesh_handles.js");
include("Meshwarp_Mesh_mouse_routine.js");
include("Meshwarp_GraphicElements.js");
include("Meshwarp_PrivateFunctions.js");
include("Meshwarp_Set_Attributes_Functions");

// ATTRIBUTES

// not saved in dict

var drawto = "";
declareattribute("drawto", null, "setDrawto", 0);

var texture = [""];
declareattribute("texture", null, "setTexturesMeshes", 0);

var enable = 1;
declareattribute("enable", null, "setEnable", 0);

// saved in dict

// mesh structure
var meshdim = [4, 4];
declareattribute("meshdim", null, "setMeshDim", 0);

var nurbs_order = [1, 1];
declareattribute("nurbs_order", null, "setNurbsOrder", 0);

var curvature = 0.;
declareattribute("curvature", null, "setCurvature", 0);

// mesh behavior
var layer = 0;
declareattribute("layer", null, "setMeshLayer", 0);

var lock_to_aspect = 0;
declareattribute("lock_to_aspect", null, "setScaleRelativeToAspect", 0);

// mesh appearance
//var blend_enable = 0;
//declareattribute("blend_enable", null, "setBlendEnable", 0);

var color = WHITE;
declareattribute("color", null, "setColor", 0);

var grid_color = randomColor();
declareattribute("grid_color", null, "setUIGridColor", 0);

declareattribute("selection_color", null, "setSingleCircleColor", 0);
declareattribute("multiple_selection_color", null, "setMultipleCirclesColor", 0);
declareattribute("circles_size", null, "setCirclesAndFrameLineSize", 0);

var show_ui = 1;
declareattribute("show_ui", null, "showUI", 0);

var grid_size = 3.;
declareattribute("grid_size", null, "setGridSize", 0);

var point_size = 10.;
declareattribute("point_size", null, "setPointSize", 0);

// saved in positionMat dict

// mesh transform
declareattribute("scale", "getScale", "setScale", 0);

declareattribute("position", "getPosition", "setPosition", 0);

var rotatez = 0;
declareattribute("rotatez", null, "setRotatez", 0);

// GLOBAL VARIABLES
var gMousePosScreen = [];
var gMinimumSelectionDist = 0.06;
var gWindowDim = [256, 256]; //nodeCTX.dim.slice();
var gWindowRatio = 1; 
var gWindowPrevRatio = gWindowRatio;
var gIsMouseInsideWindow = false;
var gShiftPressed = false;
var gCTRLPressed = false;
var gMaxUndo = 100;

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

function write_ctl_matrix(path) {
	gMesh.positionMat.write(path);
}