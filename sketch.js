var bullet,wall;
var speed,weight;
var damage;
var thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80)
  

  thickness = random(22,83);
}

function draw() {
  background(200);
  wall.shapeColor = "black";

  damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness))

  if(damage>10){
    bullet.collide(wall);
    bullet.shapeColor = "red";
  } else{
    bullet.collide(wall);
    bullet.shapeColor = "green";
  }


  drawSprites();
}