/*
Tommy Payne 2015
Thesis WIP code
load DNA text file v1.1
convert to lines
*/

$.get('GH1.txt', ready);

function ready(wholeText) {

  var r = new Rune({
    container: "#canvas",
    width: 1684,
    height: 1684
  });

  // perlin line -------------------------
  var noise = new Rune.Noise();
  // // noise.noiseSeed(50);
  noise.noiseDetail(0.4);
  var xStep = 15;


//go through the data systematically
var genes = [];

for (var i = 0; i < wholeText.length; i++){
//  genes.push( wholeText.substring(i) );

    var letter = wholeText.charAt(i);

    //draw a noise path using the
    // noise.noiseDetail(i + 1);
    // var noisePath = r.path (0, 50 +(i*100))
    // .stroke(1)
    // .fill(false)
    // .strokeWidth(3);
    // var noiseStep = 0;
    //
    //
    // for(var x = 0; x < r.width; x += xStep){
    //   var y = noise.get(noiseStep) * 100;
    //   noisePath.lineTo(x, y);
    //   noiseStep += 0.1;
    // }

    console.log(
    wholeText.charAt(i));

var top = 10;
var space = 15;
var bottom = 100;
var sizeW = 7;
var sizeH = 713;

var y = noise.get(i * 0.2)* 40;


    if(wholeText.charAt(i) == "A"){

      r.line(i*space, top, sizeW, sizeH)
      .fill('hsv', 0, 80, 90)
      .stroke(false)
      .strokeWidth(1);
    }
    else if (letter == "T") {
      r.rect(i*space, top, sizeW, sizeH)
      .fill(false)
      .stroke('hsv', 300, 80, 90)
      .strokeWidth(1);
    }
    else if (letter == "C") {
    //  r.rect(i+space, top, i, bottom)
      r.rect(i*space, top, sizeW, sizeH)
      .fill(false)
      .stroke('hsv', 270, 80, 90)
      .strokeWidth(1);
    }
    else {
      r.rect(i*space, top, sizeW-3, sizeH)
      .fill(false)
      .stroke('hsv', 140, 80, 90)
      .strokeWidth(1);
      }
}










  r.draw();
}
