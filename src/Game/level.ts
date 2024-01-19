class Level {
  private entities: Entity[]; // Level är experten på entiteter!
  private currentLevel: number;
  private score: number;
  private time: Time;

  // DEFINITION - SPECA VAD VI TAR EMOT
  constructor(entities: Entity[]) {
    this.entities = entities;
    this.currentLevel = 0;
    this.score = 0;
    this.time = new Time();
    console.log(entities);
  }

  update() {
    for (let entity of this.entities) {
      if (entity instanceof Baby) {
        entity.update();
      }
    }
    // todo: kolla kollisioner
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
function print(message: string) {
  console.log(message);
}

// ANROP - SKICKAR VI VÄRDEN
// print("HELLO")
