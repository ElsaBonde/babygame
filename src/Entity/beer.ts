/// <reference path="./entity.ts" />

class Beer extends Entity {
  constructor(image: p5.Image, size: number, x: number, y: number) {
    super(image, size, x, y);
  }
  public goSlow() {}
  private spinAround() {}
  draw() {}
}
