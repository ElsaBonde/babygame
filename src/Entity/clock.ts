/// <reference path="./entity.ts" />

class Clock extends Entity {
  constructor(size: number, x: number, y: number) {
    super(clockImg, size, x, y);
  }
  // freezeTime(time: Time) {}
  // draw() {}
}
