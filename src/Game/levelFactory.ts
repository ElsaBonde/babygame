/* FACIT FÖR GRIDSYSTEM:
10 = svart vägg
11 = block / vägg
12= ingång
13 = öl
14 = välling (formula)
15 = bebis
16 = klocka
17 = utgång
20 = tom ruta */

class LevelFactory {
  public numbersGridLevel1: number[][];
  public levelImage: p5.Image;
  public numbersGridLevel2: number[][];

  constructor() {
    // prettier-ignore
    this.numbersGridLevel1 = [
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      [10, 14, 14, 20, 13, 20, 20, 14, 20, 20, 20, 20, 20, 20, 11, 14, 11, 11, 20, 14, 20, 20, 20, 20, 10],
      [10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 11, 14, 20, 20, 20, 11, 11, 11, 11, 20, 20, 14, 10],
      [10, 20, 20, 20, 20, 20, 20, 11, 20, 20, 20, 20, 11, 20, 11, 20, 20, 20, 20, 14, 11, 20, 11, 20, 10],
      [10, 20, 11, 11, 11, 20, 20, 11, 20, 11, 11, 11, 11, 11, 11, 20, 11, 11, 11, 14, 11, 20, 11, 20, 10],
      [10, 14, 11, 20, 11, 20, 14, 11, 20, 11, 20, 20, 20, 20, 11, 20, 20, 13, 11, 11, 11, 20, 11, 20, 10],
      [10, 20, 11, 14, 11, 20, 20, 11, 20, 11, 20, 14, 11, 20, 11, 20, 20, 20, 11, 20, 20, 13, 11, 20, 10],
      [10, 20, 11, 20, 11, 20, 20, 11, 20, 11, 11, 11, 11, 20, 11, 14, 16, 20, 11, 20, 11, 11, 11, 11, 10],
      [10, 20, 11, 20, 11, 20, 20, 11, 20, 20, 20, 20, 20, 14, 11, 11, 11, 20, 11, 20, 11, 20, 20, 20, 17], 
      [10, 20, 11, 20, 11, 11, 20, 11, 11, 11, 11, 11, 11, 11, 11, 20, 11, 13, 11, 20, 11, 20, 11, 14, 10],
      [10, 20, 11, 20, 20, 20, 20, 20, 20, 20, 11, 20, 11, 20, 11, 20, 11, 20, 11, 20, 11, 14, 11, 20, 10],
      [10, 20, 11, 20, 11, 20, 14, 13, 11, 20, 11, 20, 11, 20, 11, 20, 20, 20, 20, 20, 11, 13, 11, 20, 10],
      [10, 20, 11, 20, 11, 11, 11, 11, 11, 20, 20, 20, 20, 20, 20, 20, 11, 20, 11, 20, 11, 11, 11, 20, 10],
      [12, 15, 11, 16, 11, 20, 14, 20, 20, 20, 11, 11, 13, 11, 20, 20, 11, 20, 14, 20, 20, 20, 20, 20, 10],
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
];

    // prettier-ignore
    this.numbersGridLevel2 = [
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 20, 11, 16, 14, 11, 20, 20, 20, 11, 20, 20, 20, 20, 20, 11, 11, 11, 11, 20, 20, 14, 11, 20, 10],
    [10, 14, 11, 20, 20, 20, 14, 20, 20, 20, 20, 11, 20, 20, 11, 11, 20, 14, 11, 20, 20, 20, 11, 20, 10],
    [10, 20, 11, 13, 11, 11, 11, 11, 11, 20, 11, 11, 11, 20, 14, 11, 20, 20, 20, 20, 20, 11, 11, 20, 10],
    [10, 20, 11, 20, 11, 14, 11, 20, 11, 14, 11, 14, 11, 20, 11, 11, 13, 11, 11, 11, 14, 11, 13, 14, 10],
    [10, 20, 20, 20, 11, 14, 11, 20, 11, 11, 11, 20, 11, 20, 20, 11, 20, 20, 20, 11, 20, 11, 20, 11, 10],
    [10, 11, 11, 11, 11, 13, 20, 20, 20, 20, 20, 20, 20, 20, 20, 11, 14, 20, 20, 11, 20, 11, 14, 11, 10],
    [10, 20, 11, 14, 11, 11, 11, 11, 20, 20, 11, 11, 20, 11, 11, 11, 11, 11, 20, 11, 20, 11, 20, 11, 10],
    [10, 14, 11, 20, 11, 20, 13, 20, 20, 20, 20, 11, 20, 20, 20, 11, 20, 20, 20, 11, 14, 11, 20, 20, 17],
    [10, 20, 20, 20, 11, 14, 20, 20, 20, 11, 11, 11, 20, 20, 20, 11, 20, 11, 11, 11, 20, 11, 20, 20, 10],
    [10, 20, 11, 20, 11, 11, 11, 11, 20, 11, 20, 20, 20, 20, 20, 11, 20, 20, 20, 20, 20, 11, 20, 11, 10],
    [10, 20, 11, 20, 20, 20, 20, 20, 20, 11, 20, 20, 11, 20, 13, 20, 20, 20, 11, 11, 20, 11, 20, 11, 10],
    [10, 20, 11, 20, 11, 11, 11, 20, 20, 11, 11, 20, 11, 11, 11, 11, 20, 20, 11, 14, 20, 20, 20, 20, 10],
    [12, 15, 11, 20, 11, 14, 20, 20, 20, 11, 16, 20, 20, 20, 20, 11, 14, 20, 11, 11, 11, 11, 11, 11, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    ];
    this.levelImage = new p5.Image(1000, 600);
  }

  // prettier-ignore
  public generateLevel(levelNumber: number, previousScore: number = 0): Level {
    const entities: Entity[] = [];
    const blockSize: number = 40;
    let selectedLevelGrid: number[][];
    let levelImage: p5.Image;
    let colorWall: string;

    //bestämmer vilken nivå som ska ritas ut
    if (levelNumber === 1) {
      selectedLevelGrid = this.numbersGridLevel1;
      levelImage = levelOne;
      colorWall = "#1E77A4";
    } else {
      selectedLevelGrid = this.numbersGridLevel2;
      levelImage = levelTwo;
      colorWall = "#460A0A";
    }

    for (let y = 0; y < selectedLevelGrid.length; y++) {
      for (let x = 0; x < selectedLevelGrid[y].length; x++) {
        if (selectedLevelGrid[y][x] === 10) {
          entities.push(
            new Wall("black", blockSize, x * blockSize, y * blockSize)
          );
        }
        if (selectedLevelGrid[y][x] === 11) {
          entities.push(
            new Wall(colorWall, blockSize, x * blockSize, y * blockSize)
          );
        }
        if (selectedLevelGrid[y][x] === 12) {
          const doorSize = blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Door({doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen}, doorSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (selectedLevelGrid[y][x]=== 13) {
          const beerSize = 0.9 * blockSize;
          const offset = 0.05 * blockSize;
          entities.push(
            new Beer(beerSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (selectedLevelGrid[y][x] === 14) {
          const formulaSize = 0.7 * blockSize;
          const offset = 0.15 * blockSize;
          entities.push(
            new Formula(formulaSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (selectedLevelGrid[y][x] === 15) {
          const babySize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Baby(babySize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (selectedLevelGrid[y][x] === 16) {
          const clockSize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Clock(clockSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (selectedLevelGrid[y][x]=== 17) {
          const doorSize = blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Door({doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen}, doorSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
      }
      
    }

    return new Level(entities, music, previousScore, levelImage);
  }

  getLevelImage(): p5.Image {
    return this.levelImage;
  }
}
