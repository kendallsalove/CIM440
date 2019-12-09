var sheep,cow;
var sButton, cButton; jButton; rButton;
var animalJump;
var currentImage = 0;
var jump = true;
var xpos = 0;
var ypos = 290;


function preload (){
  cow = loadImage("cow.png");
  sheep = loadImage("sheep.jpg");
  fence = loadImage("fence.png");
  moon = loadImage("moon.png");
 

}


function setup() {
  // put setup code here

  var cnv = createCanvas(500,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");

  select("#container0").html("<h1>Animal Hop </h1>");

  select("#container0").style("width", "600px");//setting width of container0
 select("#container0").style("margin", "20px auto");//center our container, margin: 0 auto; 0 refers to the top and bottom spacing of our container, the auto refers to the left and right spacing of our container
 //To center our container, you need to set a width and margin: 0 auto;
 cnv.parent("#container0");

 select('body').style("background-color","white");


  cButton = createButton("Cow");
  cButton.mousePressed(function(){
    currentImage=0;
  });
  sButton = createButton("Sheep");
  sButton.mousePressed(function(){
    currentImage=1;
  });
  jButton = createButton("Jump");
  jButton.mousePressed(function(){
    jump = true;
  });
  rButton = createButton("Reset");
  rButton.mousePressed(function(){
    jump = false
  });


// jump buttons
// jump = true;
// reset button
// jump = false;



}


function draw(){
background ("darkblue");
image(fence,170,180);
image(moon,30,50,moon.width/2,moon.height/2);





console.log("currentImage" + currentImage);
if(currentImage==0){
  image(cow,xpos,ypos,cow.width/2,cow.height/2);
}else if(currentImage==1){
  image(sheep,xpos,ypos,cow.width/2,cow.height/2);
}

if(jump==true){
  animalJump();
}else{
  xpos=0;
  ypos=290;
}

if(jump==false){
  xpos = 0;
  ypos = 290;
}

function hello(){
  console.log("hello");
}

function animalJump(){

  xpos = xpos + 5;
  ypos = ypos -4;

}

/*
  if(jump == true){
  xpos = xpos +1;
  ypos = ypos + 1;
}else{
 xpos = 0;
 ypos = 290;
}




*/

}
