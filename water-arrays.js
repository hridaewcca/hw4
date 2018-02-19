var x = [];
var y = [];
var z = [];
var a = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 10; i = i + 1){
    x[i] = 230;
    y[i] = 220;
    z[i] = random(1);
    a[i] = random(2);
  }
}

function draw() {
  background(0);
  noStroke();
    // draw pipe
     rect(0, 200, 230, 20);
  for (var i = 0; i < 10; i = i + 1){
    
    // draw drip
    
  	ellipse(x[i], y[i], 10);
    x[i] = x[i] + z[i];
    y[i] = y[i] + a[i];
  }
    // if invisible for a full “height” amount…
  if (y[1] > height*2) {
    // reset
    for (var i = 0; i < 10; i = i + 1){
      y = 220;
    }
  }
}
