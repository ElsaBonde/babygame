/// <reference path="./entity.ts" />

class Beer extends Entity {
  constructor(size: number, x: number, y: number) {
    super(beerImg, size, x, y);
  }
}
