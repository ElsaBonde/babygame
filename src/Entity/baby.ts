/// <reference path="./entity.ts" />

type Controls = {
  up: number;
  left: number;
  down: number;
  right: number;
};

class Baby extends Entity {
  private controls: Controls;
  public images: {
    up: p5.Image;
    left: p5.Image;
    down: p5.Image;
    right: p5.Image;
  };
  private speed: number
  private normalSpeed: number = 2; // skapar variabel med default värde på 2 för bebisen snabbhet i rörelse

  constructor(size: number, x: number, y: number) {
    super(playerImages.up, size, x, y);
    this.controls = {
      up: UP_ARROW,
      left: LEFT_ARROW,
      down: DOWN_ARROW,
      right: RIGHT_ARROW,
    };
    this.images = {
      up: playerImages.up,
      left: playerImages.left,
      down: playerImages.down,
      right: playerImages.right,
    };
    this.speed = 2; // skapar variabel med default värde på 2 för bebisen snabbhet i rörelse
  }

  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }

  /***
   * Får bebisen att röra sig speeds värde i px för varje tryck med piltangenterna
   */

  private move(walls: Wall[]) {
    let potentialX = this.x;
    let potentialY = this.y;

    if (keyIsDown(this.controls.up)) {
      potentialY -= this.speed;
      this.image = this.images.up;
      this.yCollideAndMove(potentialY, walls);
    }
    if (keyIsDown(this.controls.down)) {
      potentialY += this.speed;
      this.image = this.images.down;
      this.yCollideAndMove(potentialY, walls);
    }
    if (keyIsDown(this.controls.right)) {
      potentialX += this.speed;
      this.image = this.images.right;
      this.xCollideAndMove(potentialX, walls);
    }
    if (keyIsDown(this.controls.left)) {
      potentialX -= this.speed;
      this.image = this.images.left;
      this.xCollideAndMove(potentialX, walls);
    }

    if (!this.wouldCollideWithWalls(potentialX, potentialY, walls)) {
      this.x = potentialX;
      this.y = potentialY;
    }
  }

  //hämtar if-sats som används för att kontrollera + promenera med baby i y-led
  private yCollideAndMove(potentialY: number, walls: Wall[]) {
    if (!this.wouldCollideWithWalls(this.x, potentialY, walls)) {
      this.y = potentialY;
    }
  }

  //hämtar if-sats som används för att kontrollera + promenera med baby i x-led
  private xCollideAndMove(potentialX: number, walls: Wall[]) {
    if (!this.wouldCollideWithWalls(potentialX, this.y, walls)) {
      this.x = potentialX;
    }
  }

  private wouldCollideWithWalls(
    potentialX: number,
    potentialY: number,
    walls: Wall[]
  ) {
    for (const wall of walls) {
      if (this.wouldOverlap(potentialX, potentialY, this.size, wall)) {
        return true;
      }
    }
    return false;
  }

  private wouldOverlap(x1: number, y1: number, size1: number, e2: Entity) {
    return (
      x1 < e2.x + e2.size &&
      x1 + size1 > e2.x &&
      y1 < e2.y + e2.size &&
      y1 + size1 > e2.y
    );
  }

  //måste vara public för att kunna nås av level
  public goSlow() {
    //sätter bebisens speed till hälften av default
    this.speed = 1;
    //efter 4 sekunder får bebisen tillbaka sin normala speed igen
    setTimeout(() => {
      this.speed = this.normalSpeed;
    }, 4000);
   }

  update(walls: Wall[]) {

    this.move(walls);
  }
}
