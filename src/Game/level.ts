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
    this.time = new Time();

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

  drawScore() {
    text(`Score: ${this.score}`, 41, 29); // Draw the score at position (10, 50)
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
        this.score -= 1; // Decrease score when baby collides with beer
      }
      if (formulaCollision === "Formula") {
        this.score += 1; // Increase score when baby collides with formula
      }
      // Handle clock collision if needed
    }
    this.drawScore();
  }

  // private checkCollision(
  //   baby: Baby,
  //   entities: Entity[],
  //   removeEntity: (entity: Entity) => void
  // ) {
  //   for (const entity of entities) {
  //     if (
  //       baby.x < entity.x + entity.size &&
  //       baby.x + baby.size > entity.x &&
  //       baby.y < entity.y + entity.size &&
  //       baby.y + baby.size > entity.y
  //     ) {
  //       removeEntity(entity);
  //     }
  //   }
  // }
  // update() {
  //   let baby: Baby | null = null;

  //   for (let entity of this.entities) {
  //     if (entity instanceof Baby) {
  //       baby = entity;
  //       break;
  //       //entity.update(this.walls, this.beers, this.formulas, this.clocks);
  //     }
  //   }
  //   if (baby) {
  //     baby.update(this.walls);
  //     this.checkCollision(baby, this.beers, (beer) => beer.remove());
  //     this.checkCollision(baby, this.formulas, (formula) => formula.remove());
  //     this.checkCollision(baby, this.clocks, (clock) => clock.remove());
  //   }
  // }

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
  }
}
