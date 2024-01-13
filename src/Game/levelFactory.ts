class LevelFactory extends Game {

    private numbersGridLevel1: number[][];
    private numbersGridLevel2: number[][];
    private backgroundLevel1: p5.Image;
    private backgroundLevel2: p5.Image;
    private colorLevel1: p5.color;
    private colorLevel2: p5.color;

    constructor() {
        super();
        this.numbersGridLevel1 = [];
        this.numbersGridLevel2 = [];
        this.backgroundLevel1 = new p5.Image();
        this.backgroundLevel2 = new p5.Image();
        this.colorLevel1 = new p5.color();
        this.colorLevel2 = new p5.color();
    }

    private generateLevel(number: number): Level {
        let level: Level;
    }

}