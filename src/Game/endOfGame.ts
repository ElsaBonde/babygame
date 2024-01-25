class EndOfGame {
  private isWin: boolean;
  private text: string;
  private highscore: number;
  private textButton: string;

  constructor() {
    this.isWin = false;
    this.text = "";
    this.highscore = 0;
    this.textButton = "";
  }

  public setWin() {
    this.isWin = true;
    this.text = "WINNER!";
    this.textButton = "PRESS ENTER TO PLAY AGAIN";
  }

  public setLose() {
    this.isWin = false;
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
    background("#441F61");
    background(endOfGameImg);
    pop();

    push();
    textSize(40);
    fill("#F5B03E");
    stroke("black");
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    text("HIGHSCORE:", width / 2, height / 2 - 40);
    textFont("VT323");
    pop();

    push();
    textSize(100);
    fill("#EA85DA");
    stroke("black");
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    text(this.text, width / 2, height / 2 + 60);
    textFont(" 'Roboto Mono', monospace");
    textStyle(BOLD);
    pop();
    this.endButton();
  }
}
