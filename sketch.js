var p1,boat,background1,hurdle1;


function setup() {
  createCanvas(800,400);
  background1=createSprite(400,250,800,900);
  background1.velocityY=5;
  p1=createSprite(300,270,30,40);
  boat=createSprite(300,300,80,20);
  background1.shapeColor="lightblue";
  p1.shapeColor="red";
  boat.shapeColor="brown";
  

}

function draw() {
  background(255,255,255);  
  if(background1.y>400){
    background1.y=background1.width/2;
}
 
  if(keyDown(LEFT_ARROW)){
    p1.x=p1.x-4;
    boat.x=boat.x-4;
  }

  if(keyDown(RIGHT_ARROW)){
    p1.x=p1.x+4;
    boat.x=boat.x+4;
  }

 var edges= createEdgeSprites();
  p1.bounceOff(edges);
  boat.bounceOff(edges);
  if(boat.isTouching(edges)){
    
  }
  drawSprites();
}