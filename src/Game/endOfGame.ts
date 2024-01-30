class EndOfGame {
  private text: string;
  private score: number;
  private highscore: number;
  private textButton: string;

  constructor() {
    this.text = "";
    this.score = 0;
    this.highscore = Number(localStorage.getItem("highscore") || 0);
    this.textButton = "";
  }

  public setScore(score: number) {
    this.score = score;
    // Är det ett nytt highscore?
    if (this.score > this.highscore) {
      this.highscore = this.score;
      localStorage.setItem("highscore", this.highscore.toString());
    }
  }

  public setWin() {
    this.text = "WINNER!";
    this.textButton = "PRESS ENTER TO PLAY AGAIN";
  }

  public setLose() {
    this.text = "GAME OVER!";
    this.textButton = "PRESS ENTER TO TRY AGAIN";
  }

  //13 är enter
  public keyPressedEnd() {
    if (keyCode === 13) {
      if (game.getCurrentPage() === "end") {
        game.changePageToStartPage();
      }
    }
  }

  private endButton() {
    push();
    fill("#FFA3B1");
    rect(345, 542, 310, 60, 15);
    pop();

    push();
    textSize(28);
    fill("black");
    textAlign(CENTER);
    textFont("VT323");
    text(this.textButton, width / 2, 580);
    pop();
  }

  draw() {
    push();
    background(endOfGameImg);
    pop();

    push();
    textSize(75);
    fill("#EA85DA");
    stroke("black");
    strokeWeight(8);
    textAlign(CENTER, CENTER);
    text(this.text, width / 2, height / 2 + 90);
    textFont("VT323");
    textStyle(BOLD);
    pop();
    this.endButton();

    push();
    textSize(30);
    fill("#2EBAD7");
    stroke("black");
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    text(`HIGHSCORE: ${this.highscore}  |  YOUR SCORE: ${this.score}`, width / 2, height / 2  - 10);
    pop();
  }
}
