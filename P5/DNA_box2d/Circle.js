// constructor function
function Circle(_x, _y) {
  this.r = random(10, 50);

  // Define a body
  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_dynamicBody;
  bd.position = scaleToWorld(_x, _y);

  // Define a fixture
  var fd = new box2d.b2FixtureDef();
  fd.shape = new box2d.b2CircleShape();
  fd.shape.m_radius = scaleToWorld(this.r);;

  // Some physics
  fd.density = 1.0;
  fd.friction = 1.0;
  fd.restitution = 0.8;

  // Create the body and Attach the fixture
  this.body = world.CreateBody(bd);
  this.body.CreateFixture(fd);

  // add movement and rotation
  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5, 5));

}


Circle.prototype.display = function() {
  var pos = scaleToPixels(this.body.GetPosition());
  var a = this.body.GetAngleRadians();

  push();
  translate(pos.x, pos.y);
  rotate(a);
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(0, 0, this.r * 2, this.r * 2);
  // Let's add a line so we can see the rotation
  line(0, 0, this.r, 0);
  pop();
}


// to remove the particle from the box2d world
Circle.prototype.killBody = function() {
  world.DestroyBody(this.body);
}

// Is the particle ready for deletion?
Circle.prototype.isDone = function() {
  // Let's find the screen position of the particle
  var pos = scaleToPixels(this.body.GetPosition());
  // Is it off the bottom of the screen?
  if (pos.y > height + this.w * this.h) {
    this.killBody();
    return true;
  }
  return false;
}