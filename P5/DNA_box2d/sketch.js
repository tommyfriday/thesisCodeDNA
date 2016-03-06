var world;
var circles = [];
var polygons = [];
var surface;

function setup() {
  createCanvas(700, 900);
  world = createWorld();

  // create objects
  for (var i = 0; i < 500; i++) {
    if (i % 5 == 0) {
      //circles.push(new Circle(random(width), 0));
    } else {
      polygons.push(new Polygon(random(width), 0));
    }
  }

  // Create the surface
  surface = new Surface();
}


function draw() {
  background(0);

  var timeStep = 1.0 / 30;
  world.Step(timeStep, 20, 20);

  // Draw the surface
  // surface.display();

  for (var i = circles.length - 1; i >= 0; i--) {
    //circles[i].display();
    if (circles[i].isDone()) {
      circles.splice(i, 1);
    }
  }

  for (var i = polygons.length - 1; i >= 0; i--) {
    polygons[i].display();
    if (polygons[i].isDone()) {
      polygons.splice(i, 1);
    }
  }
}


function mousePressed() {
  var rnd = random(1);
  if (rnd < 0.5) {
    circles.push(new Circle(mouseX, mouseY));
  } else {
    polygons.push(new Polygon(mouseX, mouseY));
  }
}









//