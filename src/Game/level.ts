class Level {
  private entities: Entity[];
  private currentLevel: number;
  private score: number;
  private time: Time;

  // DEFINITION - SPECA VAD VI TAR EMOT
  constructor(entities: Entity[]) {
    this.entities = entities;
    this.currentLevel = 0;
    this.score = 0;
    this.time = new Time();
  }
  
  update() {
    // for (let entity of this.entities) {
    //   entity.update();
    // }
  }

  //den som hämtas som level1
  draw() {
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