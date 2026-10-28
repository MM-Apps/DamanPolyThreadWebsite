function randomizer(min,max) {
	randomresult = Math.random() * (max - min) + min;
	return randomresult; 
}

var maxscale = 1.4;
var minscale = 1.1;
var minMov = 5;
var maxMov = 10;
var scalar = randomizer(minscale,maxscale).toFixed(2);
var moveX = randomizer(minMov,maxMov).toFixed(2);
moveX = Math.random() < 0.5 ? -Math.abs(moveX) : Math.abs(moveX);

var moveY = randomizer(minMov,maxMov).toFixed(2);
moveY = Math.random() < 0.5 ? -Math.abs(moveY) : Math.abs(moveY);

var prefix = "";
if (CSSRule.WEBKIT_KEYFRAMES_RULE) { prefix = "-webkit-"; }
else if (CSSRule.MOZ_KEYFRAMES_RULE) { prefix = "-moz-"; }

window.onload = function(){
sheet = document.createElement('style');
document.head.appendChild(sheet);
var anim = "@"+prefix+"keyframes burnseffect { 10% { " + prefix + "transform: scale(1); } 90% { " + prefix + "transform: scale(" + scalar +" ) translate(" + moveX +"%," +  moveY + "%); } 100% { " + prefix + "transform: scale(" + scalar + ") translate(" + moveX +"%," +  moveY +"%); } }";
sheet.appendChild(document.createTextNode(anim));
document.head.appendChild(sheet);
monae = document.querySelector("figure#burnsbox img");
monae.style.webkitAnimationName = 'burnseffect';
monae.style.mozAnimationName = 'burnseffect';
monae.style.animationName = 'burnseffect';
}