const prompt = require("prompt-sync")()
const {Player} = require("./player")


class Human extends Player {
    constructor() {
        console.log("Enter Your Name")
        let playerName = prompt()
        super(playerName);

    }

    pickGesture () { 
    // create the funciton for a human to pick a getsture
    console.log("Your turn, pick a gesture!: \nPress 0 for Rock.  \nPress 1 for Paper.  \nPress 2 for Scissors.  \nPress 3 for Lizard.  \nPress 4 for Spock. ")
    let promptGesture = parseInt(prompt());
        if (isNaN(promptGesture)) {
            console.log("Not a number.  Enter relevant number");
            pickGesture();
        }
        else {
            //promptGesture == 1, 2, 3, 4, 5; 
            this.gesture = this.gestures[promptGesture];
        }
        console.log("you played " + this.gesture);
        }
 

    
      
  
        
 
        
  
    }
    // set this.gesture = the choice made by the user



module.exports = {
    Human:Human
}