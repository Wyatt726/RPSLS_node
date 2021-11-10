"use strict"

const {Human} = require('./human')
const {AI} = require('./ai')
const prompt = require("prompt-sync")();

class Game {
    constructor() {
        this.playerOne = new Human();
        this.playerTwo = null;
    }

    displayRules() {
        console.log("How many players? \n1 vs. 1 or 1 vs. Computer?"); 
        console.log("Rules of the game."); 
        console.log("Choose your gesture:  Rock, Paper, Scissor, Lizard, Spock"); 
        console.log("Type gesture into field"); 
        console.log("Best of 3 series.  Race to 2 wins!"); 
    }

    howManyPlayers() {

        let enterPlayers = (prompt("Play Computer or Human? Enter Human or Computer: ").toLowerCase());
            if (enterPlayers == "human") {
               this.playerTwo = new Human()
                console.log("you selected 2 players");
            }
            else if (enterPlayers == "computer") {
                this.playerTwo = new AI()
                console.log("you selected 1 players");
            }
            else {
                console.log("not a valid selection");
                howManyPlayers; 
            }
        }
    runGame(){
        this.displayRules();
        this.howManyPlayers();
    }
}

// create rules 
// display rules when program is started
// prompt player (1 player / 2 player )
    // if 1 player (game is Player 1 vs computer)
// prompt player (start game?  y/n)
// If no, return to something.. beginning of code
// if yes, prompt player to pick gesture (RPSLS)
// run computer random gesture function 
    // compare player and computer gestures 
    // display winner
    // display series w/l counter
    // repeat player 1 gesture prompt until best 
        // 2/3 satisfied. 





//create walkthru function of displayRules prompting user to enter above info?



            


        





// module.exports.gameRoom = gameRoom;
// module.exports.displayRules = displayRules;
module.exports = {
    Game:Game
}