const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(1025,500,250,10);
  ball= new Ball(150,200,10);
  box1 = new Box(1115,495,20,50);
  box2 = new Box(1095,495,20,50);
  box3 = new Box(1075,495,20,50);
  box4 = new Box(1055,495,20,50);
  box5 = new Box(1035,495,20,50);
  box6 = new Box(1015,495,20,50);
  box7 = new Box(995,495,20,50);
  box8 = new Box(975,495,20,50);
  box9 = new Box(955,495,20,50);
  box10 = new Box(935,495,20,50);
  //box6 = new Box(1050,430,50,20);
  //box7 = new Box(1075,430,50,20);
  //box8 = new Box(1055,495,50,20);
  slingshot = new SlingShot(ball.body,{x:150, y:200});
  createCanvas(1200,600);
}

function draw() {
  background(0,0,0); 
  stand1.display();
  Engine.update(engine);
  ball.display();
  slingshot.display(); 
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
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}