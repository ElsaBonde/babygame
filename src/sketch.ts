//---- GLOBAL VARIABLES ----//
let game: Game;
let playerImages: {
  up: p5.Image;
  left: p5.Image;
  down: p5.Image;
  right: p5.Image;
};
let levelOne: p5.Image;
let backgroundImg: p5.Image;
let beerImg: p5.Image;
let formulaImg: p5.Image;
let clockImg: p5.Image;
let doorClosedImg: p5.Image;
let music: {
  beerSound: p5.SoundFile;
  formulaSound: p5.SoundFile;
  clockSound: p5.SoundFile;
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */

function preload() {
  playerImages = {
    up: loadImage("./assets/img/babyup.png"),
    left: loadImage("./assets/img/babyleft.png"),
    down: loadImage("./assets/img/babydown.png"),
    right: loadImage("./assets/img/babyright.png"),
  };

  backgroundImg = loadImage("./assets/img/startpage.png");
  levelOne = loadImage("./assets/img/levelOne.png");
  beerImg = loadImage("./assets/img/beer.png");
  formulaImg = loadImage("./assets/img/formula.png");
  clockImg = loadImage("./assets/img/clock.png");
  doorClosedImg = loadImage("./assets/img/doorClosed.png");

  music = {
    beerSound: loadSound("./assets/music/beerSound.mp3"),
    formulaSound: loadSound("./assets/music/formulaSound.mp3"),
    clockSound: loadSound("./assets/music/clockSound.mp3"),
  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(1000, 600);
  frameRate(60);
  music.beerSound.setVolume(0.8);
  music.formulaSound.setVolume(0.8);
  music.clockSound.setVolume(0.8);

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw(
  walls: Wall[],
  beers: Beer[],
  formulas: Formula[],
  clocks: Clock[]
) {
  game.update(walls, beers, formulas, clocks);
  game.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.startPage.keyPressedStart();
  }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
