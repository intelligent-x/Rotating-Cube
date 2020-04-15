var rx = 45,
	ry = 45,
	rz = 45;

setInterval(function(){
	draw();
	update();
}, 10);

function draw(){
	document.getElementById("container").style.transform = "rotateX( " + rx + "deg ) rotateY( " + ry + "deg ) rotateZ( " + rz + "deg )";
}

function update(){
	rx ++;
	ry ++;
	rz ++;
}