console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

ctx1.beginPath();
ctx1.strokeStyle = "Lime";
ctx1.moveTo(150,25)
ctx.lineTo(75,150)
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "green";
ctx1.fill();


