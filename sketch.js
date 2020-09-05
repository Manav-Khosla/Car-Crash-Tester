var call, wall;
var speed, weight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  speed=random(55, 90);
  weight=random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall=createSprite(windowWidth-20, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(80, 200, 200);
  car.velocityX=speed;
  
  if (wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>=180){
      car.shapeColor=color(255, 0, 0);
      textSize(50);
      text("Your deformation is lethal", windowWidth/3, windowHeight/3);
      textSize(36);
    } 
    
    else if(deformation<180 && deformation>100){
      car.shapeColor=color(230, 230, 0);
      textSize(50);
      text("Your deformation is average", windowWidth/3, windowHeight/3);
      textSize(36);
    }
    else{
      car.shapeColor=color(0, 255, 0);
      textSize(50);
      text("Your deformation is good", windowWidth/3, windowHeight/3);
      textSize(36);
    }
  }

  drawSprites();
}