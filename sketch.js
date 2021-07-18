var spaceShip, spaceShipImage
var asteroid, asteroidImage
var space, spaceImage
var gameState = "play";
var beam
var score = 1;

function preload(){
  spaceImage = loadImage("space.jpg");
  asteroidImage = loadImage("asteroid.png");
  spaceShipImage = loadImage("spaceShip.jpg");
  
}

function setup() {
  createCanvas(480,480);
  
  space = createSprite(0,0,480,480);
  space.addImage(spaceImage);
  space.scale = 0.5;
  
  spaceShip = createSprite(240,420,10,10);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale = 0.15;
  
  beamGroup = new Group();
  asteroidGroup = new Group();
  
  score = 0;
}

function draw() {
fill("white");
text("Score: "+ score, 400,100);

  if (gameState==="play") {
    
    score = score + Math.round(getFrameRate()/10);
    space.velocityY = -(6 + 3*score/10);
    console.count(space);
    
  space.velocityY = 2;
 if (space.y>400) {
      space.y = 300;
    } 
  spaceShip.x = World.mouseX
    
    if (keyDown("space")){
      createBeam();
    }
    if (beamGroup.isTouching(asteroidGroup)){
      asteroidGroup.destroyEach();
    }
    if (asteroidGroup.isTouching(beamGroup)){
      beamGroup.destroyEach();
    }
      createAsteroid();
    
    if (asteroidGroup.isTouching(spaceShip)){
      asteroid.setVelocityYEach(0);
    }
    
    
    
    
  }
  drawSprites();
}

function createBeam(){
  var beam= createSprite(240,350,10,50);
  beam.shapeColor = "cyan";  
  beam.y = 350;  
  beam.x = spaceShip.x
  beam.velocityY = -2;
  beam.lifetimeY = 10;
  beamGroup.add(beam);
}
function createAsteroid(){
  if (frameCount%100===0){
  asteroid = createSprite(Math.round(random(20, 370)));
  asteroid.addImage(asteroidImage);
  asteroid.scale = 0.12;  
  asteroid.velocityY = 2;
  asteroid.lifetimeY = 470;
  asteroidGroup.add(asteroid);
  }
}