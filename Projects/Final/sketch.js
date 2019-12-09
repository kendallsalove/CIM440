var fly;
var frog;
var tongue;
var count;
var mode;
var frogImage, flyImage;
var MARGIN = 40;
var createFly;

var tongueTip;

var count = 0


function setup() {
  mode = 0;
  createCanvas(800, 600);
  textSize(21);

  frogImage = loadImage('frog.png');
  flyImage = loadImage('flysmall.png');

  frog = createSprite(50, 50);


  frog.addImage('normal', frogImage);

  fly = new Group();


  for(var i = 0; i<8; i++) {
    var ang = random(360);
    var px = width/2 + 3000 * cos(radians(ang));
    var py = height/2+ 3000 * sin(radians(ang));
    createFly(3, px, py);

  }

  tongueTip = createSprite(50,50, 10, 10);
  tongueTip.shapeColor = color ("pink");


  frog.position.x = width/2;
  frog.position.y = height-100;


  var count = 0;
}

function draw() {
  clear();
if (mode==0) {
  textSize(30);
  text('Press enter to start',400,350);
  textSize(16);
  text('Protect the frog by eating the flies. If the flies hit the frog, the game is over.', 270, 400);

}

if (mode==1) {

  background("blue");

  fill(255);
  text('Count:' + count, width/2, 20);

  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  fly.overlap(tongueTip, flyHit);

  if(fly.overlap(frog)){
    console.log("hit");
    mode = 2;



  }

  fill('blue');
  drawSprites();
  stroke('red');

  line(width/2,height-100,xPos,yPos);

  var xPos = constrain(mouseX, width/2 - 100, width/2 + 100);
  var yPos = constrain(mouseY, height - 200, height);

  tongueTip.position.x = xPos;
  tongueTip.position.y = yPos;





}//end of mode 1

if(mode == 2){
textSize(30);
text("Game Over", 400, 350);
textSize(16);
text('Press enter to play again.', 392, 400);
//reset score
count = 0;
}

}



function keyPressed () {
  if (keyCode ===ENTER && mode != 1){
    mode=1;
  }

}

function createFly(type, x, y) {
  var a = createSprite(x, y);
  var img = loadImage('fly.png');
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = 0.5;
  a.type = type;



  a.mass = 2+a.scale;
  a.setCollider('circle', 0, 0, 50);
  fly.add(a);
  return a;
}


function flyHit(fly) {


    fly.remove();

    var ang = random(360);
    var px = width/2 + 3000 * cos(radians(ang));
    var py = height/2+ 3000 * sin(radians(ang));
    createFly(3, px, py);

    //counter
    count = count + 1;




}



//if(keyDown(LEFT_ARROW))
//frog.velocity.x -= 4;
//if(keyDown(RIGHT_ARROW))
 //frog.velocity.x += 4;
  //if(keyDown(UP_ARROW))
   //{
   //frog.addSpeed(0.2, frog.rotation);
   //frog.changeAnimation('thrust');
  //}
  //else
  // frog.changeAnimation('normal');
