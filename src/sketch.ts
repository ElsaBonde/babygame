//---- GLOBAL VARIABLES ----//
let game: Game;
let playerImages: p5.Image[];
let levelOne: p5.Image;
let levelTwo: p5.Image;
let backgroundImg: p5.Image;
let endOfGameImg: p5.Image;
let beerImg: p5.Image;
let formulaImg: p5.Image;
let clockImg: p5.Image;
let ghostImg: p5.Image;
let doorImg: {
  doorClosed: p5.Image;
  doorOpen: p5.Image;
};
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
  playerImages = [
    loadImage("./assets/img/up1.png"),
    loadImage("./assets/img/up2.png"),
    loadImage("./assets/img/up3.png"),
    loadImage("./assets/img/left1.png"),
    loadImage("./assets/img/left2.png"),
    loadImage("./assets/img/left3.png"),
    loadImage("./assets/img/down1.png"),
    loadImage("./assets/img/down2.png"),
    loadImage("./assets/img/down3.png"),
    loadImage("./assets/img/right1.png"),
    loadImage("./assets/img/right2.png"),
    loadImage("./assets/img/right3.png"),
  ];

  backgroundImg = loadImage("./assets/img/startpage.png");
  endOfGameImg = loadImage("./assets/img/endOfGame.png");
  levelOne = loadImage("./assets/img/levelOne.png");
  levelTwo = loadImage("./assets/img/levelTwo.png");
  beerImg = loadImage("./assets/img/beer.png");
  formulaImg = loadImage("./assets/img/formula.png");
  clockImg = loadImage("./assets/img/clock.png");
  ghostImg = loadImage("./assets/img/ghost.png");
  doorImg = {
    doorClosed: loadImage("./assets/img/doorClosed.png"),
    doorOpen: loadImage("./assets/img/doorOpen.png"),
  };

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
  music.clockSound.setVolume(0.5);

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
