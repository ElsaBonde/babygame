/// <reference path="./entity.ts" />

class Formula extends Entity {
  constructor(size: number, x: number, y: number) {
    super(formulaImg, size, x, y);
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }

  /* private getPoints() {} */
  /* update() {}
  draw() {} */
}
