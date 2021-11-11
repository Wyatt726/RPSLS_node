"use strict"


class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        // may or may no be needed
        this.gesture = "";
    }
}


module.exports.Player = Player; 