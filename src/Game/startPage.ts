class StartPage {
  private buttonColor: p5.Color;

  constructor() {
    this.buttonColor = color(150);
  }

  /**
   * Create 'start button' to welcome page
   */
  public startButton() {
    push();
    //ger glittereffekt till bakgrunden
    fill(this.glitterColor(this.buttonColor));
    rect(235, 542, 255, 60, 15);
    pop();

    push();
    textSize(25);
    fill("black");
    textFont("VT323");
    text("PRESS", 265, 580);
    textStyle(BOLD);
    text("SPACE", 325, 580)
    textStyle(NORMAL);
    text("TO START", 382, 580);
    pop();
  }

  public roadmapButton() {
    push();
    fill(this.glitterColor(this.buttonColor));
    rect(510, 542, 255, 60, 15);
    pop();

    push();
    textSize(25);
    fill("black");
    textFont("VT323");
    text("PRESS", 527, 580);
    textStyle(BOLD);
    text("ENTER", 586, 580);
    textStyle(NORMAL);
    text("FOR ROADMAP", 643, 580);
    pop();
  }

  // Skapa en glittrande effekt på färgen
  private glitterColor(baseColor: p5.Color) {
    const glitteredColor = color(baseColor);
    const variance = 10; //bestämmer hur snabbt det ska "glittra"

    //lägger till de olika värderna för färgerna
    glitteredColor.setRed(255 + random(-variance, variance)); // Färg 1
    glitteredColor.setGreen(192 + random(-variance, variance)); // Färg 2
    glitteredColor.setBlue(203 + random(-variance, variance)); // Färg 3

    return glitteredColor;
  }

  public update() {
    this.startButton();
  }

  public keyPressedStart() {
    if (keyCode === 32) {
      if (game && game.getCurrentPage() === "start") {
        game.changePage();
      }
    }
    if (keyCode === ENTER) {
      game.changePageToRoadmap();
    }
  }

  public draw() {
    background(backgroundImg);
    this.startButton();
    this.roadmapButton();
  }
}
