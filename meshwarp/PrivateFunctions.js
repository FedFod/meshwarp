function freeMeshes() {
	if (gMeshes.length > 0) {
		for (var mesh in gMeshes) {
			gMeshes[mesh].freeMesh();
		}
	}
}
freeMeshes.local = 1;

function freeNurbs() {
    if (gNurbs.length > 0) {
		for (var nurbs in gNurbs) {
			gNurbs[nurbs].freeNurbs();
		}
	}
}
freeNurbs.local = 1;

function initMeshes() {	
	postln("init meshes")
	gMeshes = [];
	for (var i=0; i<gMeshesNumber; i++) {
		gMeshes.push(new Mesh());
		gMeshes[i].initMesh(gMeshSize.slice(0,2), nodeCTX.name, i); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
	}
}
initMeshes.local = 1;

function initNurbs() {
	gNurbs = [];
	for (var i=0; i<gMeshesNumber; i++) {
		gNurbs.push(new Nurbs());
		gNurbs[i].initNurbs(gMeshSize.slice(0,2), nodeCTX.name, i);
	}
}
initNurbs.local = 1;

function freeShapes() {
	if (gUsingMeshesOrNurbs == "mesh") {
		freeMeshes();
	} else if (gUsingMeshesOrNurbs == "nurbs") {
		freeNurbs();
	}
}
freeShapes.local = 1;

function initShapes() {
	gShapes = [];
	if (gUsingMeshesOrNurbs == "mesh") {
		initMeshes();
		gShapes = gMeshes; // copy by reference
	} else if (gUsingMeshesOrNurbs == "nurbs") {
		initNurbs();
		gShapes = gNurbs;
	}
}
initShapes.local = 1;