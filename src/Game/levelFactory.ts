/* FACIT FÖR GRIDSYSTEM:
10 = svart vägg
11 = block / vägg
12= in/ utgång
13 = öl
14 = välling
15 = bebis
16 = klocka
20 = tom ruta */

class LevelFactory {
  public numbersGridLevel1: number[][];
  public levelOne: p5.Image;
  private colorLevel1: p5.Color;
  
  //private numbersGridLevel2: number[][];
  //private backgroundLevel2: p5.Image;

  constructor() {
    // prettier-ignore
    this.numbersGridLevel1 = [ //level 1
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 10,],
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15,],
    ];
    
    // this.numbersGridLevel2 = [];
    this.levelOne = new p5.Image(1000, 600), levelOne;
    // this.backgroundLevel2 = new p5.Image();
    this.colorLevel1 = color("#B20076");
    // this.colorLevel2 = new p5.color();
  }

  public generateLevel(levelNumber: number): Level {
    // här kommer vi behöva lägga en if-sats som kollar vilken level som ska genereras
    const entities: Entity[] = [];
    const blockSize: number = 40;

    for (let x = 0; x < this.numbersGridLevel1.length; x++) {
      for (let y = 0; y < this.numbersGridLevel1[x].length; y++) {
        
        if (this.numbersGridLevel1[x][y] === 20) {
          fill("0, 0, 0, 127"); //transparent färg
          /*   noStroke() */
          square(y * blockSize, x * blockSize, blockSize);
        }

        if (this.numbersGridLevel1[x][y] === 10) {
          const blackWall = new BlackWall(null,blockSize, y * blockSize, x * blockSize );
          entities.push(blackWall);
        }

        if (this.numbersGridLevel1[x][y] === 15) {
          const baby = new Baby(
            {
              up: playerImages.up,
              left: playerImages.left,
              down: playerImages.down,
              right: playerImages.right,
            },
            40,
            x * blockSize,
            y * blockSize,
            {
              up: UP_ARROW,
              left: LEFT_ARROW,
              down: DOWN_ARROW,
              right: RIGHT_ARROW,
            }
          );
        
          entities.push(baby); // Hamnar i LvlFactory, varför
        }
      }
    }
    // 1. SKAPA DELARNA (entitierna)
    // 2. SKAPA CYKEL (level)

    // ANROPA KONSTUKTORN: SKICKA ETT VÄRDE
    return new Level(entities);
  }
}
