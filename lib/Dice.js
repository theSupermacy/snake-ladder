function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Dice {
    static rollDice() {
        return randomIntFromInterval(1, 6)
    }
}


module.exports = {
    Dice
}