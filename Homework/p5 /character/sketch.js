var pointX = 0;
var pointY = 0;

var faceColor = "purple";
var colorButton;


function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

  colorButton = createButton("Click to turn red")
  colorButton.position(20,20);
  colorButton.mousePressed(function(){
    faceColor = "red";
  });
}

function draw() {
  // put drawing code here
  background(0,255,0)
  pointX = mouseX;
  pointY = mouseY;
  fill(faceColor);
  ellipse(pointX -100, pointY -100,200,200);
  fill("0,255,0");
  rect(pointX, pointY, 10, 10);
  rect(pointX + 20, pointY -20,30,30);
  rect(pointX -20, pointY -20,30,30);
}

function mousePressed(){
  //faceColor = "orange";
}

function mouseReleased(){
  //faceColor = "purple";
}

function keyPressed(){
if(key == "y"){
  faceColor = "yellow";
}


}
