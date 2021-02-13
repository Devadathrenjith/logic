var b1,b2,b3,b4




function setup() {
  createCanvas(800,400);
 b1 =  createSprite(400, 200, 50, 50);
 b1.shapeColor = "blue"
 b2 =  createSprite(200, 200, 50, 50);
 b2.shapeColor = "green"
 b3 =  createSprite(600, 200, 50, 50);
 b3.shapeColor = "gray"
 b3.velocityX = -2
 b4 =  createSprite(300, 200, 50, 50);
 b4.shapeColor = "purple"
 b4.velocityX = 3
}

function draw() {
  background("black");  
  drawSprites();
  b2.x = mouseX
  b2.y = mouseY
  if(b1.x - b2.x < b1.width/2 + b2.width/2 &&
     b2.x - b1.x < b1.width/2 + b2.width/2 && 
     b1.y - b2.y < b1.height/2 + b2.height/2 &&
     b2.y - b1.y < b1.height/2 + b2.height/2){
     
      b1.shapeColor = "orange"
      b2.shapeColor = "yellow"

     }
     else{
      b1.shapeColor = "blue"
      b2.shapeColor = "green" 
     }
     if(b3.x - b4.x < b1.width/2 + b2.width/2 &&
      b3.x - b4.x < b1.width/2 + b2.width/2 ){
        b3.velocityX = b3.velocityX * (-1)
        b4.velocityX = b4.velocityX * (-1)
      }

}