class Game {
  private isCircleVisible: boolean;
  private snow: Snow;

  constructor() {
    this.isCircleVisible = false;
    this.snow = new Snow();
  }

  public update() {
    this.isCircleVisible = mouseIsPressed;
    this.snow.update();
  }

  public draw() {
    background("black");
    this.drawText();
    this.snow.draw();

    if (this.isCircleVisible) {
      this.drawCircle();
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
