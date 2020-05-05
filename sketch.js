var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4;
var bullet1weight,bullet2weight,bullet3weight,bullet4weight,bullet1speed,bullet2speed,bullet3speed,bullet4speed,wall1thickness,wall2thickness,wall3thickness,wall4thickness;
var wall1damage,wall2damage,wall3damage,wall4damage;

function setup() {
  createCanvas(1200,600);
  bullet1 = createSprite(100, 100, 50, 50);
  bullet1.shapeColor = "white";
  bullet1speed = random(223,321);
  bullet1weight = random(30,52);
  bullet1.velocityX = 10;
  bullet2 = createSprite(100, 200, 50, 50);
  bullet2.shapeColor = "white";
  bullet2speed = random(223,321);
  bullet2weight = random(30,52);
  bullet3 = createSprite(100, 300, 50, 50);
  bullet3.shapeColor = "white";
  bullet3speed = random(223,321);
  bullet3weight = random(30,52);
  bullet4 = createSprite(100, 400, 50, 50);
  bullet4.shapeColor = "white";
  bullet4speed = random(223,321);
  bullet4weight = random(30,52);

  wall1 = createSprite(1100,100,10,70);
  wall1thickness = random(22,83);
  wall2 = createSprite(1100,200,10,70);
  wall2thickness = random(22,83);
  wall3 = createSprite(1100,300,10,70);
  wall3thickness = random(22,83);
  wall4 = createSprite(1100,400,10,70);
  wall4thickness = random(22,83);

}

function draw() {
  background(80,80,80); 
  
  if(collision(bullet1,wall1)){

    wall1damage = 0.5*bullet1weight*bullet1speed*bullet1speed/(wall1thickness*wall1thickness*wall1thickness);
    wall1.velocityX = 0;

  } 
  
  if(wall1damage > 10){

    bullet1.shapeColor = "red";

  }

  if(wall1damage < 10){

    bullet1.shapeColor = "green";

  }

  drawSprites();
}