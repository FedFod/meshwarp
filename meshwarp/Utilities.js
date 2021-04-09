var WHITE = [1,1,1,1];
var BLACK = [0,0,0,1];
var RED   = [1,0,0,1];
var GREY  = [0.5, 0.5, 0.5, 1.0];

var BACKGROUND = 9;
var MIDDLE = 10;
var MIDDLE_1 = 11;
var FRONT = 12;

function switchDrawModeMeshes(mode) {

}

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
