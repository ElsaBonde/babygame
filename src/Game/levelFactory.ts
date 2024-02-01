class LevelFactory {
  private levelImage: p5.Image;
  private gridLevelsInstance: GridLevels;

  constructor() {
    this.levelImage = new p5.Image(1000, 600);
    this.gridLevelsInstance = new GridLevels();
  }

  public generateLevel(levelNumber: number, previousScore: number = 0): Level {
    const entities: Entity[] = [];
    let baby: Baby;
    const blockSize: number = 40;
    let selectedLevelGrid: number[][] | undefined;
    let levelImage: p5.Image;
    let colorWall: string;

    selectedLevelGrid = this.gridLevelsInstance.getGridForLevel(levelNumber);

    /***
     * Bestämmer vilken nivå som ska ritas ut och vilken färg väggarna ska ha + vilken bakgrundsbild som ska visas
     */
    if (selectedLevelGrid) {
      //skapar en array för spöken så man kan ha mer än 1 på spelplanen
      const ghosts: Ghost[] = [];

      //bestämmer vilken nivå som ska ritas ut och vilken färg väggarna ska ha + vilken bakgrundbild som ska visas
      switch (levelNumber) {
        case 1:
          levelImage = levelOne;
          colorWall = "#1E77A4";
          break;
        case 2:
          levelImage = levelTwo;
          colorWall = "#7851A9";
          break;
        case 3:
          levelImage = levelThree;
          colorWall = "#d08dbd";
          break;
        case 4:
          levelImage = levelFour;
          colorWall = "#841810";
          break;
        case 5:
          levelImage = levelFive;
          colorWall = "#53185d";
          break;
        case 6:
          levelImage = levelSix;
          colorWall = "#357222";
          break;
        case 7:
          levelImage = levelSeven;
          colorWall = "#1C2566";
          break;
        case 8:
          levelImage = levelEight;
          colorWall = "#b4436c";
          break;
          default:
            levelImage = levelOne;
            colorWall = "#1E77A4";
            break;
      }
      /***
       * Ritar ut alla entiteter på rätt plats i nivåerna
       */
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
              new Door(
                { doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen },
                doorSize,
                x * blockSize + offset,
                y * blockSize + offset
              )
            );
          }
          if (selectedLevelGrid[y][x] === 13) {
            const beerSize = 0.95 * blockSize;
            const offset = 0.025 * blockSize;
            entities.push(
              new Beer(beerSize, x * blockSize + offset, y * blockSize + offset)
            );
          }
          if (selectedLevelGrid[y][x] === 14) {
            const formulaSize = 0.95 * blockSize;
            const offset = 0.025 * blockSize;
            entities.push(
              new Formula(
                formulaSize,
                x * blockSize + offset,
                y * blockSize + offset
              )
            );
          }
          if (selectedLevelGrid[y][x] === 15) {
            const babySize = 0.8 * blockSize;
            const offset = 0.1 * blockSize;
            baby = new Baby(
              babySize,
              x * blockSize + offset,
              y * blockSize + offset
            );
          }
          if (selectedLevelGrid[y][x] === 16) {
            const clockSize = 0.8 * blockSize;
            const offset = 0.1 * blockSize;
            entities.push(
              new Clock(
                clockSize,
                x * blockSize + offset,
                y * blockSize + offset
              )
            );
          }
          if (selectedLevelGrid[y][x] === 17) {
            const doorSize = blockSize * 1.2;
            entities.push(
              new Door(
                { doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen },
                doorSize,
                x * blockSize,
                y * blockSize
              )
            );
          }
          if (selectedLevelGrid[y][x] === 18) {
            const ghostSize = 0.8 * blockSize;
            const offset = 0.1 * blockSize;
            const newGhost = new Ghost(
              ghostSize,
              x * blockSize + offset,
              y * blockSize + offset
            );
            ghosts.push(newGhost);
          }
        }
      }

      return new Level(
        entities,
        baby!,
        ghosts,
        music,
        previousScore,
        levelImage
      );
    }  else {
      //kommer aldrig hända
      console.log("Level does not exit");
      return new Level(entities, baby!, [], music, previousScore, levelOne);
    }
  }

  public getLevelImage(): p5.Image {
    return this.levelImage;
  }
}
