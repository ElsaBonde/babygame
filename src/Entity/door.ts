/// <reference path="./entity.ts" />

class Door extends Entity {
  public isOpen: boolean;
  private doorImages: { doorClosed: p5.Image; doorOpen: p5.Image };

  constructor(
    doorImages: { doorClosed: p5.Image; doorOpen: p5.Image },
    size: number,
    x: number,
    y: number
  ) {
    super(doorImages.doorClosed, size, x, y); //startar med stängd dörr
    this.isOpen = false;
    this.doorImages = doorImages;
  }

  //metod för att öppna dörren
  public openDoor() {
    this.image = this.doorImages.doorOpen;
    this.isOpen = true;
  }
}
