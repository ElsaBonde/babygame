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
  private move() {
    this.previousX = this.x;
    this.previousY = this.y;

    if (keyIsDown(this.controls.up)) {
      this.y -= 2;
      this.image = this.images.up;
    }
    if (keyIsDown(this.controls.down)) {
      this.y += 2;
      this.image = this.images.down;
    }
    if (keyIsDown(this.controls.right)) {
      this.x += 2;
      this.image = this.images.right;
    }
    if (keyIsDown(this.controls.left)) {
      this.x -= 2;
      this.image = this.images.left;
    }
  }

  //hämtar alla väggar och kollar om bebisen krockar med någon av dem
  private checkWallCollision(walls: Wall[]) {
    const collidedWalls: Wall[] = [];

    // Identifierar vilka väggar bebis har krockat med
    for (const wall of walls) {
      if (this.entitiesOverlap(this, wall)) {
        collidedWalls.push(wall);
      }
    }

    // Försök flytta bebis i rätt riktning och kontrollera om den krockar med någon vägg
    const currentX = this.x;
    this.x = this.previousX;
    if (
      !this.entitiesOverlap(this, collidedWalls[0]) &&
      !this.entitiesOverlap(this, collidedWalls[1])
    ) {
      return;
    } else {
      this.x = currentX;
      this.y = this.previousY;
    }
    // for (const collidedWall of collidedWalls) {
  }

  // Lägga till if sats..
  private entitiesOverlap(e1: Entity, e2: Entity) {
    return (
      e1.x < e2.x + e2.size &&
      e1.x + e1.size > e2.x &&
      e1.y < e2.y + e2.size &&
      e1.y + e1.size > e2.y
    );
  }

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
    this.move();
    this.checkWallCollision(walls);
    this.checkBeerCollision(beers);
    this.checkFormulaCollision(formulas);
    this.checkClockCollision(clocks);
  }
}
