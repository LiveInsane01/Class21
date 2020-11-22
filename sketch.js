var fixedRect, movingRect;
var ball,bat;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ball = createSprite(300,300,50,50);
  ball.shapeColor = "orange";
ball.velocityX = 9;

  bat=createSprite(1000,300,50,100);
  bat.shapeColor = "yellow";

}

function draw() {
  background(0,0,0);  

  
  BounceOff(ball,bat);

  drawSprites()
}
