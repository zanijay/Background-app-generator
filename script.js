var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8];

console.log('answer',_.without(array,4));

var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
//using . class selector like in CSS

var col2= document.querySelector(".color2");

var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1.value 
	+ ", " 
	+ col2.value 
	+ ")";

	css.textContent = body.style.background + ";";

	//this add text contents
}

col1.addEventListener("input",setGradient);

col2.addEventListener("input",setGradient);
