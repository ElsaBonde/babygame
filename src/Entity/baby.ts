type Controls = {
    up: number;
    left: number;
    down: number;
    right: number;
  };

class Baby extends Entity {

    private controls: Controls;

    constructor() {
        super();
        this.controls = new Controls();
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