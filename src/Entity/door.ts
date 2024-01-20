/// <reference path="./entity.ts" />

class Door extends Entity {
  constructor(size: number, x: number, y: number) {
    super(doorClosedImg, size, x, y);
  }
  // private openDoor() {}
  // private closeDoor() {}
  // draw() {}
}
