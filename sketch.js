
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);

  bobdiameter = 40;
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

bobObject1 = new BOB(260,400,40);
bobObject2 = new BOB(320,400,40);
bobObject3 = new BOB(380,400,40);
bobObject4 = new BOB(440,400,40);
bobObject5 = new BOB(500,400,40);


roof = new ROOF(380,150,300,30);

rope1 = new Rope(bobObject1.body,roof.body,-bobdiameter*2,0);
rope2 = new Rope(bobObject2.body,roof.body,-bobdiameter*1,0);
rope3 = new Rope(bobObject3.body,roof.body,0,0);
rope4 = new Rope(bobObject4.body,roof.body,bobdiameter*1,0);
rope5 = new Rope(bobObject5.body,roof.body,bobdiameter*2,0);


}


function draw() {
  rectMode(CENTER);
  background("pink");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === LEFT_ARROW||UP_ARROW)
	{
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-40,y:-42});
	}
}


