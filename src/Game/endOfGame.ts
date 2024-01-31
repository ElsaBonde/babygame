class EndOfGame {
  private text: string;
  private score: number;
  private highscore: number;
  private textButton: string;
  private music: {
    winSound: p5.SoundFile;
    looseSound: p5.SoundFile;
    bgSound: p5.SoundFile;
  };

  constructor(music: {
    winSound: p5.SoundFile;
    looseSound: p5.SoundFile;
    bgSound: p5.SoundFile;
  }) {
    this.music = music;
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
    this.music.winSound.play();
    this.music.bgSound.stop();
    this.drawStars();
  }

  public setLose() {
    this.text = "GAME OVER!";
    this.textButton = "PRESS ENTER TO TRY AGAIN";
    this.music.looseSound.play();
    this.music.bgSound.stop();
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

  private drawStars() {
    push();
    image(endScreenStar, 140, 200, 100, 150);
    image(endScreenStar, 755, 200, 100, 150);
    image(smallStarsEndScreen, 250, 360, 50, 50);
    image(smallStarsEndScreen, 700, 360, 50, 50);
    pop();
  }

  private drawTears() {
    //vänster öga
    push();
    image(tears, 38, 120, 70, 70);
    image(tears, 38, 140, 70, 70);

    //höger öga
    translate(135, 125);
    rotate(radians(-33));
    image(tears, -25, -16, 70, 70);
    image(tears, -25, 4, 70, 70);
    pop();
  }

 public draw() {
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
    text(
      `HIGHSCORE: ${this.highscore}  |  YOUR SCORE: ${this.score}`,
      width / 2,
      height / 2 - 10
    );
    pop();

    if (this.text === "WINNER!") {
      this.drawStars();
      if (!this.music.winSound.isPlaying()) {
        this.music.winSound.play();
        this.music.bgSound.stop();
      }
    } else if (this.text === "GAME OVER!") {
      this.drawTears();
      if (!this.music.looseSound.isPlaying()) {
        this.music.looseSound.play();
        this.music.bgSound.stop();
      }
    }
  }
}
