"use strict"

// const {Human} = require("./human")

// const gesture = require('./gesture');

class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        // may or may no be needed
        this.gesture = "";
    }
}

// exports example
module.exports.Player = Player; 