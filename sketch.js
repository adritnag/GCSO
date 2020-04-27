var car, wall;
 function setup(){
   createCanvas(1600,600)
   car = createSprite(200,200,40,40);
   car.shapeColor = "white";
   car.density = random(1522,10000);
   car.velocityX = (2,6);
   wall = createSprite(1600,300,0,600);
   wall.shapeColor = "White";
   wall.debug= true;
   wall.setCollider("rectangle",0,0,100,600);

 }

 function draw (){
   background(0);
   if((0.5 * car.density * car.velocityX * car.velocityX)/22500 > 180 && isTouching(car.wall) ){
     car.shapeColor = "red";
   }else if((0.5 * car.density * car.velocityX * car.velocityX)/22500 <=180  && isTouching(car,wall)){
     car.shapeColor = "yellow";
   } else if((0.5 * car.density * car.velocityX * car.velocityX)/22500 >35  && isTouching(car,wall)){
     car.shapeColor = "green";
   }

  
   drawSprites();
 }