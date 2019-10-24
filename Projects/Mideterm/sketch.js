var sheep,cow;
var sButton, cButton; jButton; rButton;
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
  createCanvas(500,400);
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
  xpos = xpos + 5;
  ypos = ypos -4;
}else{
  xpos=0;
  ypos=290;
}

if(jump==false){
  xpos = 0;
  ypos = 290;
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
