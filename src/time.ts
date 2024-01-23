class Time {
  private seconds: number;
  private timeLeft: number;
  private isPaused: boolean;
  private isGameOver: boolean;

  constructor(seconds: number) {
    this.seconds = seconds + 1; //skapar 60 sek från start
    this.timeLeft = this.seconds;
    this.isPaused = false;
    this.isGameOver = false;
  }

  private countDown() {
    //om spelet är "pausat" så pausas nedräkningen
    if (this.isPaused || this.isGameOver) return;

    //fortsätter nedräkning
    this.timeLeft -= deltaTime / 1000; //millis till sek

    //om tiden är slut så är spelet också över
    if (this.timeLeft <= 0) {
      //this.timeLeft = 0;
      this.isGameOver = true;
    }
  }

  update() {
    this.countDown();
  }

  formateTimer() {
    let minutes = "0" + Math.floor(this.timeLeft / 60);
    let seconds = Math.floor(this.timeLeft % 60);
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    if (this.timeLeft >= 0) {
      text(minutes + ":" + formattedSeconds, 882, 29);
    } else {
      text("TIME'S UP", 850, 29);
    }
  }

  draw() {
    push();
    textSize(22);
    textFont("Orbitron");
    fill("#64E12A");
    this.formateTimer();
    pop();
  }
}
