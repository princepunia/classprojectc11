var Runner, path
var RunnerImg, pathImg


function preload(){
  //pre-load images
  RunnerImg = loadAnimation("Runner-1.png" , "Runner-2.png");
pathImg = loadImage("path.png");


}

function setup(){
  //createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

Runner = createSprite(100,100,10,10);
Runner.addAnimation("Running",RunnerImg);
Runner.scale = 0.08;



}

function draw() {
  background("0");
  Runner.x = World.mouseX;

  if(path.y > 400){
path.y = height/2;
  }
 


  drawSprites();
}
