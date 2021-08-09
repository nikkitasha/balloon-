var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0
var redBg, blueBg, greenBg ,pinkBg , arrowBg;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  redBg = new Group();
  blueBg = new Group();
  greenBg = new Group();
  pinkBg = new Group();
  arrowBg = new Group();

}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  if (World.frameCount % 100==1){
    if (select_balloon==2){
      blueBalloon();
    }
  }
  if (World.frameCount % 100==2){
    if (select_balloon==3){
      greenBalloon();
    }
  }
  if (World.frameCount % 100==3){
    if (select_balloon==4){
      pinkBalloon();
    }
  }
  if(arrowBg.isTouching(redBg)){
    arrowBg.destroyEach();
    redBg.destroyEach();
    score=score+5
  }

   if (arrowBg.isTouching(blueBg)){
     arrowBg.destroyEach();
     blueBg.destroyEach();
     score= score+5
   }
   
   if (arrowBg.isTouching(greenBg)){
    arrowBg.destroyEach();
    greenBg.destroyEach();
    score= score+6
   }
   if (arrowBg.isTouching(blueBg)){
    arrowBg.destroyEach();
    blueBg.destroyEach();
    score= score+7
   }
   if (arrowBg.isTouching(pinkBg)){
    arrowBg.destroyEach();
    pinkBg.destroyEach();
    score= score+6
   }
  drawSprites();
  text("score:" +score,270,30)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowBg.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 399;
  red.scale = 0.1;
 redBg.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(10,400)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 1;
  blue.lifetime = 399;
  blue.scale = 0.1;
  blueBg.add(blue)
}

function greenBalloon() {
  //write cvar blue = createSprite(0,Math.round(random(10,400)),10,10);
  var green = createSprite(0,Math.round(random(10,400)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 1;
  green.lifetime = 399;
  green.scale = 0.1;
  greenBg.add(green)
}

function pinkBalloon() {
  //write cvar blue = createSprite(0,Math.round(random(10,400)),10,10);
  var pink = createSprite(0,Math.round(random(10,400)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 1;
  pink.lifetime = 399;
  pink.scale = 1;
  pinkBg.add(pink)
}
