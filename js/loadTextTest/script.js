/*
Tommy Payne 2015
Thesis WIP code
load DNA text file v1.0
convert to rectangles
*/

$.get('GH1.txt', ready);

function ready(wholeText) {

  var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700
  });

  // perlin line -------------------------
  // var noise = new Rune.Noise();
  // // noise.noiseSeed(50);
  // noise.noiseDetail(0.4);



  var genes = [];
  for (var i = 0; i< wholeText.length-3; i = i+3) {
    genes.push( wholeText.substring(i, i+3) );
  }

  var glyphsPos = [];

  for(var i = 0; i < genes.length; i++) {

    if(genes[i] == "AAA") {
      // do something like. r.rect(...)

      var y1 = Rune.random(10, 20);
      var y2 = Rune.random(10, 20);

      var square = r.rect(i, y1*5, i, y2*5)
      .stroke(1)
      .fill(false);

      r.circle(i, y1+200, 120)
      .stroke(1)
      .fill(false);

    glyphsPos.push(i);
    console.log(glyphsPos);

        // move it a random amount
        //square.move(Rune.random(-20, 20), Rune.random(-20, 20), true);

      console.log("hurrah")
    }
  }


r.draw();


}
