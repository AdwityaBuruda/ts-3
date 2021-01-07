const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;

function setup() {
 createCanvas("yellow");
engine = Engine.create();
world = engine.world;

polygon = new Polygon(100, 300, 70);

floor1 = new Ground(390,400,250,10);
floor2 = new Ground(700,200,200,10);


box1 = new Box(300, 275, 30, 40,"blue");
box2 = new Box(330, 275, 30, 40, "blue");
box3 = new Box(360, 275, 30, 40, "blue");
box4 = new Box(390, 275, 30, 40, "blue");
 box5 = new Box(330, 235, 30, 40, "yellow");
box6 = new Box(360, 235, 30, 40, "yellow");
box7 = new Box(390, 235, 30, 40, "yellow");
box8 = new Box(360, 195, 30, 40, "pink");
box9 = new Box(390, 195, 30, 40, "pink");
box10 = new Box(390, 155, 30, 40, "green");
block1 = new Box(640, 175, 30, 40, "blue");
block2 = new Box(670, 175, 30, 40, "blue");
block3 = new Box(700, 175, 30, 40, "blue");
block4 = new Box(730, 175, 30, 40, "blue"); 
block5 = new Box(640, 135, 30, 40, "yellow");
block6 = new Box(670, 135, 30, 40, "yellow");
block7 = new Box(700, 135, 30, 40, "yellow");
block8 = new Box(640, 95, 30, 40, "pink");
block9 = new Box(670, 95, 30, 40, "pink");
block10 = new Box(640, 75, 30, 40, "green");

sling= new SlingShot(polygon.body,{x:50, y:250});

Engine.run(world, engine);
}
function draw() {
  background(0);  
  Engine.update(engine);
  floor1.display();
  floor2.display();
 
  polygon.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  sling.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}