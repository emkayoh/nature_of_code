//1 DECLARE
let walker;

function setup() {
  createCanvas(600, 600);
  background(255);
  //2 INITIALISE
  walker = new Walker();
}


function draw() {

  walker.step();
  walker.show();
}
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.oldx = this.x;
    this.oldy = this.y;
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    this.x += map(noise(this.tx), 0, 1, -1, 1);
    this.y += map(noise(this.ty), 0, 1, -1, 1);

    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    stroke(0);
    line(this.oldx, this.oldy, this.x, this.y);
    this.oldx = this.x;
    this.oldy = this.y;
  }
}
