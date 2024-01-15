class LevelFactory {

    // private numbersGridLevel1: number[][];
    // private numbersGridLevel2: number[][];
    // private backgroundLevel1: p5.Image;
    // private backgroundLevel2: p5.Image;
    // private colorLevel1: p5.Color;
    // private colorLevel2: p5.Color;

    constructor() {
        
        // this.numbersGridLevel1 = [];
        // this.numbersGridLevel2 = [];
        // this.backgroundLevel1 = new p5.Image();
        // this.backgroundLevel2 = new p5.Image();
        // this.colorLevel1 = new p5.color();
        // this.colorLevel2 = new p5.color();
    }

    public generateLevel(levelNumber: number) { // här kommer vi behöva lägga en if-sats som kollar vilken level som ska genereras
        return new Level();
        
    }

}