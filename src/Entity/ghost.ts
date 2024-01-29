/// <reference path="./entity.ts" />

class Ghost extends Entity {
  private speed: number;

  constructor(size: number, x: number, y: number) {
    super(ghostImg, size, x, y);
    this.speed = 1;
  }
 
  private move(baby: Baby) {
    this.x -= 1
  }

  public update(baby: Baby) {
  this.move(baby);
  }
}
