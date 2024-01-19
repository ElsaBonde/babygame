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
    this.numbersGridLevel1 = [
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
    (this.levelOne = new p5.Image(1000, 600)), levelOne;
    // this.backgroundLevel2 = new p5.Image();
    this.colorLevel1 = color("#B20076");
    // this.colorLevel2 = new p5.color();
  }

  public generateLevel(levelNumber: number): Level {
    // här kommer vi behöva lägga en if-sats som kollar vilken level som ska genereras
    const entities: Entity[] = [];
    const blockSize: number = 40;

    for (let y = 0; y < this.numbersGridLevel1.length; y++) {
      for (let x = 0; x < this.numbersGridLevel1[y].length; x++) {
        if (this.numbersGridLevel1[y][x] === 10) {
          entities.push(
            new Wall("black", blockSize, x * blockSize, y * blockSize)
          );
        }

        if (this.numbersGridLevel1[y][x] === 15) {
          const babySize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Baby(babySize, x * blockSize + offset, y * blockSize + offset)
          );
        }
      }
    }
    // 1. SKAPA DELARNA (entitierna)
    // 2. SKAPA CYKEL (level)

    // ANROPA KONSTUKTORN: SKICKA ETT VÄRDE
    return new Level(entities);
  }
}

// Const kollision = babyY > this.y && babyY < this.y + height
