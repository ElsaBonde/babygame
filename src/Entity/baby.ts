/// <reference path="./entity.ts" />

type Controls = {
  up: number;
  left: number;
  down: number;
  right: number;
};

class Baby extends Entity {
  private controls: Controls;
  public images: {
    up: p5.Image;
    left: p5.Image;
    down: p5.Image;
    right: p5.Image;
  };
  private previousX: number;
  private previousY: number;

  constructor(size: number, x: number, y: number) {
    super(playerImages.up, size, x, y);
    this.controls = {
      up: UP_ARROW,
      left: LEFT_ARROW,
      down: DOWN_ARROW,
      right: RIGHT_ARROW,
    };
    this.images = {
      up: playerImages.up,
      left: playerImages.left,
      down: playerImages.down,
      right: playerImages.right,
    };
    this.previousX = this.x;
    this.previousY = this.y;
  }
  public getX() {
    return this.x;
  }
  public getY() {
    return this.y;
  }

  /***
   * Får bebisen att röra sig 2 px för varje tryck med piltangenterna
   */

  private move(walls: Wall[]) {
    let potentialX = this.x;
    let potentialY = this.y;

    if (keyIsDown(this.controls.up)) {
      potentialY -= 2;
      this.image = this.images.up;
      this.yCollideAndMove(potentialY, walls);
    }
    if (keyIsDown(this.controls.down)) {
      potentialY += 2;
      this.image = this.images.down;
      this.yCollideAndMove(potentialY, walls);
    }
    if (keyIsDown(this.controls.right)) {
      potentialX += 2;
      this.image = this.images.right;
      this.xCollideAndMove(potentialX, walls);
    }
    if (keyIsDown(this.controls.left)) {
      potentialX -= 2;
      this.image = this.images.left;
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

  // Städa upp, till en gemensam metod
  //hämtar alla ölflaskor och kollar om bebisen krockar med någon av dem
  private checkBeerCollision(beers: Beer[]) {
    for (const beer of beers) {
      if (
        //om bebisens position är mindre än ölens position + storlek och om bebisens position + storlek är större än ölens position och om bebisens position är mindre än ölens position + storlek och om bebisens position + storlek är större än ölens position ska bebisen återvända till tidigare position
        this.x < beer.x + beer.size &&
        this.x + this.size > beer.x &&
        this.y < beer.y + beer.size &&
        this.y + this.size > beer.y
      ) {
        beer.remove(); //Kallar på remove-funktionen i beer.ts och tar bort ölen
      }
    }
  }

  //hämtar alla vällingflaskor och kollar om bebisen krockar med någon av dem
  private checkFormulaCollision(formulas: Formula[]) {
    for (const formula of formulas) {
      if (
        //om bebisens position är mindre än vällingens position + storlek och om bebisens position + storlek är större än vällingens position och om bebisens position är mindre än vällingens position + storlek och om bebisens position + storlek är större än vällingens position ska bebisen återvända till tidigare position
        this.x < formula.x + formula.size &&
        this.x + this.size > formula.x &&
        this.y < formula.y + formula.size &&
        this.y + this.size > formula.y
      ) {
        formula.remove(); //Kallar på remove-funktionen i formula.ts och tar bort vällingen
      }
    }
  }

  //hämtar alla klockor och kollar om bebisen krockar med någon av dem
  private checkClockCollision(clocks: Clock[]) {
    for (const clock of clocks) {
      if (
        //om bebisens position är mindre än klockans position + storlek och om bebisens position + storlek är större än klockans position och om bebisens position är mindre än klockans position + storlek och om bebisens position + storlek är större än klockans position ska bebisen återvända till tidigare position
        this.x < clock.x + clock.size &&
        this.x + this.size > clock.x &&
        this.y < clock.y + clock.size &&
        this.y + this.size > clock.y
      ) {
        clock.remove(); //Kallar på remove-funktionen i clock.ts och tar bort klockan
      }
    }
  }

  update(walls: Wall[], beers: Beer[], formulas: Formula[], clocks: Clock[]) {
    this.move(walls);
    this.checkBeerCollision(beers);
    this.checkFormulaCollision(formulas);
    this.checkClockCollision(clocks);
  }
}
