const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	bob1=createSprite(130,600);
	bob1.shapeColor="pink"
	bob2=createSprite(260,600);
	bob2.shapeColor="pink"
	bob3=createSprite(390,600);
	bob3.shapeColor="pink"
	bob4=createSprite(520,600);
	bob4.shapeColor="pink"
	bob5=createSprite(650,600);
	bob5.shapeColor="pink"
	roof=createSprite(400,80,750,30);
	roof.shapeColor="white"
	rope1=createSprite(130,340,20,490);
	rope1.shapeColor="pink"
	rope2=createSprite(260,340,20,490);
	rope2.shapeColor="pink"
	rope3=createSprite(390,340,20,490);
	rope3.shapeColor="pink"
	rope4=createSprite(520,340,20,490);
	rope4.shapeColor="pink"
	rope5=createSprite(650,340,20,490);
	rope5.shapeColor="pink"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(bob1.isTouching(bob2)){
bob1.bounce(bob2);
  }
if(bob2.isTouching(bob3)){
bob2.bounce(bob3);
}
if(bob3.isTouching(bob4)){
	bob3.bounce(bob4);
	  }
	  if(bob4.isTouching(bob5)){
		bob4.bounce(bob5);
		  }

	  
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
bob1.velocityX=3;
}
}


