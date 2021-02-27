var plant, lion;


function setup() {
  createCanvas(600,600);
   plant=createSprite(300, 300, 65, 70);
   lion = createSprite(543,234,45,45);
}
  

function draw() {
  background("black");  
lion.x = mouseX;
lion.y = mouseY;

if(lion.x - plant.x < lion.width/2 + plant.width/2 && plant.x - lion.x < plant.width/2 + lion.width/2 && plant.y - lion.y < lion.height/2 + plant.height/2 && lion.y - plant.y < lion.width/2 + plant.width/2){
lion.shapeColor = "red";
plant.shapeColor = "red"
}
else{
  lion.shapeColor = "green";
  plant.shapeColor = "green";
}


  drawSprites();
}