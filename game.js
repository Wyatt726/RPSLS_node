"use strict"

const player = require("./player")();

const prompt = require("prompt-sync")();


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



function displayRules() {
    console.log("How many players? \n1 vs. 1 or 1 vs. Computer?"); 
    console.log("Rules of the game."); 
    console.log("Choose your gesture:  Rock, Paper, Scissor, Lizard, Spock"); 
    console.log("Type gesture into field"); 
    console.log("Best of 3 series.  Race to 2 wins!"); 
}

//create walkthru function of displayRules prompting user to enter above info?


function howManyPlayers() {
    let user; 
    let opponent;

    let enterPlayers = (prompt("Play Computer or Human? \nEnter Human or Computer"))
        if(enterPlayers = "human") {
            user = player.player1
            opponent = player.player2
        }
        else {
            user = player.player1;
            opponent = player.computer;
        }

        }
            


        





module.exports.gameRoom = gameRoom;
module.exports.displayRules = displayRules;