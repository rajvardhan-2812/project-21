var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var topEdge,bottomEdge,rightEdge,leftEdge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  canvas = createCanvas(800,600);

    surface1 = createSprite(100,550,200,10);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,550,200,10);
    surface2.shapeColor="blue";

    surface3 = createSprite(500,550,200,10);
    surface3.shapeColor="yellow";

    surface4 =  createSprite(700,550,200,10);
    surface4.shapeColor= "black";
    
    box = createSprite(random(20,750),40,20,20);
    box.shapeColor="white";
    
    box.velocityY=6;
    box.velocityX=4.6;

}

function draw() {
    background("pink");


   


 if(box.isTouching(surface1))
 {
     box.shapeColor="red";
     
     box.velocityY=0;
     box.velocityX=0

     music.stop();
 }

 if(box.isTouching(surface2))
 {
     box.shapeColor="blue";

     box.bounceOff(surface2);

     music.stop();
 }

 if(box.isTouching(surface4))
 {
     box.shapeColor="black";

     box.bounceOff(surface4);
    
     music.stop();
 }

 if(box.isTouching(surface3))
 {
     box.shapeColor="yellow";

     box.bounceOff(surface3);

     music.play();
 }

 createEdges();

 box.bounceOff(topEdge)

 box.bounceOff(bottomEdge)

 box.bounceOff(leftEdge)

 box.bounceOff(rightEdge)

  drawSprites();
}

function createEdges()
{
topEdge = createSprite(canvas.width/2,0,canvas.width,1);
topEdge.visible = false;

bottomEdge = createSprite(canvas.width/2,canvas.height,canvas.width,1);
bottomEdge.visible= false;

rightEdge = createSprite(canvas.width,canvas.height/2,1,canvas.height);
rightEdge.visible= false;

leftEdge = createSprite(0,canvas.height/2,1,canvas.height);
leftEdge.visible = false;
}









