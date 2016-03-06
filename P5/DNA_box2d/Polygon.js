// constructor function
function Polygon(_x, _y) {

  var minSize, maxSize;

  if (random(1) < 0.5) {
    minSize = 5;
    maxSize = 25;
  } else {
    minSize = 5;
    maxSize = 60;
  }

  var vertices = [];
  //vertices[3] = scaleToWorld(-random(minSize, maxSize), random(minSize, maxSize));
  vertices[2] = scaleToWorld(-random(minSize, maxSize), -random(minSize, maxSize));
  vertices[1] = scaleToWorld(random(minSize, maxSize), -random(minSize, maxSize));
  vertices[0] = scaleToWorld(random(minSize, maxSize), random(minSize, maxSize));

  // Define a body
  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_dynamicBody;
  bd.position = scaleToWorld(_x, _y);

  // Define a fixture
  var fd = new box2d.b2FixtureDef();
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsArray(vertices, vertices.length);

  // Some physics
  fd.density = 1.0;
  fd.friction = 1.5;
  fd.restitution = 0.5;

  // Create the body and Attach the fixture
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);

  // add movement and rotation
  this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
  this.body.SetAngularVelocity(random(-5, 5));

}


Polygon.prototype.display = function() {
  // Get the body's position
  var pos = scaleToPixels(this.body.GetPosition());
  // Get its angle of rotation
  var a = this.body.GetAngleRadians();

  // Draw it!
  var f = this.body.GetFixtureList();
  var ps = f.GetShape();

  rectMode(CENTER);
  push();
  translate(pos.x, pos.y);
  rotate(a);
  noStroke();
  fill(255);
  //stroke(200);
  //strokeWeight(2);
  beginShape();
  // For every vertex, convert to pixel vector
  for (var i = 0; i < ps.m_count; i++) {
    var v = scaleToPixels(ps.m_vertices[i]);
    vertex(v.x * 0.6, v.y * 0.6);
  }
  endShape(CLOSE);
  pop();
}


// to remove the particle from the box2d world
Polygon.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Polygon.prototype.isDone = function() {
  // Let's find the screen position of the particle
  var pos = scaleToPixels(this.body.GetPosition());
  // Is it off the bottom of the screen?
  if (pos.y > height + 300) {
    this.killBody();
    return true;
  }
  return false;
}








//