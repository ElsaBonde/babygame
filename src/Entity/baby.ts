type Controls = {
    up: number;
    left: number;
    down: number;
    right: number;
  };

class Baby extends Entity {

    private controls: Controls;

    constructor(image: p5.Image, size: number, x: number, y: number, controls: Controls) {
        super(image, size, x, y);
        this.controls = controls;
    }
    private getX() {

    }
    private getY() {

    }
    private move() {

    }
    private limitToScreen() {

    }
    private checkCollision() {

    }

    update() {
    }

    draw() {
    }
}