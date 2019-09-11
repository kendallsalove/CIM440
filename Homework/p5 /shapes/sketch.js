var pointX= 498;
var pointY=498;
var widthX=0;
var heightY= 0;
var circleColor= "#89cff0";

function setup() {
  // put setup code here
  createCanvas(500,500);
  background("orange");
}

function draw() {
  // put drawing code here
fill(circleColor);
ellipse(250,250,pointX,pointY);

fill(30,75,0);
stroke("red");
ellipse(widthX,heightY,550,250);

fill(255,0,0);
stroke("red");
triangle((width/2)+10, (height/2)-20, (width/2)+10,(height/2)+20,(width/2)-10,(height/2)+20);

}
