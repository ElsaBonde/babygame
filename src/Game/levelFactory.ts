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
  //private numbersGridLevel2: number[][];
  public levelOne: p5.Image;
  //private backgroundLevel2: p5.Image;
  private colorLevel1: p5.Color;
  public level: Level;

  constructor(
    numbersGridLevel1: number[][],
    levelOne: p5.Image,
    colorLevel1: p5.Color
  ) {
    this.numbersGridLevel1 = [ //level 1
      [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 10,
      ],
      [
        10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 15,
      ],
      [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10,
      ],
    ];
    // this.numbersGridLevel2 = [];
    this.levelOne = new p5.Image(1000, 600);
    // this.backgroundLevel2 = new p5.Image();
    this.colorLevel1 = color("#B20076");
    // this.colorLevel2 = new p5.color();
    this.level = new Level(this);
  }

  drawGamePlan() {
    console.log("Drawing game plan");
    const blockSize = 40;

    for (let x = 0; x < this.numbersGridLevel1.length; x++) {
      for (let y = 0; y < this.numbersGridLevel1[x].length; y++) {
        
        if (this.numbersGridLevel1[x][y] === 20) {
          fill("0, 0, 0, 127"); //transparent färg
          /*   noStroke() */
          square(y * blockSize, x * blockSize, blockSize);
        }

        if (this.numbersGridLevel1[x][y] === 10) {
          const blackWall = new BlackWall(image, 100, x * 100, y * 100);
          //this.level.entities.push(blackWall);
          console.log("sally");
        }

        if (this.numbersGridLevel1[x][y] === 15) {
          const baby = new Baby(
            {
              up: imageBabyUp,
              left: imageBabyLeft,
              down: imageBabyDown,
              right: imageBabyRight,
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

          this.level.entities.push(baby);
        }
      }
    }
  }

  draw() {
    console.log("ELIN");
    this.drawGamePlan();
  }

  public generateLevel(levelNumber: number) {
    // här kommer vi behöva lägga en if-sats som kollar vilken level som ska genereras
    if (levelNumber === 1) {
      const level = new Level(this);
      level.draw();
      return level;
    } else if (levelNumber === 2) {
      return new Level(this);
    }
  }
}
