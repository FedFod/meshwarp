function setWindowRatio(dims) {
	gWindowRatio = dims[0] / dims[1];
} 
setWindowRatio.local = 1;

function setNodeDrawto() {
	nodeCTX.drawto = drawto;
	videoplane.drawto = drawto;	
}
setNodeDrawto.local = 1;

function freeMeshes() {
	if (gMeshes.length > 0) {
		for (var mesh in gMeshes) {
			gMeshes[mesh].freeMesh();
		}
	}
	gMeshes = [];
}
freeMeshes.local = 1;

function initMeshes() {	
	gMeshes = [];
	for (var i=0; i<gMeshesNumber; i++) {
		gMeshes.push(new Mesh());
		gMeshes[i].initMesh(gMeshSize.slice(0,2), nodeCTX.name, i, gUsingMeshesOrNurbs); // args: "mesh dim_x", "mesh dim_y", "drawto", "mesh index"
	}
}
initMeshes.local = 1;
