class EndOfGame extends Game {

    private text: string;
    private highscore: number;
    private textButton: string;

    constructor() {
        super();
        this.text = "GAME OVER";
        this.highscore = 0;
        this.textButton = "PLAY AGAIN";
    }
    draw() {
    }
}