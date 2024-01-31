class Star {
  x: number;
  y: number;
  size: number;
  maxBrightness: number;
  currentBrightness: number;
  isWarm: boolean;

  constructor(
    x: number,
    y: number,
    size: number,
    maxBrightness: number = 200,
    isWarm: boolean = false
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxBrightness = maxBrightness;
    this.currentBrightness = random(0, maxBrightness);
    this.isWarm = isWarm;
  }

  update() {
    let brightnessChange;
    if (this.isWarm) {
      brightnessChange = random(-30, 30);
    } else {
      brightnessChange = random(-30, 30);
    }
    this.currentBrightness += brightnessChange;
    this.currentBrightness = constrain(
      this.currentBrightness,
      0,
      this.maxBrightness
    );
    /* if (this.isWarm) {
      let brightnessChange = random(-20, 20);
      this.currentBrightness += brightnessChange;

      if (
        this.currentBrightness > this.maxBrightness - 10 ||
        this.currentBrightness < 10
      ) {
        this.currentBrightness = constrain(
          this.currentBrightness,
          0,
          this.maxBrightness
        );
      }
    } else {
      this.currentBrightness = random(0, this.maxBrightness);
    }
    */
  }

  draw() {
    push();
    if (this.isWarm) {
      let warmColor = color(255, 204, 0, this.currentBrightness);
      fill(warmColor);
    } else {
      fill(255, 255, 255, this.currentBrightness);
    }
    noStroke();
    circle(this.x, this.y, this.size);
    pop();
  }
}
