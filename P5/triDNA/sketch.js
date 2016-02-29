var tileWidth = 60;
var tileHeight = 100;
var tileGap = 40;




var DNA = [];

var typeG;
var typeA;
var typeT;
var typeC;

function preload() {
  typeG = loadImage('assets/G.png');
  typeA = loadImage('assets/A.png');
  typeT = loadImage('assets/T.png');
  typeC = loadImage('assets/C.png');
}

function setup() {
  createCanvas(800, 600);
  loadStrings('assets/GH1.txt', loadDNAFile);

  background(220);
  noStroke();

}

function draw() {
  background(220);

  for (var i = 0; i < DNA.length; i++) {

    if (floor(i / tileWidth) % 2 == 0) {
      if (i % 2 == 0) {
        DNA[i].display("up");
      } else {
        DNA[i].display("down");
      }
    } else {
      if (i % 2 == 0) {
        DNA[i].display("down");
      } else {
        DNA[i].display("up");
      }
    }


    if (i == DNA.length - 1) {
      //print(i);
      //noLoop();
    }
  }

}


function loadDNAFile(data) {

  // to get the whole data in one line
  var wholeData = "";
  for (var i = 0; i < data.length; i++) {
    wholeData = wholeData + data[i];
  }
  //print(wholeData);

  // create objects with 3 DNA
  for (var i = 0; i < wholeData.length - 3; i += 3) {
    var DNAData = wholeData[i] + wholeData[i + 1] + wholeData[i + 2];
    DNA.push(new DNAObejct(DNAData));
  }

  // to give the position


  var w = tileWidth;
  var h = tileHeight;
  var gap = tileGap;

  var startX = gap / 2;
  var startY = gap / 2;

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var index = w * y + x;
      if (index < DNA.length - 1) {
        DNA[index].x = startX + x * gap;
        DNA[index].y = startY + y * (tan(PI / 3) * tileGap);
      }
    }
  }

}


function DNAObejct(DNAData) {
  this.x = 0;
  this.y = 0;
  this.dna = DNAData;
  this.col = color(random(255), random(255), random(255));

  this.drawShape = function(type, x, y, w, h) {
    if (type == "G") {
      image(typeG, x, y, w, h);
    } else if (type == "T") {
      image(typeT, x, y, w, h);
    } else if (type == "A") {
      image(typeA, x, y, w, h);
    } else if (type == "C") {
      image(typeC, x, y, w, h);
    }
  }


  this.display = function(direction) {
    push();
    fill(0);
    //text(this.dna, this.x, this.y);
    ellipse(this.x, this.y, 3, 3);

    noFill();
    stroke(this.col);

    // draw "down"
    if (direction == "down") {
      for (var i = 0; i < 3; i++) {
        push();
        translate(this.x, this.y);
        rotate(PI * 2 / 3 * i);
        if (this.dna.length == 3) {
          this.drawShape(this.dna[i], -tileGap, -tan(PI / 6) * tileGap, tileGap * 2, tan(PI / 6) * tileGap);
        }
        //rect(-tileGap, -tan(PI / 6) * tileGap, tileGap * 2, tan(PI / 6) * tileGap);
        //line(-tileGap, -tan(PI / 6) * tileGap, tileGap, -tan(PI / 6) * tileGap);
        pop();
      }
    }

    // draw "up"
    if (direction == "up") {
      for (var i = 0; i < 3; i++) {
        //var offset =  tan(PI / 3) * tileGap - tan(PI / 6) * tileGap;
        push();
        translate(this.x, this.y + tan(PI / 6) * tileGap);
        rotate(PI * 2 / 3 * i);
        rotate(PI);
        if (this.dna.length == 3) {
          this.drawShape(this.dna[i], -tileGap, -tan(PI / 6) * tileGap, tileGap * 2, tan(PI / 6) * tileGap);
        }
        //rect(-tileGap, -tan(PI / 6) * tileGap, tileGap * 2, tan(PI / 6) * tileGap);
        //line(-tileGap, -tan(PI / 6) * tileGap, tileGap, -tan(PI / 6) * tileGap);
        pop();
      }
    }
    pop();
  }

}