class Level {
  private entities: Entity[]; // Level är experten på entiteter!
  private currentLevel: number;
  private score: number;
  private time: Time;
  private walls: Wall[];
  private beers: Beer[];
  private formulas: Formula[];
  private clocks: Clock[];

  // DEFINITION - SPECA VAD VI TAR EMOT
  constructor(entities: Entity[]) {
    this.entities = entities;
    this.currentLevel = 0;
    this.score = 0;
    this.time = new Time(60);

    //walls är en array som endast innehåller väggarna i aktiv level, detta hämtas med hjälp av filter som i sin tur hämtar alla väggar från entities
    this.walls = entities.filter((entity) => entity instanceof Wall) as Wall[];
    this.beers = entities.filter((entity) => entity instanceof Beer) as Beer[];
    this.formulas = entities.filter(
      (entity) => entity instanceof Formula
    ) as Formula[];
    this.clocks = entities.filter(
      (entity) => entity instanceof Clock
    ) as Clock[];
  }

  private checkCollision(
    baby: Baby,
    entities: Entity[],
    removeEntity: (entity: Entity) => void
  ): string | null {
    for (const entity of entities) {
      if (
        baby.x < entity.x + entity.size &&
        baby.x + baby.size > entity.x &&
        baby.y < entity.y + entity.size &&
        baby.y + baby.size > entity.y
      ) {
        removeEntity(entity);
        return entity.constructor.name;
      }
    }
    return null;
  }

  /**
   * Ritar ut poäng, samt koordinatern
   */
  drawScore() {
    // Draw the image at a certain position
    image(formulaImg, 36, 4, 30, 30);

    // Draw the score at a certain position
    text(`: ${this.score}`, 71, 29);
  }

  update() {
    let baby: Baby | null = null;

    for (let entity of this.entities) {
      if (entity instanceof Baby) {
        baby = entity;
        break;
      }
    }
    if (baby) {
      baby.update(this.walls);
      const beerCollision = this.checkCollision(baby, this.beers, (beer) =>
        beer.remove()
      );
      const formulaCollision = this.checkCollision(
        baby,
        this.formulas,
        (formula) => formula.remove()
      );
      const clockCollision = this.checkCollision(baby, this.clocks, (clock) =>
        clock.remove()
      );

      if (beerCollision === "Beer") {

        baby.goSlow(); // Hamnar bebis på beer så går den långsammare

      }
      if (formulaCollision === "Formula") {
        this.score += 1; // Hamnar bebis på formula så får man poäng
      }
      if (clockCollision === "Clock") {
        this.time.freezeTime(); // tiden fryses när bebis tar klocka
      }
    }
    this.drawScore();
    this.time.update();
  }

  //den som hämtas som level1
  draw() {
    pop();
    image(levelOne, 0, 0, width, height);
    for (let entity of this.entities) {
      entity.draw();
    }
    push();
    textSize(22);
    textFont("Orbitron");
    fill("#64E12A");
    this.drawScore();
    this.time.draw();
  }
}
