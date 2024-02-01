class Game {
  // STATE - TILLSTÅND - ATTRIBUT - INSTANSVARIABLER
  private currentPage: "start" | "roadmap" | "level" | "end";
  private levelFactory: LevelFactory;
  private level: Level;
  private startPage: StartPage;
  private roadMap: Roadmap;
  private endOfGame: EndOfGame;
  public currentLevelNumber: number;

  constructor() {
    this.currentPage = "start";
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1);
    this.startPage = new StartPage();
    this.roadMap = new Roadmap(game);
    this.endOfGame = new EndOfGame(music);
    this.currentLevelNumber = 1;
  }

  public nextLevel() {
    if (this.currentLevelNumber < 7) {
      this.currentLevelNumber++;
      this.level = this.levelFactory.generateLevel(
        this.currentLevelNumber,
        this.level.getScore()
      );
    } else {
      this.currentPage = "end";
      this.endOfGame.setScore(this.level.getScore());
      this.endOfGame.setWin();
    }
  }

  public getCurrentPage(): "start" | "roadmap" | "level" | "end" {
    return this.currentPage;
  }

  public startLevel (levelNumber: number) {
    this.currentLevelNumber = levelNumber;
    this.level = this.levelFactory.generateLevel(levelNumber)
    this.currentPage = "level";
  }

  public changePage() {
    this.currentPage = "level";
    this.level = this.levelFactory.generateLevel(1);
    this.currentLevelNumber = 1;
  }

  public changePageToStartPage() {
    this.currentPage = "start";
  }

  public changePageToRoadmap() {
    this.currentPage = "roadmap";
  }

  public keyPressed(key: string) {
    if(this.currentPage === "roadmap") {
      this.roadMap.handleLevelSelection(key);
    }
  }
  
  public update() {
    switch (this.currentPage) {
      case "start":
        this.startPage.startButton();
        this.startPage.keyPressedStart();
        break;
      case "roadmap":

        break;
      case "level":
        this.level.update();
        if (this.level.isGameOver()) {
          this.currentPage = "end";
          this.endOfGame.setLose();
          this.endOfGame.setScore(this.level.getScore()); //Sätter highscore för endofGame
        }
        break;
      case "end":
        this.endOfGame.keyPressedEnd();
        break;
    }
  }

  public draw() {
    clear(0, 0, 0, 0);
    switch (this.currentPage) {
      case "start":
        this.startPage.draw();
        break;
        case "roadmap": 
        this.roadMap.draw();
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
