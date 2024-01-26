class Game {
  // STATE - TILLSTÅND - ATTRIBUT - INSTANSVARIABLER
  private currentPage: "start" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  public startPage: StartPage;
  private endOfGame: EndOfGame;
  private totalScore: number;
  public currentLevelNumber: number;

  constructor() {
    this.currentPage = "start";
    this.totalScore = 0;
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1);
    this.startPage = new StartPage();
    this.endOfGame = new EndOfGame();
    this.currentLevelNumber = 1;
  }
  public nextLevel() {
    if (this.currentLevelNumber < 2) {
      this.addLevelScore();
      this.currentLevelNumber++;
      this.level = this.levelFactory.generateLevel(this.currentLevelNumber, this.totalScore);
    }  else if (this.currentLevelNumber === 2) {
      this.level.score = this.getFinalScore();
    } else {
      this.currentPage = "end";
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

  public isTimeUp(): boolean {
    return this.level.getTime().isGameOver;
  }

  // Lägger till poängen från den nuvarande ninvån till den TOTALA poängen
  public addLevelScore() {
    this.totalScore += this.level.getScore();
  }

  // Returnerar den TOTALA poängen
  public getFinalScore(): number {
    return this.totalScore;
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
        // kontrollerar om spelet är över
        if (this.level.getTime().isGameOver) {
          this.addLevelScore(); // lägger till nivåns poäng till den totala poängen
          this.currentPage = "end";
          this.endOfGame.setHighScore(this.getFinalScore()); //Sätter highscore för endofGame
        }
        break;

      case "end":
        this.endOfGame.setHighScore(this.getFinalScore());
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
