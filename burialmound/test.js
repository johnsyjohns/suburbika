//https://editor.p5js.org/Ebony/sketches/H1Q1uoj5x
var words = ["adena", "hopewell", "shawnee", "cherokee"];


function setup() {
  createCanvas(1920, 1080);
}

function draw() {

  let topWall = 300;
  let bottomWall = 600;
  let leftWall = 150;
  let rightWall = 1400;
  let yc = constrain(mouseY, 0, topWall);
  let yz = constrain(mouseY, bottomWall, 1080);
  let xc = constrain(mouseX, 0, leftWall);
  let xz = constrain(mouseX, rightWall, 1920);

  //background(bg)
  noFill();
  fill(255,255,255);
  strokeWeight(1);
  var randomword = random(words);
  text(randomword, mouseX, yc, 100, 100);
  text(randomword, mouseX, yz, 100, 100);
  text(randomword, xc, mouseY, 100, 100);
  text(randomword, xz, mouseY, 100, 100);

  //image(img, 0, 0);
}
