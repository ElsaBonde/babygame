/// <reference path="./entity.ts" />

type Controls = {
  up: number;
  left: number;
  down: number;
  right: number;
};

class Baby extends Entity {
  private controls: Controls;
  private images: {
    up: p5.Image;
    left: p5.Image;
    down: p5.Image;
    right: p5.Image;
  };

  constructor (
    images: {
      up: p5.Image;
      left: p5.Image;
      down: p5.Image;
      right: p5.Image;
    },

    size: number,
    x: number,
    y: number,
    controls: Controls
  ) {
    super(images.left, size, x, y);
    this.controls = controls;
    this.images = images;
    
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
      this.image = this.images.up;
    }
   if (keyIsDown(this.controls.down)) {
      this.y += 2;
      this.image = this.images.down
    }
    if (keyIsDown(this.controls.right)) {
      this.x += 2;
      this.image = this.images.right;
    }
    if (keyIsDown(this.controls.left)) {
      this.x -= 2;
      this.image = this.images.left;
    }
  }

  private limitToScreen() {
    // player size delat på 2 = halfSize
    const halfSize = this.size / 2;

    if (this.x - halfSize < 0) {
      this.x = halfSize;
    }
    if (this.y - halfSize < 0) {
      this.y = halfSize;
    }
    if (this.x + halfSize > width) {
      this.x = width - halfSize;
    }
    if (this.y + halfSize > height) {
      this.y = height - halfSize;
    }
  }

  private checkCollision() {}

  update() {
    this.move();
    this.limitToScreen();
  }

  /***
   * Målar ut bebisen - FELAKTIGT!!!!!
   */
  draw() {
    /* push();
    // Flytta origin till cirkelns centrum
    translate(this.x, this.y);

    // Rita bilden centrerad inuti cirkeln
    imageMode(CENTER);
    image(this.image, 0, 0, this.size);

    pop(); */
  }
}
