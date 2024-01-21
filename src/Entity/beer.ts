/// <reference path="./entity.ts" />

class Beer extends Entity {
  constructor(size: number, x: number, y: number) {
    super(beerImg, size, x, y);
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
  /* public goSlow() {}
  private spinAround() {} */
  /*   draw() {} */
}
