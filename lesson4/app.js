var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



var hulk = new Image();
var im = new Image();
var thor = new Image();
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";

//Draw Sprites
im.onload = function(){
	ctx.drawImage(im,470,250,120,150);
}
hulk.onload = function(){
	ctx.drawImage(hulk,290,250,190,190);
}
thor.onload = function(){
	ctx.drawImage(thor,120,250,200,180);
}

//Skies and Land
ctx.fillStyle = "sandybrown";
ctx.fillRect(0, 380, 800, 150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0, 0, 800, 380);

//Moon
ctx.beginPath();
ctx.arc(100,100,50,0, 6.28);
ctx.closePath();
ctx.fillStyle = "ivory";
ctx.fill();