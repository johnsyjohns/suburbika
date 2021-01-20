//var bg;


//function preload(){
//  bg = loadImage("img/bkimg.png");
//}

function setup() {
  createCanvas(1920, 1080);
  //background(255);
  //img = loadImage("img/bkimg.png");
}

function draw() {

  //let topWall = 550;
//  let bottomWall = 650;
//  let ym = mouseY;
//  let yc = constrain(mouseY, topWall, bottomWall);

  //background(bg)
  noFill();
  g = random(1, 128);
  fill(g,g,g);
  strokeWeight(1);
  text('not in my backyard', mouseX, mouseY, 100, 100);
  //image(img, 0, 0);
}
