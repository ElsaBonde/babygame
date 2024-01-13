class StartPage extends Game {
    constructor(currentPage: 'start' | 'level' | 'end', levelFactory: LevelFactory, level: Level, startPage: StartPage, endOfGame: EndOfGame, totalScore: number) {
        super(currentPage, levelFactory, level, startPage, endOfGame, totalScore);
    }

    draw() {
    }
}