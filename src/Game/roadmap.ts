class Roadmap {
  private iconLevels: number;

  constructor() {
    this.iconLevels = 1;
  }

  public handleLevelSelection() {
    switch (key) {
      case "1":
        this.selectLevel(1);
        break;
      case "2":
        this.selectLevel(2);
        break;
      case "3":
        this.selectLevel(3);
        break;
      case "4":
        this.selectLevel(4);
        break;
      case "5":
        this.selectLevel(5);
        break;
      case "6":
        this.selectLevel(6);
        break;
      case "7":
        this.selectLevel(7);
        break;
    }
  }
  public selectLevel(levelNumber: number) {
    game.startLevel(levelNumber);
  }

  draw() {
    push();
    background(roadmapImg);
    pop();
    image(placeHolderLevel1, 100, 200, 150, 100);
    image(placeHolderLevel2, 300, 200, 150, 100);
    image(placeHolderLevel3, 500, 200, 150, 100);
    image(placeHolderLevel4, 700, 200, 150, 100);
    image(placeHolderLevel5, 100, 350, 150, 100);
    image(placeHolderLevel6, 300, 350, 150, 100);
    image(placeHolderLevel7, 500, 350, 150, 100);
    image(placeHolderLevel1, 700, 350, 150, 100);
  }
}
