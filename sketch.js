var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);
  var size = 75;
  var points = font.textToPoints('Welcome!', (width/2)-2.5*size, size, size,
  {
    sampleFactor: 0.15
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function mousePressed() {
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.pos = createVector(random(width), random(height));
  }
}

function deviceShaken() {
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.pos = createVector(random(width), random(height));
  }
  return false;
}
