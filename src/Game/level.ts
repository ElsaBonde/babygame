class Level {
  private entities: Entity[];
  private currentLevel: number;
  private score: number;
  private time: Time;

  constructor() {
    this.entities = [];
    this.currentLevel = 0;
    this.score = 0;
    this.time = new Time();
  }
  update() {}
  draw() {
    for (let entity of this.entities) {
      entity.draw();
    }
  }
}
