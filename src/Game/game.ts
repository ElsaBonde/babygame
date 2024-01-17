class Game {
  public currentPage: "start" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  public startPage: StartPage;
  private endOfGame: EndOfGame;
  private totalScore: number;
  public player: Baby;
  public camera: Camera;

  constructor() {
    this.currentPage = "start";
    this.totalScore = 0;
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1);
    this.startPage = new StartPage();
    this.endOfGame = new EndOfGame();
    this.camera = new Camera();

    //creates the player/baby
    this.player = new Baby(playerImages, 30, 950, 550, {
      up: UP_ARROW,
      left: LEFT_ARROW,
      down: DOWN_ARROW,
      right: RIGHT_ARROW,
    });
  }

  public getCurrentPage(): "start"| "level" | "end" {
    return this.currentPage;
  }

  public changePage() {
   this.currentPage = "level";
  }

  draw() {
    this.player.draw();
    if (this.currentPage === "start") {
      this.startPage.draw();
      this.startPage.startButton();
      this.startPage.keyPressedStart();
    } else if (this.currentPage === "level") {
      this.level.draw();
    } else if (this.currentPage === "end") {
      this.endOfGame.draw();
    }
    translate(-this.camera.x, -this.camera.y);
  }
  update() {
    this.player.update();
    this.camera.follow(this.player);
  }
}
