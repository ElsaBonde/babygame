class Level extends Game {

    private enteties: Entity[];
    private currentLevel: number;
    private score: number;
    private time: Time;

    constructor(currentPage: 'start' | 'level' | 'end', levelFactory: LevelFactory, level: Level, startPage: StartPage, endOfGame: EndOfGame, totalScore: number, enteties: Entity[], currentLevel: number, score: number, time: Time) {
        super(currentPage, levelFactory, level, startPage, endOfGame, totalScore);
        this.enteties = [];
        this.currentLevel = 0;
        this.score = 0;
        this.time = new Time();
    }
    update() {
    }
    draw() {
    }
}