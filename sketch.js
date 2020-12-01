
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boyimage;
var treeimage;
var ground1;
var stone1;
var mango1;


function preload()
{
	boyimage=loadImage("images/boy.png");
	treeimage=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(600,680,1200,20);
	stone1=new Stone(235,420,30); 
	mango1=new Mango(800,400,30);
	mango2=new Mango(700,430,30);
	mango3=new Mango(900,440,30);
	mango4=new Mango(1000,400,30);
	mango5=new Mango(1100,370,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(940,300,40);
	mango9=new Mango(1100,230,40);
	rope1=new Rope(stone1.body,{x:130,y:590});
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
  image(boyimage,100,540,150,200)
  image(treeimage,600,100,650,800)
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  rope1.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  
 
}



function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope1.fly();
  
}
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
