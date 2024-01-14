class LevelFactory extends Game {

    private numbersGridLevel1: number[][];
    private numbersGridLevel2: number[][];
    private backgroundLevel1: p5.Image;
    private backgroundLevel2: p5.Image;
    private colorLevel1: p5.color;
    private colorLevel2: p5.color;

    constructor(currentPage: 'start' | 'level' | 'end', levelFactory: LevelFactory, level: Level, startPage: StartPage, endOfGame: EndOfGame, totalScore: number, numbersGridLevel1: number[][], numbersGridLevel2: number[][], backgroundLevel1: p5.Image, backgroundLevel2: p5.Image, colorLevel1: p5.color, colorLevel2: p5.color) {
        super(currentPage, levelFactory, level, startPage, endOfGame, totalScore);
        this.numbersGridLevel1 = [];
        this.numbersGridLevel2 = [];
        this.backgroundLevel1 = new p5.Image();
        this.backgroundLevel2 = new p5.Image();
        this.colorLevel1 = new p5.color();
        this.colorLevel2 = new p5.color();
    }

    private generateLevel() {
        
        
    }

}