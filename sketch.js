//Create variables here

var dog,dogImg;
var happyDog;
var database;
var foodS;
var  foodStock;


function preload()
{
  //load images here
  
dogImg=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,250,5,5);
  dog.addImage("sad",dogImg);
  dog.addImage("happy",happyDog);
  
  
  dog.scale=0.3;

  database=firebase.database();
  
  foodStock=database.ref('food');
  foodStock.on("value",readStocks);

}


function draw() {  
 
background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){

  writeStocks(foodS);
 dog.changeImage("happy",happyDog);

 }

  drawSprites();
  //add styles here
  fill(0,0,0);
 text(foodS,100,20);

}

function readStocks(data){
 foodS=data.val();
}

function writeStocks(x){
if(x<=0){

  x=0
}else{
  x=x-1;
}
database.ref('/').update({
  food:x
});
}

