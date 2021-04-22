autowatch = 1;

include("Mesh.js");
include("Utilities.js");
include("GraphicElements.js");
include("PrivateFunctions.js");
include("Canvas.js");

// GLOBAL VARIABLES
var gMeshes = [];
var gMousePosScreen = [];
var gMinimumSelectionDist = 0.06;
var gWindowDim = [256, 256]; //nodeCTX.dim.slice();
var gWindowRatio = 1; 
var gWindowPrevRatio = gWindowRatio;
var gShowMeshes = 1;

// a structure to contain infos relative to the clicked mesh and vertex
var gSelectionStruct = {
	cellIndex: [-1, -1], 
	oldCellIndex: [-1, -1],
	meshIDsToCheckArr: new Array(),
	meshIDToClick: -1,
	reset: function() {
		this.cellIndex = [-1, -1];
		//this.oldCellIndex = [-1, -1];
		this.meshIDsToCheckArr = [];  // we need to check multiple meshes in case they overlap
		this.meshIDToClick = -1;   // the mesh we are going to operate on
	}
};

//-----PUBLIC FUNCTIONS----------------
function reset() {
	show_meshes = 1;
	init();
}

function jit_gl_texture(texName) {
	for (mesh in gMeshes) {
		gMeshes[mesh].assignTextureToMesh(texName);
	}
}

function save_state(path) {
	postln("saveing to " + path);
	buildSaveDict(path);
}

function load_state(path) {
	postln("loading to " + path);
	loadSaveDict(path);
}

function freebang() {
	//postln("freebang");
	freeMeshes();
	gGraphics.sketch.freepeer();
	nodeCTX.freepeer();
	videoplane.freepeer();
	nodeCamera.freepeer();
	implicit_lstnr.subjectname = ""
	implicit_tracker.freepeer();
	// what else?
}

// Resize single mesh
function resize_single_mesh(index, meshSizeX, meshSizeY) {
	if (index < gMeshes.length) {
		var xSize = Math.max(meshSizeX, 2);
		var ySize = Math.max(meshSizeY, 2);
		gMeshes[index].resizeMesh([xSize, ySize]);
	}
}

// ATTRIBUTES
var mode = 0; // default: use mesh
declareattribute("mode", null, "setMode", 0);

var meshcount = 1; 
declareattribute("meshcount", null, "setHowManyMeshes", 0);

var meshdim = [4, 4];
declareattribute("meshdim", null, "resizeAllMeshes", 0);

var show_meshes = 1;
declareattribute("show_meshes", null, "showMeshes", 0);

var enable = 1;
declareattribute("enable", null, "setenable", 0);

var drawto = "";
declareattribute("drawto", null, "setdrawto", 0);

var scale = [1, 1];
declareattribute("scale", null, "scaleAllMeshes", 0);

//--------------------------------------------

// ROB 
//--------------------------------------------

var implicitdrawto = "";
var swaplisten = null; // The listener for the jit.world
var explicitdrawto = false;

//const is820 = (max.version >= 820);
var is820 = (max.version >= 820);
var proxy = null;
if(is820) {
	proxy = new JitterObject("jit.proxy");
}

function setenable(val) {
	enable = val;
	nodeCTX.enable = enable;
	videoplane.enable = val;
}

function setdrawto(val) {
	explicitdrawto = true;
	dosetdrawto(val);
}

function dosetdrawto(newdrawto) {
	if(newdrawto == drawto || !newdrawto) {
		// bounce
		return;
	}

	if(proxy) {
		proxy.name = newdrawto;
		//postln("drawto class " + proxy.class);
		if(proxy.class !== undefined) {
			if(proxy.class != "jit_gl_context_view") {
				proxydrawto = proxy.send("getdrawto");
				// important! drawto is an array so get first element
				return dosetdrawto(proxydrawto[0]);
			}
		}
		else {
			// remove once 8.2 is updated to support proxy.class
			proxydrawto = proxy.send("getdrawto");
			if(proxydrawto !== null && proxydrawto !== undefined) {
				return dosetdrawto(proxydrawto[0]);
			}
		}
	}
	// postln("setdrawto " + newdrawto);
	drawto = newdrawto;	
	
	setNodeDrawto();
	
	if(swaplisten)
		swaplisten.subjectname = "";
	swaplisten = new JitterListener(drawto, swapcallback);

}
dosetdrawto.local = 1;

