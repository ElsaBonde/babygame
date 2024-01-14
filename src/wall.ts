class Wall extends Entity {
    constructor(image: p5.Image, size: number, x: number, y: number) {
        super(image, size, x, y);
        this.image = loadImage('rosafyrkant.jpg')
        this.size = 40
        this.x = 0
        this.y = 40

       
    }

    draw() {
    }
}