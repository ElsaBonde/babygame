class Star {
  x: number;
  y: number;
  size: number;
  maxBrightness: number;
  currentBrightness: number;

  constructor(x: number, y: number, size: number, maxBrightness: number = 255) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxBrightness = maxBrightness;
    this.currentBrightness = random(0, maxBrightness);
  }

  update() {
    this.currentBrightness = random(0, this.maxBrightness);
  }

  draw() {
    push();
    fill(255, 255, 255, this.currentBrightness);
    noStroke();
    circle(this.x, this.y, this.size);
    pop();
  }
}
