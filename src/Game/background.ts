class Background {
  private stars: Star[];
  private levelImage: p5.Image;

  constructor(levelImage: p5.Image) {
    this.stars = [];
    this.levelImage = levelImage;
    this.createStars(1800);
  }

  private createStars(numStars: number): void {
    this.stars = [];
    for (let i = 0; i < numStars; i++) {
      let star: Star;
      const x = random(width);
      const y = random(height);
      const size = random(1, 3);
      const maxBrightness = random(100, 255);
      const isWarm = random() < 0.5;

      star = new Star(x, y, size, maxBrightness, isWarm);
      this.stars.push(star);
    }
  }

  update(): void {
    for (let star of this.stars) {
      star.update();
    }
  }

  draw(): void {
    image(this.levelImage, 0, 0, width, height);
    for (let star of this.stars) {
      star.draw();
    }
  }
}
