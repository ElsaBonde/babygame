class Time {
  private seconds: number;
  public timeLeft: number;
  private isPaused: boolean;
  public isGameOver: boolean;
  private freezeTimeLeft: number;

  constructor(seconds: number) {
    this.seconds = seconds - 40; //skapar 60 sek från start
    this.timeLeft = this.seconds;
    this.isPaused = false;
    this.isGameOver = false;
    this.freezeTimeLeft = 0;
  }

  //metod som anropas för att frysa tiden
  freezeTime() {
    //sätter frystiden till 5 sekunder
    this.freezeTimeLeft = 5;
    //sätter isPaused till true så att nedräkningen stannar
    this.isPaused = true;
  }

  private countDown() {
    //om spelet är pausat (när man tar klocka)
    if (this.isPaused) {
      this.freezeTimeLeft -= deltaTime / 1000;

      if (this.freezeTimeLeft <= 0) {
        this.isPaused = false; // Detta avslutar frysningen
        this.freezeTimeLeft = 0;
      }
    } else {
      //fortsätter nedräkning
      this.timeLeft -= deltaTime / 1000; //milli till sek
    }

    //om tiden är slut så är spelet också över
    if (this.timeLeft <= 0) {
      this.isGameOver = true;
    }
  }

  public setTimeToZero() {
    this.timeLeft = 0;
    this.isGameOver = true;
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
