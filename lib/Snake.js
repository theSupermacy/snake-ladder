



class Snake {
    constructor(id) {
        this.id = id
        this.startingPoint = null
        this.endingPoint = null
    }
    create(startingPoint, endingPoint) {
        if (startingPoint < endingPoint) {
            throw new Error("Wrong type of Snake")
        }
        this.startingPoint = startingPoint
        this.endingPoint = endingPoint
    }
}





module.exports = {
    Snake
}