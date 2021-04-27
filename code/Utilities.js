var WHITE = [1,1,1,1];
var BLACK = [0,0,0,1];
var RED   = [1,0,0,1];
var GREY  = [0.5, 0.5, 0.5, 1.0];
var LIGHT_BLUE_TRANSPARENT = [0.1, 0.7, 1.0, 0.5];
var LIGHT_BLUE= [0.1, 0.9, 1.0, 1];

var BACKGROUND = 9;
var MIDDLE = 10;
var MIDDLE_1 = 11;
var FRONT = 12;


function subVec2D(vec1, vec2) {
	return [vec1[0]-vec2[0], vec1[1]-vec2[1]];
}
subVec2D.local = 1;

function sumVec2D(vec1, vec2) {
	return [vec1[0]+vec2[0], vec1[1]+vec2[1]];
}
subVec2D.local = 1;

function isPointInsidePolygon(coords, matrix) {
	var testx = coords[0]; var testy = coords[1];
	var i, j, c = 0;

	if (!Array.isArray(matrix.dim)) {
		var nvert = matrix.dim;
		for (i=0, j = nvert-1; i < nvert; j = i++) {
			var verty_i = matrix.getcell(i)[1];
			var verty_j = matrix.getcell(j)[1];
			var vertx_i = matrix.getcell(i)[0];
			var vertx_j = matrix.getcell(j)[0];
			if ( ((verty_i>testy) != (verty_j>testy)) &&
				((testx < ( ((vertx_j-vertx_i) * (testy-verty_i)) / (verty_j-verty_i) + vertx_i)) ) ) {
				c = !c;
			}
		}
	}
	return c ? 1 : 0;
}
isPointInsidePolygon.local = 1;
// - - -

function transformMouseFromScreenToWorld2D(mouseScreen) {
	var mouseXWorld = (((mouseScreen[0] / gWindowDim[0]) * 2.0) - 1.0) * gWindowRatio; 
	var mouseYWorld = (((mouseScreen[1] / gWindowDim[1]) * 2.0) - 1.0) * -1.0;
	
	return [mouseXWorld, mouseYWorld];
}
transformMouseFromScreenToWorld2D.local = 1;

// - - -

function calcDist2D(vec1, vec2) {
    return Math.sqrt((vec1[0]-vec2[0])*(vec1[0]-vec2[0]) + (vec1[1]-vec2[1])*(vec1[1]-vec2[1]));
}
calcDist2D.local = 1;

// - - -

Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
};
// - - -

function print() 
{
	for (var i = 0; i < arguments.length; i++) {
   		post(arguments[i]);
  	}
	post();
}
print.local = 1;
// - - -

function postln(arg) {
	//if(verbose)
		post(arg+"\n");
}
postln.local = 1;

// - - -

function clamp(num, min, max) 
{
	return num <= min ? min : num >= max ? max : num;
}
clamp.local = 1;
// - - -

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
map.local = 1;
// - - -

function random(min, max) {
	if(typeof max != 'undefined') {
    return Math.random() * (max - min) + min;
	} else {
		return Math.random() * min;
	}
}
random.local = 1;

function randomColor() {
    return [random(0, 1), random(0, 1), random(0, 1), 1];
}
randomColor.local = 1;
// - - -  

if (!Math.sign) {
    Math.sign = function(x) {
      return ((x > 0) - (x < 0)) || +x;
    }
}
