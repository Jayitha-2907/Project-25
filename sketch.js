
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject;
var world;
var dustbinImg, paperObjectImg;


function preload(){

  
}


function setup() {
   createCanvas(1600, 700);
   rectMode(CENTER);


   engine = Engine.create();
   world = engine.world;

   dustbinObj=new Dustbin(1200,650);
   paperObject=new Paper(200,450,40);
   groundObject=new Ground(width/2,670,width,20);
   //Create a Ground
      

   Engine.run(engine);

 
}


function draw() {
 rectMode(CENTER);
 background("pink");

 paperObject.display();
 dustbinObj.display();
 groundObject.display();
  

}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   
    }
}



