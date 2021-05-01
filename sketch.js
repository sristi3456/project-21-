var car,wall,thickness;
var bullet,speed,weight;

thickness=random(22,83);

function setup() {
  createCanvas(1600,800);
  speed=random(55,90);
  weight=random(480,1500);

  car=createSprite(50,100,50,50);
  car.shapeColor="pink";
  wall=createSprite(1200,300,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(50,32);
  
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  background.color("black");
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*width*height*speed*speed/22509;

    if(deformation<180){
      car.shapeColor="green";
          }
    if (deformation<180 && deformation>100){
      car.shapeColor="yellow"      
    }
    if(deformation<100){
      car.shapeColor="red";
          }
    }
    if(bullet.isTouching(wall)){
      bullet.velocityX = 0;
      bullet.velocityY = 0;
    }
    if (hasCollided(bullet,wall)){
     bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed /( thickness * thickness * thickness);
    }
    if (damage>10){
      wall.shapeColor = color(255,0,0);
      }
      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }
  drawSprites();


}
function hasCollided(bullet,wall){
  bullet.rightEdge= bullet.x +bullet.weight;
  wall.LeftEdge = wall.x
  if(bulletLeftEdge>=bulletRightEdge){
return  true;
  }
  return false ;
}