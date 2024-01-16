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
    image: p5.Image,
    size: number,
    x: number,
    y: number,
    controls: Controls,

  ) {
    super(image, size, x, y);
    this.controls = controls;
  }
  public getX() {
    return this.x;
  }
  public getY() {
    return this.y;
  }

  /***
   * Får bebisen att röra sig 2 px för varje tryck med piltangenterna
   */
  public move() {
    if (keyIsDown(this.controls.up)) {
      this.y -= 2;

    }
    if (keyIsDown(this.controls.down)) {
      this.y += 2;
    }
    if (keyIsDown(this.controls.right)) {
      this.x += 2;

    }
    if (keyIsDown(this.controls.left)) {
      this.x -= 2;

    }
  }

  private limitToScreen() {}
  private checkCollision() {}

  update() {
    this.move();
  }

  /***
   * Målar ut pricken
   */
  draw() {
    push();
    // Flytta origin till cirkelns centrum
    translate(this.x, this.y);

    // Rita bilden centrerad inuti cirkeln
    imageMode(CENTER);
    image(this.image, 0, 0, this.size, this.size);

    pop();
  }
}
