

let Players = []


class Player {
    constructor(name) {
        this.name = name
        this.currentLocation = 0
    }

    saveLocation(location) {
        this.currentLocation = location
    }
}


function createPlayer(name) {
    Players.push(new Player(name))
}




module.exports = { Players, createPlayer }