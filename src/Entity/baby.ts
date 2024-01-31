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
  private normalSpeed: number = 3; // skapar variabel med default värde på 2 för bebisen snabbhet i rörelse
  public beerCount: number = 0;
  private rotationAngle: number;
  public effectedByGhost: boolean = false;

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
    this.speed = 3; // skapar variabel med default värde på 2 för bebisen snabbhet i rörelse

    this.upAnimationLoop = [0, 1, 2, 0];
    this.leftAnimationLoop = [3, 4, 5, 3];
    this.downAnimationLoop = [6, 7, 8, 6];
    this.rightAnimationLoop = [9, 10, 11, 9];
    this.rotationAngle = 0;
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
  /***
   * Om bebis tar mer än 1 öl så snurrar den
   */
  public spin() {
    const rotationInterval = 35; // Intervall för varje steg av rotationen
    const totalRotationTime = 1000; // Tid för rotationen att slutföras
    const startTime = millis(); // Tiden då rotationen startar

    const rotateBaby = () => {
      const elapsedTime = Number(millis()) - startTime;

      if (elapsedTime < totalRotationTime) {
        this.rotationAngle += rotationInterval; // Ökar vinkeln medurs
        setTimeout(rotateBaby, rotationInterval); // Fortsätt rotationen med intervall
      } else {
        this.rotationAngle = 0; // återställer rotationen och baby-positionen till 0
      }
    };
    rotateBaby();
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

  update(walls: Wall[], hasReachedDoor: boolean) {
    if (!hasReachedDoor) {
      this.move(walls);
    } else {
      this.x += this.speed * 0.18;
      this.y += this.speed * 0.05;
      this.size -= 0.3;
      this.animateRight();
    }
  }

  draw() {
    push();
    translate(this.x + this.size / 2, this.y + this.size / 2); // Säkerställer att orgin är i mitten av bebisen
    rotate(this.rotationAngle); // Roterar medurs med den aktuella vinkeln
    image(this.image, -this.size / 2, -this.size / 2, this.size, this.size); // Ritar bilden i mitten av bebisen
    pop();
  }
}
