/// <reference path="./entity.ts" />

type Controls = {
  up: number;
  left: number;
  down: number;
  right: number;
};

class Baby extends Entity {
  private controls: Controls;

  constructor(
    /* image: p5.Image, */ size: number,
    x: number,
    y: number,
    controls: Controls
  ) {
    super(/* image, */ size, x, y);
    this.controls = controls;
  }
  private getX() {
    return this.x;
  }
  private getY() {
    return this.y;
  }

  public move() {
    if (keyIsDown(this.controls.up)) {
      this.y -= 10;
    }
    if (keyIsDown(this.controls.down)) {
      this.y += 10;
    }
    if (keyIsDown(this.controls.right)) {
      this.x += 10;
    }
    if (keyIsDown(this.controls.left)) {
      this.x -= 10;
    }
  }

  private limitToScreen() {}
  private checkCollision() {}

  update() {
    this.move();
  }

  draw() {
    push();
    fill("red");
    circle(30, 30, 30);
    pop();
  }
}
