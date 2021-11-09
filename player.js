"use strict"

// const gesture = require('./gesture');

class Player {
    constructor(name) {
        this.name = name;
    }
}

// displayInfo() {
//     console.log("You are Player 1.")
// }


class Player1 extends Player {
    constructor(name) {
        super(name);

        this.name = "Player 1";
    }
}

class Player2 extends Player {
    constructor(name) {
        super(name);

        this.name = "Player 2";
    }
}

class Computer extends Player {
    constructor(name) {
        super(name);

        this.name = "Computer";
    }
}




// exports example
// module.exports.player = player; 