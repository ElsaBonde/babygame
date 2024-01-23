class EndOfGame {
  private text: string;
  private highscore: number;
  private textButton: string;

  constructor() {
    this.text = "GAME OVER";
    this.highscore = 0;
    this.textButton = "PLAY AGAIN";
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
