class LevelFactory {
  private levelImage: p5.Image;
  private gridLevelsInstance: GridLevels

  constructor() {
    this.levelImage = new p5.Image(1000, 600);
    this.gridLevelsInstance = new GridLevels();
  }

  public generateLevel(levelNumber: number, previousScore: number = 0): Level{
    const entities: Entity[] = [];
    let baby: Baby;
    let ghost: Ghost;
    const blockSize: number = 40;
    let selectedLevelGrid: number[][] | undefined;
    let levelImage: p5.Image;
    let colorWall: string;

    selectedLevelGrid = this.gridLevelsInstance.getGridForLevel(levelNumber);

    if (selectedLevelGrid) {
      //bestämmer vilken nivå som ska ritas ut och vilken färg väggarna ska ha + vilken bakgrundbild som ska visas
    if (levelNumber === 1) {
      levelImage = levelOne;
      colorWall = "#1E77A4";
    } else if (levelNumber === 2) {
      levelImage = levelTwo;
      colorWall = "#7851A9";
    } else if (levelNumber === 3) {
      levelImage = levelThree;
      colorWall = "#c47eb1";
    } else if (levelNumber === 4) {
      levelImage = levelFour;
      colorWall = "#900002";
    } else if (levelNumber === 5) {
      levelImage = levelFive;
      colorWall = "#53185d";
    } else if (levelNumber === 6) {
      levelImage = levelSix;
      colorWall = "#10740b";
    } else {
      levelImage = levelSeven;
      colorWall = "#1E77A4";
    }

    //ritar ut alla entiteter på rätt plats i nivåerna
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
          baby = new Baby(babySize, x * blockSize + offset, y * blockSize + offset)
        }
        if (selectedLevelGrid[y][x] === 16) {
          const clockSize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Clock(clockSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (selectedLevelGrid[y][x] === 17) {
          const doorSize = blockSize * 1.2;
          entities.push(
            new Door({doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen}, doorSize, x * blockSize, y * blockSize)
          );
        }
        if (selectedLevelGrid[y][x] === 18) {
          const ghostSize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          ghost = new Ghost(ghostSize, x * blockSize + offset, y * blockSize + offset);
        }
      }
    }
    
    return new Level(entities, baby!, ghost!, music, previousScore, levelImage);
    } /*varför behöver detta ens finnas?*/ else {
      console.log("Level does not exit");
    }
  }

  public getLevelImage(): p5.Image {
    return this.levelImage;
  }
}
