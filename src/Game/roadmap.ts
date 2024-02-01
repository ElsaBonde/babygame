class Roadmap {
  private game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public handleLevelSelection(key: string) {
    switch (key) {
      case "1":
        this.selectLevel(1);
        break;
      case "2":
        this.selectLevel(2);
        break;
      case "3":
        this.selectLevel(3);
        break;
      case "4":
        this.selectLevel(4);
        break;
      case "5":
        this.selectLevel(5);
        break;
      case "6":
        this.selectLevel(6);
        break;
      case "7":
        this.selectLevel(7);
        break;
      case "8":
        this.selectLevel(8);
        break;
    }
  }
  public selectLevel(levelNumber: number) {
    this.game.startLevel(levelNumber);
  }

  private drawCircle() {
    let circleDiameter: number = 80;
    let circleOpacity: number = 100;
    let levelNr: number = 1;

    for (let x of [100, 300, 500, 700]) {
      for (let y of [245, 395]) {
        push();
        fill(255, 255, 255, circleOpacity);
        noStroke();
        ellipse(x + 100, y + 65, circleDiameter);
        pop();
      }
    }
    for (let x of [100, 300, 500, 700]) {
      for (let y of [245, 395]) {
        push();
        textSize(50);
        fill("black");
        textFont("VT323");
        textAlign(CENTER);
        stroke("white");
        strokeWeight(3);
        text(levelNr, x + 100, y + 80);
        pop();
        levelNr++;
      }
    }
  }

  draw() {
    push();
    background(roadmapImg);
    pop();

    push();
    textSize(50);
    fill("#2EBAD7");
    textFont("VT323");
    stroke("black");
    strokeWeight(6);
    textAlign(CENTER);
    text("Roadmap", width / 2, 120);
    pop();

    push();
    textSize(25);
    textFont("VT323");
    textAlign(CENTER);
    text(
      "Select your desired level by pressing the corresponding number on the keypad.",
      width / 2,
      180
    );
    textSize(21);
    text(
      "For example: '1' for the first level, '2' for the second level, and so on.",
      width / 2,
      210
    );
    pop();

    image(placeHolderLevel1, 100, 245, 200, 130);
    image(placeHolderLevel2, 300, 245, 200, 130);
    image(placeHolderLevel3, 500, 245, 200, 130);
    image(placeHolderLevel4, 700, 245, 200, 130);
    image(placeHolderLevel5, 100, 395, 200, 130);
    image(placeHolderLevel6, 300, 395, 200, 130);
    image(placeHolderLevel7, 500, 395, 200, 130);
    image(placeHolderLevel1, 700, 395, 200, 130);

    this.drawCircle();
  }
}
