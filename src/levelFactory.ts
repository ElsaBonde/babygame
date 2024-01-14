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

    draw() {
        const entities = [];
 
const numbers = [
  [0,0,0,0,0,0,2,0,0,0],
  [0,2,0,2,0,0,2,2,0,0],
  [0,2,0,2,0,0,0,0,0,0],
  [0,0,2,2,0,0,0,0,0,0],
  [0,2,0,0,0,0,0,0,0,0],
  [9,2,0,0,0,0,0,0,0,0],
]
 
// ett block är 40px
const blockSize = 40;
 
for (let x = 0; x < numbers.length; x++) {
  for (let y = 0; y < numbers[x].length; y++) {
    if (numbers[x][y] === 2) {
      // Skapa en vägg
      entities.push(new Wall(, 40, x * blockSize, y * blockSize));
    }
    if (numbers[x][y] === 9) {
      // Skapa en bebis
      entities.push(new Baby(x * blockSize, y * blockSize));
    }
    if (numbers[x][y] === 1) {
      // Skapa en vällingflaska
      entities.push(new Vällingflaska(x * blockSize, y * blockSize));
    }
  }
}
    }

}