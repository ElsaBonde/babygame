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
  public levelOne: p5.Image;
  private colorLevel1: p5.Color;

  public numbersGridLevel2: number[][];
  public levelTwo: p5.Image;
  private colorLevel2: p5.Color;

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
    [12, 20, 11, 20, 11, 14, 20, 20, 20, 11, 16, 20, 20, 20, 20, 11, 14, 20, 11, 11, 11, 11, 11, 11, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    ];
    (this.levelOne = new p5.Image(1000, 600)), levelOne;
    (this.levelTwo = new p5.Image(1000, 600)), levelTwo;
    this.colorLevel1 = color("#B20076");
    this.colorLevel2 = color("#70E000");
  }

  // prettier-ignore
  public generateLevel(levelNumber: number): Level {
    // här kommer vi behöva lägga en if-sats som kollar vilken level som ska genereras
    const entities: Entity[] = [];
    const blockSize: number = 40;

    for (let y = 0; y < this.numbersGridLevel1.length && this.numbersGridLevel2.length; y++) {
      for (let x = 0; x < this.numbersGridLevel1[y].length && this.numbersGridLevel2.length; x++) {
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x] === 10) {
          entities.push(
            new Wall("black", blockSize, x * blockSize, y * blockSize)
          );
        }
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x] === 11) {
          entities.push(
            new Wall("#B20076", blockSize, x * blockSize, y * blockSize)
          );
        }
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x] === 12) {
          const doorSize = blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Door({doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen}, doorSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x] === 13) {
          const beerSize = 0.9 * blockSize;
          const offset = 0.05 * blockSize;
          entities.push(
            new Beer(beerSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (this.numbersGridLevel1[y][x]  && this.numbersGridLevel2[y][x] === 14) {
          const formulaSize = 0.7 * blockSize;
          const offset = 0.15 * blockSize;
          entities.push(
            new Formula(formulaSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x] === 15) {
          const babySize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Baby(babySize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x] === 16) {
          const clockSize = 0.8 * blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Clock(clockSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
        if (this.numbersGridLevel1[y][x] && this.numbersGridLevel2[y][x]=== 17) {
          const doorSize = blockSize;
          const offset = 0.1 * blockSize;
          entities.push(
            new Door({doorClosed: doorImg.doorClosed, doorOpen: doorImg.doorOpen}, doorSize, x * blockSize + offset, y * blockSize + offset)
          );
        }
      }
    }
    // 1. SKAPA DELARNA (entitierna)
    // 2. SKAPA CYKEL (level)

    // ANROPA KONSTUKTORN: SKICKA ETT VÄRDE
    return new Level(entities, music);
  }
}

// Const kollision = babyY > this.y && babyY < this.y + height
