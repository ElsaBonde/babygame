class StartPage {
  constructor() {}

  draw() {
    background("#441F61");
    background(backgroundImg);
  }
/**
 * Create 'start button' to welcome page
 */
  startButton() {
    push();
    fill("#FFA3B1");
    rect(345, 542, 255, 60, 20);
    pop();
    
    push();
    textSize(28);
    textFont('VT323');
    text("PRESS SPACE TO START", 360, 580);
    pop();
  }
  
    keyPressedStart() {
    if ( keyCode === 32) {
        if (game && game.getCurrentPage() === "start") {
            game.changePage();
        }
    }
  }
}
