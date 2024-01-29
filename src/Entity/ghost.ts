/// <reference path="./entity.ts" />

class Ghost extends Entity {
  private speed: number;

  constructor(size: number, x: number, y: number) {
    super(ghostImg, size, x, y);
    this.speed = 1;
  }
 
  /***
   * Spöket rör sig mot baby
   */
  private move(baby: Baby) {
    // angle in radians
    let angle = Math.atan2(baby.y - this.y, baby.x - this.x);
    this.x += cos(angle) * this.speed;
    this.y += sin(angle) * this.speed;
  }

  public update(baby: Baby) {
  this.move(baby);
  }
}

