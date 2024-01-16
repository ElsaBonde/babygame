class Level {
  private entities: Entity[];
  private currentLevel: number;
  private score: number;
  private time: Time;

  constructor() {
    this.entities = [
      /* new Baby(playerImage, 30, 200, 200, {
        up: UP_ARROW,
        left: LEFT_ARROW,
        down: DOWN_ARROW,
        right: RIGHT_ARROW,
      }, */
    ];
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
