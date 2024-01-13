class Level extends Game {

    private enteties: Entity[];
    private currentLevel: number;
    private score: number;
    private time: Time;

    constructor() {
        super();
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