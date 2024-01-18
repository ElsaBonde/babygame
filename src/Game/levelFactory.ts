class LevelFactory {
  // private numbersGridLevel1: number[][];
  // private numbersGridLevel2: number[][];
  public levelOne: p5.Image;
  // private backgroundLevel2: p5.Image;
  // private colorLevel1: p5.Color;
  // private colorLevel2: p5.Color;

  constructor() {
    // this.numbersGridLevel1 = [];
    // this.numbersGridLevel2 = [];
    this.levelOne = new p5.Image(1000, 600);
    // this.backgroundLevel2 = new p5.Image();
    //  this.colorLevel1 = new p5.color();
    // this.colorLevel2 = new p5.color();
  }

  draw() {
    background(levelOne);
  }

  public generateLevel(levelNumber: number) {
    // här kommer vi behöva lägga en if-sats som kollar vilken level som ska genereras
    return new Level();
  }
}
