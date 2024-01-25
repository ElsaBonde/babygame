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
  public nextLevel() {
    this.level = this.levelFactory.generateLevel(2);
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

  public isTimeUp(): boolean {
    return this.level.getTime().isGameOver;
  }

  update(walls: Wall[], beers: Beer[], formulas: Formula[], clocks: Clock[]) {
    switch (this.currentPage) {
      case "start":
        this.startPage.startButton();
        this.startPage.keyPressedStart();
        break;
      case "level":
        this.level.update(/* walls, beers, formulas, clocks */);
        break;
      case "end":
        this.endOfGame.keyPressedEnd();
        // this.endOfGame.update();
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
        if (this.level.getTime().isGameOver) {
          this.currentPage = "end";
        }
        if (this.level.hasBabyReachedDoor === true) {
          this.nextLevel();
        }
        break;
      case "end":
        this.endOfGame.draw();
        if (this.level.hasBabyReachedDoor === false) {
          this.endOfGame.setLose();
        } else if (this.level.hasBabyReachedDoor === true) {
          this.endOfGame.setWin();
        }
        break;
    }
  }
}
