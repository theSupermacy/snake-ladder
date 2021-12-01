var Cell = require('./Cell').Cell

var Ladder = require('./Ladder').Ladder

var Snake = require('./Snake').Snake


var Dice = require('./Dice').Dice

let instance = null

let BOARD_SIZE = 10

class Board {
    constructor() {
        this.cells = []
    }

    initialize() {
        for (let i = 1; i <= BOARD_SIZE; i++) {
            this.cells.push(new Cell(i))
        }
    }

    createLadder(index, startingPoint, endingPoint) {
        if (this.cells[startingPoint] && this.cells[endingPoint]) {
            let ladder = new Ladder(index)
            let currentCell = this.cells[startingPoint]
            ladder.createLadder(startingPoint, endingPoint)
            currentCell.attachLadder(ladder)
            return

        }
        throw new Error("Wrong Cell")
    }

    createSnake(index, startingPoint, endingPoint) {
        if (this.cells[startingPoint] && this.cells[endingPoint]) {
            let snake = new Snake(index)
            let currentCell = this.cells[startingPoint]
            snake.create(startingPoint, endingPoint)
            currentCell.attachSnake(snake)
            return

        }
        throw new Error("Wrong Cell")
    }

    print() {
        this.cells.forEach(cell => {
            console.log(cell)
        })
    }

    Start(Players) {
        while (1) {
            Players.forEach(singlePlayer => {
                let diceValue = Dice.rollDice()
                let initialLocation = singlePlayer.currentLocation
                let nextLocation = initialLocation + diceValue
                if (nextLocation > BOARD_SIZE) {
                    nextLocation = initialLocation
                    return
                }
                if (nextLocation == BOARD_SIZE) {
                    console.log(`${singlePlayer.name} wins the game`)
                    process.exit(1)
                }
                else {
                    let cell = this.cells[nextLocation]
                    console.log("Currently on Cell", cell)
                    while (cell.hasLadder() || cell.hasSnake()) {
                        if (cell.hasLadder()) {
                            console.log("Ladder Encountered", cell)
                            nextLocation = nextLocation + cell.ladder.endingPoint
                            cell = this.cells[nextLocation]
                        }
                        if (cell.hasSnake()) {
                            console.log("Snake Encountered", cell)
                            nextLocation = nextLocation - cell.snake.endpoint
                            cell = this.cells[nextLocation]
                        }

                    }
                }
                console.log(`${singlePlayer.name} rolled a ${diceValue} and moved from ${initialLocation} to ${nextLocation}`)
                singlePlayer.saveLocation(nextLocation)
            })
        }
    }


    static getInstance() {
        if (!instance) {
            return new Board()
        }
        return instance
    }

}

module.exports = { Board }