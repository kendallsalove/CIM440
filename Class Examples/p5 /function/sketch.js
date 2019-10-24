function setup() {
  // put setup code here

  createCanvas(400,400);

  hello();
  goodbye("zeven");
  goodbye("rubi");
}

function draw() {
  // put drawing code here
  background(255);
  if(circlehitzone(100,100) == true){
    //circleColor (xpos,ypos,r,g,b) order corresponds to parameter order
    circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));
  }



  //500 times a frame
  //var i = 0; start, i < 500; how many times; i++ is counter i = i + 1
  for(var i = 0; i < 500; i++){
    circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));

  }
  fill('black');
  ellipse(mouseX,mouseY,100,100);

  console.log(circlehitzone(100,100))

  circlehitzone(100,100);
}

function hello(){
  console.log("hello");
}

function goodbye(message){
  console.log("goodbye " + message)
}

function circleColor(xpos,ypos,r,g,b,cSize){
fill(r,g,b);
ellipse(xpos,ypos,cSize,cSize);

}

function circlehitzone(distX,distY){
  var curDist = dist(mouseX,mouseY,distX,distY);
  console.log("curDist" + curDist);
  fill(127);
  stroke(255);
  ellipse(distX,distY,10,10);
  if(curDist < 10){
    return true;
  }
  else{
    return false;
    stoke(255);
    strokeweight(5);
  }

}