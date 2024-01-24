class Level {
  private entities: Entity[]; // Level är experten på entiteter!
  private currentLevel: number;
  private score: number;
  public time: Time;
  private walls: Wall[];
  private beers: Beer[];
  private formulas: Formula[];
  private clocks: Clock[];
  private music: {
    beerSound: p5.SoundFile;
    formulaSound: p5.SoundFile;
    clockSound: p5.SoundFile;
  };
  private countDownToStart: number;
  //itemsToBeDeleted [] också en lösning

  // DEFINITION - SPECA VAD VI TAR EMOT
  constructor(
    entities: Entity[],
    music: {
      beerSound: p5.SoundFile;
      formulaSound: p5.SoundFile;
      clockSound: p5.SoundFile;
    }
  ) {
    this.entities = entities;
    this.currentLevel = 0;
    this.score = 0;
    this.time = new Time(60);
    this.music = music;
    this.countDownToStart = 3000;
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

  getTime(): Time {
    return this.time;
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
    push();
    textSize(22);
    textFont("Orbitron");
    fill("#64E12A");
    // Draw the score at a certain position
    text(`: ${this.score}`, 71, 29);
    pop();
  }

  update() {
    if (this.countDownToStart > 0) {
      this.countDownToStart -= deltaTime;
      return;
    }
    let baby: Baby | null = null;

    for (let entity of this.entities) {
      if (entity instanceof Baby) {
        baby = entity;
        const b = entity;
        for (const e of this.entities) {
          if (b === e) continue;
          const collided = this.checkCollision(b, e);
          if (!collided) continue;

          if (e instanceof Beer) {
            // REAKTION
            e.remove();
          }
          if (e instanceof Formula) {
            e.remove();
          }
        }
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
        baby.goSlow(); // Hamnar bebis på beer så går den slow
        if (this.music.beerSound) {
          this.music.beerSound.play();
        }
      }
      if (formulaCollision === "Formula") {
        this.score += 1; // Hamnar bebis på formula så får man poäng
        if (this.music.formulaSound) {
          this.music.formulaSound.play();
        }
      }
      if (clockCollision === "Clock") {
        this.time.freezeTime(); // tiden fryses när bebis tar klocka
        if (this.music.clockSound) {
          this.music.clockSound.play();
        }
      }
    }
    this.time.update();
  }

  //den som hämtas som level1
  draw() {
    push();
    image(levelOne, 0, 0, width, height);
    for (let entity of this.entities) {
      entity.draw();
    }
    pop();
    this.drawScore();
    this.time.draw();

    if (this.countDownToStart > 0) {
      this.drawCountDown();
    }
  }

  private drawCountDown() {
    //lägg här nedräkning style
  }
}
