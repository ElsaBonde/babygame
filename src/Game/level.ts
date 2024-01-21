class Level {
  private entities: Entity[]; // Level är experten på entiteter!
  private currentLevel: number;
  private score: number;
  private time: Time;
  private walls: Wall[];
  private beers: Beer[];

  // DEFINITION - SPECA VAD VI TAR EMOT
  constructor(entities: Entity[]) {
    this.entities = entities;
    this.currentLevel = 0;
    this.score = 0;
    this.time = new Time();

    //walls är en array som endast innehåller väggarna i aktiv level, detta hämtas med hjälp av filter som i sin tur hämtar alla väggar från entities
    this.walls = entities.filter((entity) => entity instanceof Wall) as Wall[];
    this.beers = entities.filter((entity) => entity instanceof Beer) as Beer[];
  }

  update() {
    for (let entity of this.entities) {
      if (entity instanceof Baby) {
        entity.update(this.walls, this.beers);
      }
    }
    // todo: kolla kollisioner - KLAR
  }

  //den som hämtas som level1
  draw() {
    image(levelOne, 0, 0, width, height);
    for (let entity of this.entities) {
      entity.draw();
    }
  }
}

// DEFINITION - SPECAR VAD SOM SKA TAS EMOT
/* function print(message: string) {
  console.log(message);
} */

// ANROP - SKICKAR VI VÄRDEN
// print("HELLO")
