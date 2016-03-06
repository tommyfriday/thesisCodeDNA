function Gene(_x, _y, _r, _type) {

  this.type = _type;
  this.x = _x;
  this.y = _y;
  this.dia = _r * 2;

  this.r, this.gap;
  if (this.type == 'G') {
    this.r = random(20, 100);
    this.gap = this.r + random(-3, 1);
  } else if (this.type == 'T') {
    this.r = random(40, 55);
    this.gap = this.r + random(-2, 1);
  } else if (this.type == 'A') {
    this.r = random(1, 15);
    this.gap = this.r + random(10, 30);
  } else if (this.type == 'C') {
    this.r = random(15, 25);
    this.gap = this.r + random(-6, -3);
  }

  // for bloby movement
  this.blobSpd = [];
  for (var i = 0; i < 5; i++) {
    this.blobSpd.push(random(-0.05, 0.05));
  }

}

Gene.prototype.display = function() {
  this.dia = lerp(this.dia, this.r * 2, 0.02);

  push();
  switch (drawMode) {
    case 0:
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.dia, this.dia);
      break;
    case 1:
      stroke(255);
      fill(255, 150);
      ellipse(this.x, this.y, this.dia, this.dia);
      fill(0);
      text(this.type, this.x - 5, this.y + 5);
      break;
    case 2:
      noStroke();
      fill(255);
      for (var i = 0; i < this.blobSpd.length; i++) {
        ellipse(this.x + cos(frameCount * this.blobSpd[i]) * this.r * 0.05,
          this.y + sin(frameCount * this.blobSpd[i]) * this.r * 0.05,
          this.dia, this.dia);
      }
      break;
  }
  pop();
}

Gene.prototype.repulse = function(other) {
  var dst = dist(this.x, this.y, other.x, other.y);
  if (dst < this.gap + other.gap) {
    var strength = 0.02;
    this.x += (this.x - other.x) * strength;
    this.y += (this.y - other.y) * strength;
    other.x += (other.x - this.x) * strength;
    other.y += (other.y - this.y) * strength;
  }
  return dst;
}

Gene.prototype.repelBoundary = function() {
  var spacing = this.r + 10;
  if (this.x < 0 + spacing) {
    this.x = 0 + spacing;
  } else if (this.x > width - spacing) {
    this.x = width - spacing;
  }
  if (this.y < 0 + spacing) {
    this.y = 0 + spacing;
  } else if (this.y > height - spacing) {
    this.y = height - spacing;
  }
}













//