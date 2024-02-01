//---- GLOBAL VARIABLES ----//
let game: Game;
let playerImages: p5.Image[];
let levelOne: p5.Image;
let levelTwo: p5.Image;
let levelThree: p5.Image;
let levelFour: p5.Image;
let levelFive: p5.Image;
let levelSix: p5.Image;
let levelSeven: p5.Image;
let levelEight: p5.Image;
let backgroundImg: p5.Image;
let roadmapImg: p5.Image;
let endScreenStar: p5.Image;
let smallStarsEndScreen: p5.Image;
let tears: p5.Image;
let endOfGameImg: p5.Image;
let beerImg: p5.Image;
let formulaImg: p5.Image;
let clockImg: p5.Image;
let ghostImg: p5.Image;
let doorImg: {
  doorClosed: p5.Image;
  doorOpen: p5.Image;
};

let placeHolderLevel1: p5.Image;
let placeHolderLevel2: p5.Image;
let placeHolderLevel3: p5.Image;
let placeHolderLevel4: p5.Image;
let placeHolderLevel5: p5.Image;
let placeHolderLevel6: p5.Image;
let placeHolderLevel7: p5.Image;

let music: {
  beerSound: p5.SoundFile;
  formulaSound: p5.SoundFile;
  clockSound: p5.SoundFile;
  bgSound: p5.SoundFile;
  winSound: p5.SoundFile;
  looseSound: p5.SoundFile;
  ghostSound: p5.SoundFile;
};
const totalLevels = 7;

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
  roadmapImg = loadImage("./assets/img/roadmapImg.png");
  endScreenStar = loadImage("./assets/img/endScreenStars.gif");
  smallStarsEndScreen = loadImage("./assets/img/smallStarsEndScreen.gif");
  tears = loadImage("./assets/img/tears.gif");
  endOfGameImg = loadImage("./assets/img/endOfGame.png");
  levelOne = loadImage("./assets/img/levelOne.png");
  levelTwo = loadImage("./assets/img/levelTwo.png");
  levelThree = loadImage("./assets/img/levelThree.png");
  levelFour = loadImage("./assets/img/levelFour.png");
  levelFive = loadImage("./assets/img/levelFive.png");
  levelSix = loadImage("./assets/img/levelSix.png");
  levelSeven = loadImage("./assets/img/levelSeven.png");

  levelEight = loadImage("./assets/img/levelEight.png");

  beerImg = loadImage("./assets/img/beer.png");
  formulaImg = loadImage("./assets/img/formula.png");
  clockImg = loadImage("./assets/img/clock.png");
  ghostImg = loadImage("./assets/img/ghost.png");
  doorImg = {
    doorClosed: loadImage("./assets/img/doorClosed.png"),
    doorOpen: loadImage("./assets/img/doorOpen.png"),
  };

  placeHolderLevel1 = loadImage("./assets/img/placeholderLevel1.png");
  placeHolderLevel2 = loadImage("./assets/img/placeholderLevel2.png");
  placeHolderLevel3 = loadImage("./assets/img/placeholderLevel3.png");
  placeHolderLevel4 = loadImage("./assets/img/placeholderLevel4.png");
  placeHolderLevel5 = loadImage("./assets/img/placeholderLevel5.png");
  placeHolderLevel6 = loadImage("./assets/img/placeholderLevel6.png");
  placeHolderLevel7 = loadImage("./assets/img/placeholderLevel7.png");

  music = {
    beerSound: loadSound("./assets/music/beerSound.mp3"),
    formulaSound: loadSound("./assets/music/formulaSound.mp3"),
    clockSound: loadSound("./assets/music/clockSound.mp3"),
    bgSound: loadSound("./assets/music/bgSound.mp3"),
    winSound: loadSound("./assets/music/winSound.mp3"),
    looseSound: loadSound("./assets/music/looseSound.mp3"),
    ghostSound: loadSound("./assets/music/ghostSound.mp3"),
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
  music.beerSound.setVolume(0.6);
  music.formulaSound.setVolume(0.6);
  music.clockSound.setVolume(0.5);
  music.bgSound.setVolume(0.1);
  music.winSound.setVolume(0.6);
  music.looseSound.setVolume(0.6);
  music.ghostSound.setVolume(0.6);

  game = new Game();
}

function keyPressed() {
  game.keyPressed(key);
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
