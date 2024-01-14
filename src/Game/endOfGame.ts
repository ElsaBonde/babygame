class EndOfGame extends Game {

    private text: string;
    private highscore: number;
    private textButton: string;

    constructor(currentPage: 'start' | 'level' | 'end', levelFactory: LevelFactory, level: Level, startPage: StartPage, endOfGame: EndOfGame, totalScore: number, text: string, highscore: number, textButton: string) {
        super(currentPage, levelFactory, level, startPage, endOfGame, totalScore);
        this.text = "GAME OVER";
        this.highscore = 0;
        this.textButton = "PLAY AGAIN";
    }
    draw() {
    }
}