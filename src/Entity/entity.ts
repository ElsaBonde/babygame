class Entity {
  public image: p5.Image;
  public size: number;
  public x: number;
  public y: number;

  constructor(image: p5.Image, size: number, x: number, y: number) {
    this.image = image;
    this.size = size;
    this.x = x;
    this.y = y;
  }

  public remove() {
    this.x = -100;
    this.y = -100;
  }

  public draw() {
    push();
    image(this.image, this.x, this.y, this.size, this.size);
    pop();
  }
}
