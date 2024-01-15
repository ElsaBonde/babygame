class Game {
  private currentPage: "start" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  private startPage: StartPage;
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

  public changePage() {}

  draw() {
    if (this.currentPage === "start") {
      this.startPage.draw();
    } else if (this.currentPage === "level") {
      this.level.draw();
    } else if (this.currentPage === "end") {
      this.endOfGame.draw();
    }
  }
  update() {}
}
