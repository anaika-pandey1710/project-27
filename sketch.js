
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(100,380);
	bobObject2=new Bob(300,380);
	bobObject3=new Bob(500,380);
	bobObject4=new Bob(700,380);
	bobObject5=new Bob(900,380);

	roofObject= new Roof(500,500,50,1000)

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
	rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
	rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
	rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roofObject.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  drawSprites();
 
}



