autowatch = 1;
outlets = 2;
include("Meshwarp_Mesh.js");
include("Meshwarp_Mesh_handles.js");
include("Meshwarp_Mesh_movement.js");
include("Meshwarp_Mesh_Mask.js");
include("Meshwarp_Utilities.js");
include("Meshwarp_Global_Obj.js");
include("Meshwarp_GetContext.js");
include("Meshwarp_Mesh_scale.js");
include("Meshwarp_Mesh_save_load.js");
include("Meshwarp_Mesh_dim.js");
include("Meshwarp_Mesh_mouse_routine.js");
include("Meshwarp_GraphicElements.js");
include("Meshwarp_PrivateFunctions.js");
include("Meshwarp_Set_Attributes_Functions.js");

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

var mask_mode = 0;
declareattribute("mask_mode", null, "setMaskMode", 0);

var apply_mask = 0;
declareattribute("apply_mask", null, "setApplyMask", 0);

var invert_mask = 0;
declareattribute("invert_mask", null, "setInvertMask", 0);

// mesh appearance
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

var output_texture = 0;
declareattribute("output_texture", null, "setOutputTexture", 0);

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

var gTime = 
{ 
	oldTime: 0, newTime: 0, deltaTime: 0,
	calcDelta: function() 
	{ 
		this.deltaTime = this.newTime - this.oldTime; 
		this.oldTime = this.newTime;
	} 
};

// var gMesh = null;
var gMesh = new Mesh(gGlobal.meshCount++);
gMesh.initMesh(nodeCTX.name, gGraphics.getGraphicsNodeName());
setTexturesMeshes();


//--------------------------------------------

function swapcallback(event){
	if (enable)
	{
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
				multiplyMaskTexture();
				outputTexture();
				break;

			case "mouse": 
				var oldMouseState = gMousePosScreen.slice();
				gMousePosScreen = event.args.slice();
				if (gMesh != null)
				{	
					if (gMousePosScreen[2])
					{
						gTime.calcDelta();
						if (gTime.deltaTime > 0.07 && gTime.deltaTime < 0.2)
						{
							gMousePosScreen[2] = 2;
						}
					}
					gMesh.mouseClickedRoutine(gMousePosScreen, oldMouseState);
				}
				break;
			
			case "mouseidle":  // Check if mouse is close to vertices to highlight them
				gMousePosScreen = (event.args);
				gIsMouseInsideWindow = true;
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); //transformMouseFromScreenToWorld2D(gMousePosScreen); 
				if (gMesh != null)
				{
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
			default:
				break;
		}
	}	
}
swapcallback.local = 1

function write_ctl_matrix(path) {
	if (gMesh != null)
	{
		gMesh.positionMat.write(path);
	}
}