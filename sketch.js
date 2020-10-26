
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground,paper,dustbinObj;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,600,40);	
	dustbinObj=new dustbin(1200,650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
}
function draw() {
  rectMode(CENTER);
  background('black');
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbinObj.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
} 
