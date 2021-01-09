var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var packageBody_options;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 220, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody_options = {
	   isStatic:false
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Box1 = new RedBox(380,groundSprite.y-15,100,20);
	Box2 = new RedBox(330,groundSprite.y-35,20,60);
	Box3 = new RedBox(430,groundSprite.y-35,20,60);
	 
	Engine.run(engine);

}


function draw() {

  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();

  Box1.display();
  Box2.display();
  Box3.display();

}


function keyPressed() {
 if (keyCode === (DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 
	packageBody_options = {
		restitution:3,
	    isStatic:false
	}
	
}
}



