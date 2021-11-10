const prompt = require("prompt-sync")()
const {Player} = require("./player")


class Human extends Player {
    constructor() {
        console.log("Enter Your Name")
        let playerName = prompt()
        super(playerName);

    }
    // create the funciton for a human to pick a getsture
    // set this.gesture = the choice made by the user
}


module.exports = {
    Human:Human
}