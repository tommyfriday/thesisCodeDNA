/*
Tommy Payne 2016
Make a spiral
*/

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 700
});

// r.circle(r.width/2, r.height/2, 60)
//   .fill(false)
//   .stroke(0)
//   .strokeWidth(1);

var num = 30;
var numDegrees = 360 / num;
var radius = 10;

for(var i = 0; i < num; i++){

  for(var j = 0; j < 1; j++) {

    //by incrementing j (the radius) steps out from the centre
    var centralRadius = 1000; //10 + (j * 30);
    var x = r.width/2 + Math.cos(Rune.radians(i * numDegrees))
      * centralRadius * Math.sin(i*numDegrees*0.002);
    var y = r.height/2 + Math.sin(Rune.radians(i * numDegrees))
      * centralRadius * Math.sin(i*numDegrees*0.002);

    r.circle(x, y, radius)
      .fill(false)
      .stroke(0);
  }
}

r.draw();
