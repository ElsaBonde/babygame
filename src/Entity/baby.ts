/// <reference path="./entity.ts" />

type Controls = {
  up: number;
  left: number;
  down: number;
  right: number;
};

class Baby extends Entity {
  private controls: Controls;
  private animationIndex: number;
  private animationSpeed: number;
  private leftAnimationLoop: number[];
  private rightAnimationLoop: number[];
  private upAnimationLoop: number[];
  private downAnimationLoop: number[];
  private speed: number;
  private normalSpeed: number = 2; // skapar variabel med default värde på 2 för bebisen snabbhet i rörelse
  public beerCount: number = 0;

  constructor(size: number, x: number, y: number) {
    super(playerImages[1], size, x, y);
    this.controls = {
      up: UP_ARROW,
      left: LEFT_ARROW,
      down: DOWN_ARROW,
      right: RIGHT_ARROW,
    };
    this.animationIndex = 0;
    this.animationSpeed = 0.5;
    this.speed = 2; // skapar variabel med default värde på 2 för bebisen snabbhet i rörelse

    this.upAnimationLoop = [0, 1, 2, 0];
    this.leftAnimationLoop = [3, 4, 5, 3];
    this.downAnimationLoop = [6, 7, 8, 6];
    this.rightAnimationLoop = [9, 10, 11, 9];
  }

  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }

  /***
   * Får bebisen att röra sig speeds värde i px för varje tryck med piltangenterna och anropar de olika loopmetoderna som kollar babyns riktning och ger rätt animation
   */

  private move(walls: Wall[]) {
    let potentialX = this.x;
    let potentialY = this.y;

    if (keyIsDown(this.controls.up)) {
      potentialY -= this.speed;
      this.animateUp();
      this.yCollideAndMove(potentialY, walls);
    }
    if (keyIsDown(this.controls.down)) {
      potentialY += this.speed;
      this.animateDown();
      this.yCollideAndMove(potentialY, walls);
    }
    if (keyIsDown(this.controls.right)) {
      potentialX += this.speed;
      this.animateRight();
      this.xCollideAndMove(potentialX, walls);
    }
    if (keyIsDown(this.controls.left)) {
      potentialX -= this.speed;
      this.animateLeft();
      this.xCollideAndMove(potentialX, walls);
    }

    if (!this.wouldCollideWithWalls(potentialX, potentialY, walls)) {
      this.x = potentialX;
      this.y = potentialY;
    }
  }

  //hämtar if-sats som används för att kontrollera + promenera med baby i y-led
  private yCollideAndMove(potentialY: number, walls: Wall[]) {
    if (!this.wouldCollideWithWalls(this.x, potentialY, walls)) {
      this.y = potentialY;
    }
  }

  //hämtar if-sats som används för att kontrollera + promenera med baby i x-led
  private xCollideAndMove(potentialX: number, walls: Wall[]) {
    if (!this.wouldCollideWithWalls(potentialX, this.y, walls)) {
      this.x = potentialX;
    }
  }

  private wouldCollideWithWalls(
    potentialX: number,
    potentialY: number,
    walls: Wall[]
  ) {
    for (const wall of walls) {
      if (this.wouldOverlap(potentialX, potentialY, this.size, wall)) {
        return true;
      }
    }
    return false;
  }

  private wouldOverlap(x1: number, y1: number, size1: number, e2: Entity) {
    return (
      x1 < e2.x + e2.size &&
      x1 + size1 > e2.x &&
      y1 < e2.y + e2.size &&
      y1 + size1 > e2.y
    );
  }

  public spin() {
    const rotationInterval = 50;
    const totalRotationTime = 1000;
    this.animateUp();
    setTimeout(() => this.animateRight(), 250);
    setTimeout(() => this.animateDown(), 500);
    setTimeout(() => this.animateLeft(), 750);
    setTimeout(() => this.animateUp(), 1000);
  }

  //måste vara public för att kunna nås av level
  public goSlow() {
    //sätter bebisens speed till hälften av default
    this.speed = 1;
    //efter 4 sekunder får bebisen tillbaka sin normala speed igen
    setTimeout(() => {
      this.speed = this.normalSpeed;
    }, 4000);
  }

  //skapar loop för att animera babyns bilder
  private animateLoop(animatinLoop: number[]): void {
    this.image =
      playerImages[
        animatinLoop[Math.floor(this.animationIndex) % animatinLoop.length]
      ];

    this.animationIndex =
      (this.animationIndex + this.animationSpeed) %
      (animatinLoop.length * this.animationSpeed);
  }

  //en metod var för varje riktning som bebisen kan gå i, anropar animateLoop med rätt riktnings loop
  private animateLeft(): void {
    this.animateLoop(this.leftAnimationLoop);
  }

  private animateRight(): void {
    this.animateLoop(this.rightAnimationLoop);
  }

  private animateUp(): void {
    this.animateLoop(this.upAnimationLoop);
  }

  private animateDown(): void {
    this.animateLoop(this.downAnimationLoop);
  }

  update(walls: Wall[]) {
    this.move(walls);
  }
}
