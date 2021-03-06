var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  createCanvas (500, 500);
  backgroundColor = color(235, 250, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playing) {
  } else {
    background(255);
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    noStroke()
		fill (70, 220, 255)
    ellipse (250, 250, 50, 50);
  } else if (key == 'S') {
    osc = oscS;
    noStroke()
		fill (40, 107, 255)
    ellipse (250, 250, 100, 100);
  } else if (key == 'D') {
    osc = oscD;
    noStroke()
		fill (210, 0, 103)
    ellipse (250, 250, 150, 150);
  } else if (key == 'F') {
    osc = oscF;
    noStroke()
		fill (90, 171, 194)
    ellipse (250, 250, 200, 200);
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
