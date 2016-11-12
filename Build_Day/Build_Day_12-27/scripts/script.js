function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
	document.getElementById('color-display').style.backgroundColor=color;
}


setInterval(randomColor, 1000);
