class Time {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  getElapsedSeconds(): number {
    const currentTime = Date.now();
    const elapsedMilliseconds = currentTime - this.startTime;
    const elapsedSeconds = elapsedMilliseconds / 1000;
    return elapsedSeconds;
  }
}

class CountdownTimer {
  private timer: number;
  private gameover: boolean;

  constructor(initialSeconds: number) {
    this.timer = initialSeconds
    this.gameover = false;
  }

  update () {
    if (!this.gameover && frameCount % 60 == 0 && this.timer > 0) {
      this.timer--;
    }
  }

  draw() {
    textAlign(CENTER, CENTER);
    textSize(100);
    text(this.timer, width / 2, height / 2);

    if (this.timer === 0) {
      this.gameover = true;
      text("Game Over", width / 2, height * 0.7);
    }
  }

  isGameOver(): boolean {
    return this.gameover;
  }
}