//1 DECLARE
let walker;

function setup() {
  createCanvas(600, 600);
  background(0);
  //2 INITIALISE
  walker = new Walker();
}


function draw() {

  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x=width/2;
    this.y=height/2;
  }
  show() {
    stroke(255);
    point(this.x, this.y);
  }

  step() {
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);

    this.x += xstep;
    this.y += ystep;
  }
}
