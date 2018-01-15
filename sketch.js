var font;
var vehicles = [];
var randomPos = false;

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
  randomPos = !randomPos;
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    if(randomPos) {
      v.target = createVector(random(width), random(height));
    } else {
      v.target = createVector(v.targetX, v.targetY);
    }
  }
}


function deviceShaken() {
  randomPos = !randomPos;
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    if(randomPos) {
      v.target = createVector(random(width), random(height));
    } else {
      v.target = createVector(v.targetX, v.targetY);
    }
  }
  return false;
}
