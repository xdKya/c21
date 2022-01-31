const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var bola
var piso,teto,paredeE,paredeD;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    restitution: 0.9,
    frictionAir: 0.05
  }

  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);

  piso = new Chao(200,390,400,20);
  paredeE = new Chao(10,200,20,400);
  paredeD = new Chao(390,200,20,400);



  
}

function draw() {
  background("black");  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,20);

  piso.display();
  paredeE.display();
  paredeD.display();

 
}