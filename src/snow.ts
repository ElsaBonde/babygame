class Snow {
  private snow: Snowflake[];

  constructor() {
    this.snow = [];
  }

  public update() {
    this.snow.push(new Snowflake());
    this.updateSnow();
  }

  private updateSnow() {
    for (const flake of this.snow) {
      flake.update();
      if (flake.positionY > height) {
        const index = this.snow.indexOf(flake);
        this.snow.splice(index, 1);
      }
    }
  }

  public draw() {
    for (const flake of this.snow) {
      flake.draw();
    }
  }
}
