var WHITE = [1,1,1,1];
var BLACK = [0,0,0,1];

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

// - - -  

if (!Math.sign) {
    Math.sign = function(x) {
      return ((x > 0) - (x < 0)) || +x;
    }
}
