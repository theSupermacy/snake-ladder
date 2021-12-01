class Ladder {
    constructor(id) {
        this.id = id
        this.startingPoint = null
        this.endingPoint = null
    }

    createLadder(startingPoint, endingPoint) {
        if (startingPoint > endingPoint) {
            throw new Error("Wrong type of Ladder")
        }

        this.startingPoint = startingPoint
        this.endingPoint = endingPoint
    }

}





module.exports = {
    Ladder
}