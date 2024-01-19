/// <reference path="./entity.ts" />

class Wall extends Entity {
  private color: string;

  constructor(color: string, size: number, x: number, y: number) {
    super(null as any, size, x, y);
    this.color = color;
  }

  draw() {
    push();
    fill(this.color);
    noStroke();
    rect(this.x, this.y, 40, 40);
    pop();
  }
}
