var monkey, monkey_running, ground
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 200);
  monkey = createSprite(80, 170, 20, 20);
  monkey.addAnimation("monkeyMoving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300, 200, 1250, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;


  obstacleGroup = new Group();
  foodGroup = new Group();
  
  score=0;

}


function draw() {
  
  text("Survival Time: "+ Math.round(score), 300,50);
  
  score=score+0.1;
  
  background("white");

  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.6;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  spawnObstacles();

  spawnFood();

  drawSprites();


}

function spawnFood() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 100, 40, 10);

    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;

    foodGroup.add(banana);

  }

}

function spawnObstacles() {
  if (frameCount % 100 === 0) {
    obstacle = createSprite(600, 190, 40, 10);

    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;

    obstacleGroup.add(obstacle);

  }

}