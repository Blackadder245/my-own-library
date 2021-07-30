function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 60, 50);
  rect1.velocityX=-2
  rect1.shapeColor="red"
  rect2=createSprite(250,200,40,40)
  rect2.velocityX=2
  rect3=createSprite(700,200,40,50)
}

function draw() {
  background("blue");
  
  
collide(rect1,rect3)
 bounceoff(rect1,rect2);
  drawSprites();
}
