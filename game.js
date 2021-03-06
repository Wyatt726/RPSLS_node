"use strict"

const {Human} = require('./human')
const {AI} = require('./ai')
const prompt = require("prompt-sync")();
const {Player} = require("./player");
const human = require('./human');
const ai = require('./ai');

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

    
    playRound(){
        while (this.playerOne.points < 2 && this.playerTwo.points < 2){
            
            console.log("Player 1: ");
            this.playerOne.pickGesture()
                
            console.log("Player 2: ");    
            this.playerTwo.pickGesture()

                if(this.playerOne.gesture === this.playerTwo.gesture){
                    console.log(this.playerOne.name + " has chosen " + this.playerOne.gesture + " And " + this.playerTwo.name + " has chosen " + this.playerTwo.gesture + ". Its a tie, play again.")
                }
                else if(this.playerOne.gesture == "Rock" && (this.playerTwo.gesture == "Scissors" || this.playerTwo.gesture == "Lizard")){
                this.playerOneWins()
                }
                else if(this.playerOne.gesture == "Paper" && (this.playerTwo.gesture == "Rock" || this.playerTwo.gesture == "Spock")){
                this.playerOneWins()    
                }
                else if(this.playerOne.gesture == "Scissors" && (this.playerTwo.gesture == "Paper" || this.playerTwo.gesture == "Lizard")){
                this.playerOneWins()    
                }
                else if(this.playerOne.gesture == "Lizard" && (this.playerTwo.gesture == "Spock" || this.playerTwo.gesture == "Paper")){
                this.playerOneWins()    
                }
                else if(this.playerOne.gesture == "Spock" && (this.playerTwo.gesture == "Scissors" || this.playerTwo.gesture == "Rock")){
                this.playerOneWins()    
                }        
                else {
                    console.log(this.playerOne.name + " has chosen " + this.playerOne.gesture + " And " + this.playerTwo.name + " has chosen " + this.playerTwo.gesture + ". Player two wins this round.")
                    this.playerTwo.points += 1;
                    console.log("Player two has " + this.playerTwo.points + " wins");
                }
    }   
}

nameWinner(){
    if (this.playerOne.points == 2) {
        console.log("Player One Wins!")
    }   
    else if (this.playerTwo.points == 2) {
        console.log("Player Two Wins!")
    }
}

playerOneWins(){
    console.log(this.playerOne.name + " has chosen " + this.playerOne.gesture + " And " + this.playerTwo.name + " has chosen " + this.playerTwo.gesture + ". Player one wins this round.")    
    this.playerOne.points += 1;
    console.log("Player one has " + this.playerOne.points + " wins and Player two has " + this.playerTwo.points + " wins");
}
  

    runGame(){
        this.displayRules()
        this.howManyPlayers()
        this.playRound()
        this.nameWinner()
    }
}



module.exports = {
    Game:Game
}