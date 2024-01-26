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
    textSize(100);
    fill("#EA85DA");
    stroke("black");
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    text(this.text, width / 2, height / 2 -20);
    textFont(" 'Roboto Mono', monospace");
    textStyle(BOLD);
    pop();
    this.endButton();

    push();
    textSize(40);
    fill("#F5B03E");
    stroke("black");
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    text(`HIGHSCORE: ${this.highscore}`, width / 2, height / 2 + 70);
    textSize(30)
    text(`YOUR SCORE: ${this.score}`, width / 2, height / 2 + 120);
    textFont("VT323");
    pop();

  }
}
