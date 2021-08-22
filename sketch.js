var bg,sleep,brush,gym,eat,drink,move;
var scene,astronaut;


function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation ("drink1.png", "drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}






function setup() {
  createCanvas(1800,1400);
  createSprite(400, 200, 50, 50);

  //creating background
  scene = createSprite(400,200,400,400);
  scene.addImage(bg);
  scene.scale = 0.1;
  
  // creating sleeping astronaut 
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep); 
  astronaut .scale = 0.1;
  


}

function draw() {
  background(255,255,255);
  edges= createEdgeSprites();
  astronaut.collide(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0; 
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0; 
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0; 
  }

  if(keyDown("m button")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 5;
    astronaut.velocityY = 5; 
  }
  
  drawSprites();
  textSize(12);
  fill(255);
  text("Instructions",160,70);
  text("Up Arrow = Brushing",160,80);
  text("Down Arrow = Gymming",160,90);
  text("Left Arrow = Eating",160,100);
  text("Right Arrow = Bathing",160,110);
  text("m key = Moving",160,120);
}