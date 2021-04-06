var bgImg;
var cat1, catAni;
var dog1;

function preload(){
  bgImg=loadImage("Pet_Shop_2020.png")
  catAni=loadAnimation("Cat_1.png","Cat_2.png")
}

function setup() {
  createCanvas(1500,800);
  cat1=createSprite(180,580, 60, 30);
  cat1.addAnimation("running",catAni);
cat1.scale=0.5;
}

function draw() {
  background(bgImg);  
  drawSprites();
}