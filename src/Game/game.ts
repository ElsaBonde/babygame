class Game {
  // STATE - TILLSTÅND - ATTRIBUT - INSTANSVARIABLER
  private currentPage: "start" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  public startPage: StartPage;
  private endOfGame: EndOfGame;
  public currentLevelNumber: number;

  constructor() {
    this.currentPage = "start";
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1);
    this.startPage = new StartPage();
    this.endOfGame = new EndOfGame();
    this.currentLevelNumber = 1;
  }

  public nextLevel() {
      if (this.currentLevelNumber < 2) {
        this.currentLevelNumber++;
        this.level = this.levelFactory.generateLevel(this.currentLevelNumber, this.level.getScore());
      } else {
        this.currentPage = "end";
        this.endOfGame.setHighScore(this.level.getScore());
        this.endOfGame.setWin();
      }
  }
  

  public getCurrentPage(): "start" | "level" | "end" {
    return this.currentPage;
  }

  public changePage() {
    this.currentPage = "level";
  }

  public changePageToStartPage() {
    this.currentPage = "start";
    game = new Game();
  }

  update() {
    switch (this.currentPage) {
      case "start":
        this.startPage.startButton();
        this.startPage.keyPressedStart();
        break;
      case "level":
        this.level.update();
        if (this.level.isGameOver()) {
          this.currentPage = "end";
          this.endOfGame.setLose();
          this.endOfGame.setHighScore(this.level.getScore()); //Sätter highscore för endofGame
        }
        break;
      case "end":
        this.endOfGame.keyPressedEnd();
        break;
    }
  }

  draw() {
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
