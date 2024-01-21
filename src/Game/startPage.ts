class StartPage {
  private buttonColor: p5.Color;
  private gameStarted: boolean;

  constructor() {
    this.buttonColor = color(150);
    this.gameStarted = false;
  }

  draw() {
    background("#441F61");
    background(backgroundImg);
    this.startButton();

    if (this.gameStarted) {
      this.handleGameStart();
    }
  }

  /**
   * Create 'start button' to welcome page
   */
  startButton() {
    push();
    //ger glittereffekt till bakgrunden
    fill(this.glitterColor(this.buttonColor));
    rect(372.5, 542, 255, 60, 15);
    pop();

    push();
    textSize(28);
    fill("black");
    textFont("VT323");
    text("PRESS SPACE TO START", 388, 580);
    pop();
    if (keyCode === 32 && !this.gameStarted) {
      this.startGame();
    }
  }
  
  startGame() {
    this.gameStarted = true;
  }

  handleGameStart() {
    countdownTimer.update();
    countdownTimer.draw();

    if (countdownTimer.isGameOver()) {
      noLoop();
    }
  }

  // Skapa en glittrande effekt på färgen
  glitterColor(baseColor: p5.Color) {
    const glitteredColor = color(baseColor);
    const variance = 10; //bestämmer hur snabbt det ska "glittra"

    //lägger till de olika värderna för färgerna
    glitteredColor.setRed(255 + random(-variance, variance)); // Färg 1
    glitteredColor.setGreen(192 + random(-variance, variance)); // Färg 2
    glitteredColor.setBlue(203 + random(-variance, variance)); // Färg 3

    return glitteredColor;
  }

  update() {
    this.startButton();
  }

  keyPressedStart() {
    if (keyCode === 32) {
      if (game && game.getCurrentPage() === "start") {
        console.log("start");
        game.changePage();
      }
    }
  }
}
