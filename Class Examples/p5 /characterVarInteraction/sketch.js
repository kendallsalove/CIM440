var pointX = 0;
var pointY = 0;

var point2; // variable undefined

var faceColor = "blue";

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

  console.log("pointX " + pointX + " pointY " + pointY);



  //var message = "Hello"; //the scope of this variable is onlye available inside of the setup function. If used in draw or any other function, you will receive an error.
  //console.log(message);

  console.log(point2);

  colorButton = createButton("Click to turn purple"); //function that is part of p.5dom library
  colorButton.position(20,20);
  colorButton.mousePressed(function(){

  faceColor="purple";

  })
}

function draw() {
  // put drawing code here

  //console.log(message);//error: message is not defined because the message variable is only in the setups scope
  //var drawMessage = "This message is in the draw loop";
  //console.log(drawMessage);


  background(255);

  //use an if statement to change background color
  //what is going to be our condition

  if(mouseX < width/2){
    //do something
    console.log("left hand side");
    background("grey");
  }

  if(mouseX > width/2){
    console.log("right hand side");
  }

 //pointX = 100;
 //pointY = 100;
 pointX = mouseX;
 pointY = mouseY;
 fill(faceColor);
 rect(pointX -100 ,pointY -100,200,200);
 fill(255);
 ellipse(pointX, pointY, 10,10);
 ellipse(pointX + 20, pointY -20, 30,30);
 ellipse(pointX - 20, pointY -20, 30,30);

 // arc(x,y,width,height,start,end)
 arc(pointX,pointY + 10,50,50,0,PI);

 //ellipse(point2, point2, 10,10);
}

function mousePressed(){
//  faceColor = "red";
}


function mouseReleased(){
  //faceColor = "blue";
}

function keyPressed(){

  console.log("key" + key);
  console.log("keyCode" + keyCode);

//conditional: if condition = true, then do what is inside curly braces
  if(key == "w"){
    faceColor = "white";
  }
//what you want to happen goes in here

if(key == "r"){
  faceColor = "red";
}


}
