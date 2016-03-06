var genes = [];

var DNAData = "";
var DNAIndex = 0;

var drawMode = 0;

function setup() {
  createCanvas(1400, 900);
  loadStrings('assets/GH1.txt', loadDNAFile);
}


function draw() {
  background(30);

  for (var i = 0; i < genes.length; i++) {
    var minDst = width * height;
    var minIndex = 0;
    for (var j = 0; j < genes.length; j++) {
      if (i != j) {
        var dst = genes[i].repulse(genes[j]);
        if (dst < minDst) {
          minDst = dst;
          minIndex = j
        }
      }

    }
    genes[i].repelBoundary();
    genes[i].display();
    
    push();
    //background(0);
    stroke(255);
    strokeWeight(20);
    //line(genes[i].x, genes[i].y, genes[minIndex].x, genes[minIndex].y);
    pop();
  }

}



function mousePressed() {

  if (DNAIndex < DNAData.length - 1) {
    var lastIndex = genes.length - 1;
    var posX = genes[lastIndex].x + random(-1, 1);
    var posY = genes[lastIndex].y + random(-1, 1);
    var rad = genes[lastIndex].r;

    genes.push(new Gene(posX, posY, rad, DNAData[DNAIndex]));
    DNAIndex++;
  }

}



function keyPressed() {

  if (key == '1') {
    drawMode = 0;
  } else if (key == '2') {
    drawMode = 1;
  } else if (key == '3') {
    drawMode = 2;
  }  else if (key == '4') {
    drawMode = 3;
  }

}


function loadDNAFile(data) {

  for (var i = 0; i < data.length; i++) {
    DNAData = DNAData + data[i];
  }
  print(DNAData);

  genes.push(new Gene(width / 2, height / 2, 0.1, DNAData[DNAIndex]));
  DNAIndex++;
}



















//