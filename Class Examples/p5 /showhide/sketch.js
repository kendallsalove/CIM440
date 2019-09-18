


var show;
var hide;

var showandhide = false;

function preload(){
//use to load media
puppyImage = loadImage("puppies.jpg");

}
function setup() {
  // put setup code here
  createCanvas(400,400);
  show = createButton("show");
  hide = createButton("hide");
  show.mousePressed(function(){
    showandhide = true;
  })

  }
  hide.mousePressed(function(){
    showandhide = false;
  })
}

function draw() {
  // put drawing code here
  background(255);
  if (showandhide == true){

    image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4)

  }

  text("click show and hide to see puppy")

}
