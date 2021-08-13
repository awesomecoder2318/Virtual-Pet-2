/*var dog, happydog, foodA, foodStock
var dogimg, happydogimg, database
var feed,addFood,fedTime,lastFed, foodObj
function preload()
{
  dogimg = loadImage("images/dogImg.png")
  happydogimg = loadImage("images/dogImg1.png")

}

function setup() {
  database = firebase.database();
	createCanvas(1000, 400);

  foodObj = new Food();
  foodStock = database.ref('Food');
  foodStock.on('value', readStock);

  dog = createSprite(250,250,10,10)
  dog.addImage(dogimg)
  dog.scale = 0.5
  
  

feed = createButton("Feed the dog");
feed.position(700,95)
feed.mousePressed(feedDog)

foodObj=createButton("Add Food")
foodObj.position(800,95)
foodObj.mousePressed(addFoods)

  
}


function draw() { 
  background(46,139,87)
  foodObj.display()
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  }); 

  

  fill(255,255,254)
  textSize(15)
  if(lastFed>=12){
text("last Feed : "+ lastFed%12 + "PM",350,30)
  }else if(lastFed==0){
text("last Feed : 12AM",350,30)
  }else{
    text("last Feed : " +lastFed + "AM",350,30)
  }
  drawSprites();

}


function readStock(data){
foodA = data.val()
foodObj.updateFoodStock(foodA);
}


function feedDog(){
  dog.addImage(happydogimg);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}*/

var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;

function preload(){
sadDog=loadImage("Images/dogImg.png");
happyDog=loadImage("Images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}