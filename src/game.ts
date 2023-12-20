class Game {
  private isCircleVisible: boolean;
  private snow: Snowflake[];

  constructor() {
    this.isCircleVisible = false;
    this.snow = [];
  }

  public update() {
    this.isCircleVisible = mouseIsPressed;
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
    background("black");
    this.drawText();
    this.drawSnow();

    if (this.isCircleVisible) {
      this.drawCircle();
    }
  }

  private drawSnow() {
    for (const flake of this.snow) {
      flake.draw();
    }
  }

  private drawText() {
    push();
    fill("white");
    textSize(width * 0.1);
    textStyle("bold");
    textAlign("center");
    text("Click & Drag", width * 0.5, height * 0.5);
    pop();
  }

  public drawCircle() {
    push();
    fill(0, 255, 0, 200);
    stroke("white");
    strokeWeight(width * 0.01);
    circle(mouseX, mouseY, width * 0.2);
    pop();
  }
}
