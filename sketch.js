var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0,endImg, over,hImg,h;
var cashG,diamondsG,jwelleryG,swordGroup,hGroup;
var play=1, end=0, gameState=1, treasureCollection=0, rand;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
 h=loadImage("h.png")
}

function setup(){
  
  createCanvas(600,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 7;


//creating boy running
boy = createSprite(450,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.1;
  boy.setCollider("circle",0,0,2)
 
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
hGroup=new Group();
}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
   
       

    createCash();
    createDiamonds();
    createJwellery();
    createSword();
  createHurdles();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+100;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+300;
    }
  else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+200;
    }
  else if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach(); 
         endImg.scale=10;
        gameState=end;
    }
        else if(hGroup.isTouching(boy)) {
        hGroup.destroyEach(); 
         endImg.scale=10;
        gameState=end;
    }
     
        over();
    
      
  

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30)

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 100 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
  function createHurdles(){
     if (World.frameCount % 200 == 0) {
  var hurdles = createSprite(Math.round(random(50, 350),40, 10, 10));
  hurdles.addImage(h);
 // hurdles.scale=2;
  hurdles.velocityY =3;
  hurdles.lifetime = 150;
  hGroup.add(hurdles);
  }
  }

  function over(){
    if(gameState===end){
       boy.addAnimation("SahilRunning",endImg);
      
       path.velocityY = 0;
      cashG.destroyEach();
      cashG.setVelocityYEach();
       jwelleryG.destroyEach();
      jwelleryG.setVelocityYEach();
      diamondsG.destroyEach();
      diamondsG.setVelocityYEach();
      swordGroup.destroyEach();
      swordGroup.setVelocityYEach();
      hGroup.destroyEach();
      hGroup.setVelocityYEach()
      boy.x=300;
      boy.y=300;
      }
  }
