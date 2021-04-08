var WHITE = [1,1,1,1];
var BLACK = [0,0,0,1];
var RED   = [1,0,0,1];

var BACKGROUND = 9;
var MIDDLE = 10;
var FRONT = 11;

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

// - - -

function clamp(num, min, max) 
{
	return num <= min ? min : num >= max ? max : num;
}

// - - -

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// - - -

function random(min, max) {
	if(typeof max != 'undefined') {
    return Math.random() * (max - min) + min;
	} else {
		return Math.random() * min;
	}
}

function randomColor() {
    return [random(0, 1), random(0, 1), random(0, 1), 1];
}

// - - -  

if (!Math.sign) {
    Math.sign = function(x) {
      return ((x > 0) - (x < 0)) || +x;
    }
}
