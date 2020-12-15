const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var ground;
var box;
var box2;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,380,800,20)
  World.add(world,ground)

  box = new Box(200,300,50,50)
  World.add(world,box)

  box2 = new Box(240,10,50,50)
  World.add(world,box2)
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  box.display();
  box2.display();
  drawSprites();
}