var WHITE = [1,1,1,1];
var BLACK = [0,0,0,1];
var RED   = [1,0,0,1];
var GREY  = [0.5, 0.5, 0.5, 1.0];
var LIGHT_BLUE_TRANSPARENT = [0.1, 0.7, 1.0, 0.5];
var LIGHT_BLUE= [0.1, 0.9, 1.0, 1];
var YELLOW = [1,1,0,1];
var ORANGE = [1,0.7,0,1];

var BACKGROUND = 9;
var MIDDLE = 10;
var MIDDLE_1 = 11;
var FRONT = 12;

var GUI_ELEMENTS = {
	NOTHING: -1,
	MOVE_HANDLE: -100,
	SCALE_HANDLE: -50,
	VERTEX: -25,
	NEGATIVE_INDEX: [-1,-1],
	WAS_SCALED: -3,
	WAS_MOVED_VERTICES: -4,
	WAS_MOVED_MESH: -5,
	WAS_SELECTED_VERTICES: -6
};

// ------------------------------------------

function checkIfVec2AreDifferent(vec1, vec2) {
	return (vec1[0] != vec2[0] || vec1[1] != vec2[1]);
}

function subVec2D(vec1, vec2) {
	return [vec1[0]-vec2[0], vec1[1]-vec2[1]];
}
subVec2D.local = 1;

function sumVec2D(vec1, vec2) {
	return [vec1[0]+vec2[0], vec1[1]+vec2[1]];
}
subVec2D.local = 1;

function jitMatToArray(mat) {
    var posArray = [];
	if (Array.isArray(mat.dim)) {
		for (var i=0; i<mat.dim[0]; i++) {
			for (var j=0; j<mat.dim[1]; j++) {
				posArray.push(mat.getcell(i,j));
			}
		}
	} else {
		for (var i=0; i<mat.dim; i++) {
			posArray.push(mat.getcell(i));
		}
	}

    return posArray;
}
jitMatToArray.local = 1;

function arrayToJitMat(mat, arr) {
	var index = 0;
	for (var i=0; i<mat.dim[0]; i++) {
		for (var j=0; j<mat.dim[1]; j++) {
			mat.setcell2d(i,j, arr[index]);
			index++;
		}
	}
}

// POLYGON INTERSECTION TEST CODE, from: https://lassieadventurestudio.wordpress.com/2012/03/20/polygon-hit-test/
function ccw(x,y,z) {
	return (z[1]-x[1]) * (y[0]-x[0]) >= (y[1]-x[1]) * (z[0]-x[0]);
} ccw.local = 1;

function intersection(a, b, c, d) {
    return ccw(a, c, d) !== ccw(b, c, d) && ccw(a, b, c) !== ccw(a, b, d);
}

function isPointInsidePolygon(coords, matrix) {
	var p = coords.slice();
	var poly = jitMatToArray(matrix);
	var sides = poly.length,
        origin = [0, p[1]],
        hits = 0,
        s1,
        s2,
        i;
    // Test intersection of an external ray against each polygon side.
    for (i = 0; i < sides; i++) {
        s1 = poly[i];
        s2 = poly[(i+1) % sides];
        origin[0] = Math.min(origin[0], Math.min(s1[0], s2[0])-1);
        hits += (intersection(origin, p, s1, s2) ? 1 : 0);
    }
    // Return true if an odd number of hits were found.
    return hits % 2 > 0;
} 
isPointInsidePolygon.local = 1;
//-------------------------------------------------------------------

function mod(n, m) {
	return ((n % m) + m) % m;
}
mod.local = 1;

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
