/// <reference path="./entity.ts" />

class BlackWall extends Entity {
  constructor(image: any, size: number, x: number, y: number) {
    super(image, size, x, y);
  }

  draw() {
    pop();
    fill("black");
    rect(this.x, this.y, 40, 40);
    // stroke("white") // bara för att se så det stämmer
    push();
  }
}
