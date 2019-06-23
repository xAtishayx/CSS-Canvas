var canvas= document.querySelector('canvas');
canvas.height=window.innerHeight;
canvas.width= window.innerWidth;
//console.log(canvas);
window.addEventListener('resize',function () {
  canvas.height=window.innerHeight;
  canvas.width= window.innerWidth;

})

var c = canvas.getContext('2d');
/*c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100,100,100,100);

create line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "pink";
c.stroke();*/
colorarray=
["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#F2E8C9"];

var mouse=
{
  x:undefined,
  y:undefined
}

window.addEventListener('mousemove',function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
//    console.log(mouse);
})

function Circle(x,y,dx,dy,radius)
{
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.color=colorarray[Math.floor(Math.random()*colorarray.length)]

  this.draw = function()
  {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
  //  c.strokeStyle="blue";
  //  c.stroke();
    c.fillStyle=this.color;
    c.fill();
  }
  this.update = function()
  {

//    c.clearRect(0,0,innerWidth,innerHeight);
    if (this.x + radius > innerWidth || this.x - radius < 0)
      this.dx = -this.dx;
    if (this.y + radius > innerHeight || this.y - radius < 0)
      this.dy = -this.dy;
    this.x+=this.dx;
    this.y+=this.dy;

     //Interactivity
    if (mouse.x-this.x <50 && mouse.x-this.x >-50 &&
       mouse.y-this.y <50 && mouse.y-this.y >-50) {
      if (this.radius <50)
         this.radius+=1;}
    else if(this.radius>2)
      this.radius-=1;
this.draw();
  }
}

var ca = []
var circle = new Circle(x,y,dx,dy,radius);

for (var j=0;j<800;j++){

  var x = Math.random() * (innerWidth - radius*2) + radius;
  var y = Math.random() * (innerHeight - radius*2) + radius;
  var radius = 2;
  var dx = (Math.random() - 0.5)*2;
  var dy = (Math.random() - 0.5)*2;
  ca.push(new Circle(x,y,dx,dy,radius))
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < ca.length; i++) {
   ca[i].update();
  }
// circle.update();
}
animate();
