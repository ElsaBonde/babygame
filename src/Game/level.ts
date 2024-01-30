class Level {
  private entities: Entity[]; // Level är experten på entiteter

  public score: number;
  public time: Time;
  private walls: Wall[];
  private music: {
    beerSound: p5.SoundFile;
    formulaSound: p5.SoundFile;
    clockSound: p5.SoundFile;
    bgSound: p5.SoundFile;
  };
  private countDownToStart: number;
  public hasBabyReachedDoor: boolean;
  private hasBabyOpenedDoor: boolean = false;
  private levelImage: p5.Image;

  /***
   * DEFINITION - SPECA VAD VI TAR EMOT
   */
  constructor(
    entities: Entity[],
    music: {
      beerSound: p5.SoundFile;
      formulaSound: p5.SoundFile;
      clockSound: p5.SoundFile;
      bgSound: p5.SoundFile;
    },
    previousScore: number = 0,
    levelImage: p5.Image
  ) {
    this.entities = entities;
    this.time = new Time(60);
    this.music = music;
    this.countDownToStart = 3000;
    this.score = previousScore;

    //walls är en array som endast innehåller väggarna i aktiv level, detta hämtas med hjälp av filter som i sin tur hämtar alla väggar från entities
    this.walls = entities.filter((entity) => entity instanceof Wall) as Wall[];
    this.hasBabyReachedDoor = false;
    this.levelImage = levelImage;
  }

  isGameOver(): boolean {
    return this.time.isGameOver;
  }

  // Returnerar poängen från den nuvarande nivån
  public getScore(): number {
    return this.score;
  }

  private checkCollision(baby: Baby, entities: Entity[]): void {
    for (const entity of entities) {
      if (
        baby.x < entity.x + entity.size &&
        baby.x + baby.size > entity.x &&
        baby.y < entity.y + entity.size &&
        baby.y + baby.size > entity.y
      ) {
        this.handleCollision(baby, entity);
      }
    }
  }
  /***
   * Checkar kollision med någon av entiteterna
   */
  private handleCollision(baby: Baby, entity: Entity): void {
    if (entity instanceof Beer) {
      baby.goSlow();
      entity.remove();
      baby.beerCount += 1;
      if (baby.beerCount > 1) {
        baby.spin();
      }
      this.music.beerSound.play();
    }
    if (entity instanceof Formula) {
      entity.remove();
      this.score += 1;
      this.music.formulaSound.play();
    }
    if (entity instanceof Clock) {
      this.time.freezeTime();
      entity.remove();
      this.music.clockSound.play();
    }
    if (entity instanceof Door) {
      const door = entity as Door;
      door.openDoor();
      game.nextLevel();
    }
  }

  /***
   * Ritar ut och placerar poängräkning, samt koordinatern för bild
   */
  drawScore() {
    image(formulaImg, 36, 4, 30, 30);

    push();
    textSize(22);
    textFont("Orbitron");
    fill("#64E12A");
    text(`: ${this.score}`, 71, 29);
    pop();
  }

  update(): void {
    if (this.countDownToStart > 0) {
      this.countDownToStart -= deltaTime;
      return;
    }
    let baby: Baby | null = null;
    for (let entity of this.entities) {
      if (entity instanceof Baby) {
        baby = entity;
        break;
      }
    }
    if (baby) {
      baby.update(this.walls);
      this.checkCollision(baby, this.entities);
    }

    if (this.hasBabyOpenedDoor) {
      this.time.setTimeToZero();
    } else {
      this.time.update();
    }
  }

  private drawCountDown() {
    push();
    noStroke();
    fill(0, 0, 0, 95);
    circle(500, 300, 500);
    pop();

    push();
    textSize(250);
    textFont("Orbitron");
    fill("#64E12A");
    textAlign(CENTER);
    text(Math.ceil(this.countDownToStart / 1000), width / 2, 375);
    pop();
  }

  drawCurrentLevelNumber() {
    push();
    textSize(22);
    textFont("Orbitron");
    fill("#64E12A");
    textAlign(CENTER);
    text(`Level: ${game.currentLevelNumber}`, width / 2, 29);
    pop();
  }

  //den som hämtas som level1
  draw() {
    push();
    image(this.levelImage, 0, 0, width, height);
    for (let entity of this.entities) {
      entity.draw();
    }
    if (!this.music.bgSound.isPlaying()) {
      this.music.bgSound.play();
    }
    pop();
    this.drawScore();
    this.drawCurrentLevelNumber();
    this.time.draw();

    if (this.countDownToStart > 0) {
      this.drawCountDown();
    }
  }
}
