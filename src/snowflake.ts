class Snowflake {
  // Properties
  private positionX: number;
  public positionY: number;
  private size: number;
  private velocityY: number;

  // Constructor
  constructor() {
    this.positionY = -10;
    this.positionX = random(0, width);
    this.size = random(1, 6);
    this.velocityY = random(0.3, 0.6) * this.size;
  }
  // Methods
  public update() {
    this.positionY += this.velocityY;
  }

  public draw() {
    push();
    noStroke();
    fill(255);
    circle(this.positionX, this.positionY, this.size);
    pop();
  }
}