function swapcallback(event){
	//post("callback: " + event.subjectname + " sent "+ event.eventname + " with (" + event.args + ")\n");			

	switch (event.eventname) {
		// if context is root we use swap, if jit.gl.node use draw
		case ("swap" || "draw"):
		// RENDER BANG
			if (gWindowDim[0] != nodeCTX.dim[0] || gWindowDim[1] != nodeCTX.dim[1]) {
				setWindowRatio(nodeCTX.dim);
				gWindowDim = nodeCTX.dim.slice();
				if (gMeshes.length < 1) {
					gWindowPrevRatio = gWindowRatio;
					init(); // INIT if meshes don't exist
				}
				for (var mesh in gMeshes) {
					gMeshes[mesh].resizeWindowScale();
				}
			}
			break;

		case "mouse": // get mouse array when mouse is clicked or released
			if (gShowMeshes && enable) {
				gMousePosScreen = (event.args);
				var mouseClicked = gMousePosScreen[2];
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); // transformMouseFromScreenToWorld2D(gMousePosScreen);
				
				if (mouseClicked) {
					//print(gSelectionStruct.cellIndex)
					if (gSelectionStruct.cellIndex[0] != -1 && gSelectionStruct.meshIDToClick != -1) {  // we are clicking on a vertex
						gMeshes[gSelectionStruct.meshIDToClick].moveVertex(mouseWorld, gSelectionStruct.cellIndex.slice(0,2)); // move the vertex with the mouse
					}
				} else { // mouse is released
					// if we moved some vertices
					if (gSelectionStruct.meshIDToClick != -1) {
						gMeshes[gSelectionStruct.meshIDToClick].calcMeshBoundsMat(); // recalculate the bounding matrix only when finished dragging
						gSelectionStruct.reset(); // reset the values in the selectionStruct
					}
					gGraphics.reset(); // delete the circle
				}
			}
		
			break;

		case "mouseidle":  // Check if mouse is close to vertices to highlight them
			if (gShowMeshes && enable) {
				gMousePosScreen = (event.args);
				var mouseWorld = gGraphics.transformMouseToWorld(gMousePosScreen); //transformMouseFromScreenToWorld2D(gMousePosScreen); 
				
				gSelectionStruct.reset(); // reset all the struct values

				// Iterate through meshes to check in which one the mouse is in
				for (var mesh in gMeshes) { 
					var meshID = gMeshes[mesh].checkIfMouseInsideMesh(mouseWorld); // Get the ID of the mesh in which the mouse is in (if it's inside any)
					if (meshID != -1) { 
						gSelectionStruct.meshIDsToCheckArr.push(meshID); // push in this array all the IDs of the meshes the mouse is in (it could be more than one when meshes overlap)
					} 
				}

				if (gSelectionStruct.meshIDsToCheckArr.length < 1) {
					gGraphics.reset(); // we are not inside a mesh
				} else {
					// if we are on a mesh, let's check if the mouse is close to a vertex
					for (var i=0; i<gSelectionStruct.meshIDsToCheckArr.length; i++) { // check all the meshes the mouse is in
						gSelectionStruct.cellIndex = gMeshes[gSelectionStruct.meshIDsToCheckArr[i]].mouseIsCloseToVertex(mouseWorld); // check if the mouse is close to any vertex in the mesh

						if (gSelectionStruct.cellIndex[0] == -1) {  // if mouse is not close to vertex than delete highlight circle
							gGraphics.reset();
						} else {  // mouse is close to a vertex in the mesh
							gSelectionStruct.meshIDToClick = gSelectionStruct.meshIDsToCheckArr[i]; // This is the mesh we are working with

							// check if the cell currently selected is different from the previous cell selected. 
							// In case it is different we fill the matrix with the adjacent cells for bounding calculation
							if (gSelectionStruct.cellIndex[0] != gSelectionStruct.oldCellIndex[0] || 
								gSelectionStruct.cellIndex[1] != gSelectionStruct.oldCellIndex[1]) {
									gSelectionStruct.oldCellIndex = gSelectionStruct.cellIndex.slice();
									gMeshes[gSelectionStruct.meshIDToClick].calcAdjacentCellsMat(gSelectionStruct.cellIndex.slice());
							}
							break; // We just need to check a single mesh so we break the loop
						}
					}
				}
			}
			break;
			
		case "reshape":
			//gWindowDim = nodeCTX.dim;
		
			break;
	}
}
swapcallback.local = 1

var implicit_tracker = new JitterObject("jit_gl_implicit");
// postln("implicit tracker name: "+implicit_tracker.name)
var implicit_lstnr = new JitterListener(implicit_tracker.name, implicit_callback);

function implicit_callback(event) {
	if(!explicitdrawto && implicitdrawto != implicit_tracker.drawto[0]) {
		// important! drawto is an array so get first element
		implicitdrawto = implicit_tracker.drawto[0];
		dosetdrawto(implicitdrawto);
	}
}
implicit_callback.local = 1;
