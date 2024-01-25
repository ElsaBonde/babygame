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
    this.textButton = "PLAY AGAIN";
  }

  public setLose() {
    this.isWin = false;
    this.text = "GAME OVER!";
    this.textButton = "TRY AGAIN";
  }

  draw() {
    push();
    background("#441F61");
    background(endOfGameImg);

    textSize(100);
    fill("#EA85DA");
    textAlign(CENTER, CENTER);
    text(this.text, width / 2, height / 2);
    textFont("Roboto Mono");
    textStyle("bold");
    pop();
  }
}