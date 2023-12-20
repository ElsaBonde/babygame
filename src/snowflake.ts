class Snowflake {
  // Properties
  public position: p5.Vector;
  private size: number;
  private velocity: p5.Vector;

  // Constructor
  constructor() {
    this.position = createVector(random(0, width), 10);
    this.size = random(1, 6);
    this.velocity = createVector(
      random(-0.5, 0.5),
      random(0.3, 0.6) * this.size
    );
  }
  // Methods
  public update() {
    // this.position.add(this.velocity);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.moveAwayFromMouse();
  }

  private moveAwayFromMouse() {
    const mouseVector = createVector(mouseX, mouseY);
    const dist = mouseVector.dist(this.position);
    if (dist < 100) {
      if (this.position.x > mouseX) {
        this.position.x += this.velocity.y;
      } else {
        this.position.x -= this.velocity.y;
      }
    }
  }

  public draw() {
    push();
    noStroke();
    fill(255);
    circle(this.position.x, this.position.y, this.size);
    pop();
  }
}
