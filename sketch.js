
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,crumbledpaper	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumbledpaper=new Paper();
	var render=Render.create({

		element:document.body,
		engine:engine,
		options:{

			width:1600,
			height:700
		}
	})
	Engine.run(engine);
  Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  
  crumbledpaper.display();
  dustbinObj.display();
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(crumbledpaper.body, crumbledpaper.body.position, {x:75,y:-105})
}

}

