var fixrect, moverect ;

function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 100, 80, 50);
  moverect = createSprite(400,100,50,70);
  moverect.shapeColor= "green";
  fixrect.shapeColor= "green";

 
}

function draw() {
  background(255,255,255);  
  
  moverect.x= mouseX;
  moverect.y= mouseY;
  
    //for horizontal displacement
    if( (moverect.x-fixrect.x) < (fixrect.width/2 + moverect.width/2) &&
      (fixrect.x - moverect.x) < (fixrect.width/2 + moverect.width/2)  ) 
      {
  
      moverect.shapeColor= "red";
      fixrect.shapeColor="red"; 
      console.log("touching");
  
      }
      else 
      {
        moverect.shapeColor= "green"; 
        fixrect.shapeColor="green";
      }


      //for vertical dispacement
      
      if( (moverect.y-fixrect.y) < (fixrect.height/2 + moverect.height/2) &&
      (fixrect.y - moverect.y) < (fixrect.height/2 + moverect.height/2)  ) 
      {
  
      moverect.shapeColor= "red";
      fixrect.shapeColor="red"; 
      console.log("touching");
  
      }
      else 
      {
        moverect.shapeColor= "green"; 
        fixrect.shapeColor="green";
      }
  

  console.log(moverect.x-fixrect.x);



  drawSprites();


}