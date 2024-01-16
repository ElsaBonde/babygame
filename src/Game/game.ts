class Game {
  private currentPage: "start" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  private startPage: StartPage;
  private endOfGame: EndOfGame;
  private totalScore: number;
  public player: Baby;

  constructor() {
    this.currentPage = "start";
    this.totalScore = 0;
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1);
    this.startPage = new StartPage();
    this.endOfGame = new EndOfGame();

    //creates the player/baby
    this.player = new Baby(playerImages, 30, 950, 550, {
      up: UP_ARROW,
      left: LEFT_ARROW,
      down: DOWN_ARROW,
      right: RIGHT_ARROW,
    });
  }

  public changePage() {}

  draw() {
    this.player.draw();
    if (this.currentPage === "start") {
      this.startPage.draw();
    } else if (this.currentPage === "level") {
      this.level.draw();
    } else if (this.currentPage === "end") {
      this.endOfGame.draw();
    }
  }
  update() {
    this.player.update();
  }
}
