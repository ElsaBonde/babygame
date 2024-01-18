class Level {
  public entities: Entity[];
  private currentLevel: number;
  private score: number;
  private time: Time;
  private levelFactory: LevelFactory

  constructor(levelFactory: LevelFactory) {
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
    this.levelFactory = levelFactory;
  }
  update() {
  }
  
  public addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  //den som hämtas som level1
  draw() {
    console.log("ELSA");
    this.levelFactory.draw();
    for (let entity of this.entities) {
      entity.draw();
    }
  }
}
