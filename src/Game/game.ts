class Game {
  // STATE - TILLSTÅND - ATTRIBUT - INSTANSVARIABLER
  private currentPage: "start" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  public startPage: StartPage;
  private endOfGame: EndOfGame;
  private totalScore: number;

  constructor() {
    this.currentPage = "start";
    this.totalScore = 0;
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1);
    this.startPage = new StartPage();
    this.endOfGame = new EndOfGame();
  }

  public getCurrentPage(): "start" | "level" | "end" {
    return this.currentPage;
  }

  public changePage() {
    this.currentPage = "level";
  }

  update(walls: Wall[], beers: Beer[], formulas: Formula[], clocks: Clock[]) {
    // if (paused) return;
    // 60 frames/sekund
    // 1000 / 60 = deltaTime
    // deltaTime ≈ 16.6666666
    // this.clock -= deltaTime;

    switch (this.currentPage) {
      case "start":
        this.startPage.startButton();
        this.startPage.keyPressedStart();
        break;
      case "level":
        this.level.update(walls, beers, formulas, clocks);
        break;
      case "end":
        // this.endOfGame.update();
        break;
    }
  }

  draw() {
    // background("white");
    switch (this.currentPage) {
      case "start":
        this.startPage.draw();
        break;
      case "level":
        this.level.draw();
        break;
      case "end":
        this.endOfGame.draw();
        break;
    }
  }
}
