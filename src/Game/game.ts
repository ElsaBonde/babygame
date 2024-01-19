class Game {
  public currentPage: "start" | "level" | "end";
  public levelFactory: LevelFactory;
  public level: Level;
  public startPage: StartPage;
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
 
  public getCurrentPage(): "start" | "level" | "end" {
    return this.currentPage;
  }

  public changePage() {
    this.currentPage = "level";
  }

  draw() {
    this.player.draw();

    switch (this.currentPage) {
      case "start":
        this.startPage.draw();
        this.startPage.startButton();
        this.startPage.keyPressedStart();
        break;
      case "level":
        this.level.draw();
        this.level.update();
        break;
      case "end":
        this.endOfGame.draw();
        break;
    }
  }
  update() {
    this.player.update();
  }
}
