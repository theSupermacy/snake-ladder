var Board = require('./lib/Board').Board

var {
    createPlayer,
    Players
} = require('./lib/Player')


function main() {
    let board = Board.getInstance()
    board.initialize()
    let numberOfLadder = 1
    for (let i = 0; i < numberOfLadder; i++) {
        startingPoint = 2
        endingPoint = 4
        board.createLadder(i, startingPoint, endingPoint)
    }
    let numberOfSnake = 1
    for (let i = 0; i < numberOfSnake; i++) {
        startingPoint = 7
        endingPoint = 3
        board.createSnake(i, startingPoint, endingPoint)
    }

    let numberOfPlayer = 1
    for (let i = 0; i < numberOfPlayer; i++) {
        createPlayer("rahul")
    }

    board.print()
    board.Start(Players)




}




main()