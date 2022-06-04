function bas() {
	var a = document.getElementById("a.input").value;

	var b = document.getElementById("b.input").value;
	var _b = b - b * 2;

	var c = document.getElementById("c.input").value;

	var delta = Math.pow(b,2) - 4 * a * c;

	var xoutput= document.getElementById("x.out");
	var xx = _b + Math.sqrt(delta);
	var x = xx / 2 * a

	xoutput.innerHTML = x;
}
function basminus() {
	var a = document.getElementById("a.input").value;

	var b = document.getElementById("b.input").value;
	var _b = b - b * 2;

	var c = document.getElementById("c.input").value;

	var delta = Math.pow(b,2) - 4 * a * c;

	var xoutput= document.getElementById("x.out");
	var xx = _b - Math.sqrt(delta);
	var x = xx / 2 * a

	xoutput.innerHTML = x;
}

function act() {
	alert("don´t use this for home work this is just a page for things");
	alert("you don´t use this for homework cause your home work will be thingin'");
}

function w() {
	document.innerHTML = "<iframe>https://www.google.com/fbx?fbx=snake_arcade</iframe>"
}