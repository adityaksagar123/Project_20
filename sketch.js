const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car,wall;
var speed , weight;


var world,engine;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700,200,60,height/2);
  wall.shapeColor = color(80,80,80)
  speed = random(55,90);
  weight = random(400,1500)

  World.add(world, car);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(Touching(car,wall))
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation >100)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100 )
    {
      car.shapeColor = color(0,255,0);
    }
  }
}