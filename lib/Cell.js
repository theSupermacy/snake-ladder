class Cell {
    constructor(number) {
        this.number = number
        this.snake = null
        this.ladder = null
    }

    hasSnake() {
        return !!this.snake
    }

    hasLadder() {
        return !!this.ladder
    }

    attachLadder(Ladder) {
        this.ladder = Ladder

    }
    attachSnake(Snake) {
        this.snake = Snake
    }

}


module.exports = { Cell }