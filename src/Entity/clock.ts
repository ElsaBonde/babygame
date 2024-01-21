/// <reference path="./entity.ts" />

class Clock extends Entity {
  constructor(size: number, x: number, y: number) {
    super(clockImg, size, x, y);
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
  // freezeTime(time: Time) {}
  // draw() {}
}
