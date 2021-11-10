const prompt = require("prompt-sync")()
const {Player} = require("./player")


class Human extends Player {
    constructor() {
        console.log("Enter Your Name")
        let playerName = prompt()
        super(playerName);

    }

    // chooseGesture () { 
    // // create the funciton for a human to pick a getsture
    // let userGestureChoice;
    // let promptGesture = parseInt(prompt("Your turn, pick a gesture!: \nPress 1 for Rock.  \nPress 2 for Paper.  \nPress 3 for Scissors.  \nPress 4 for Lizard.  \nPress 5 for Spock. " ));
    //     if (isNaN(promptGesture)) {
    //         console.log("Not a number.  Enter relevant number");
    //         chooseGesture();
    //     }
    //     else {
    //         promptGesture == 1, 2, 3, 4, 5; 
    //         userGestureChoice = promptGesture;
    //     }
    //     console.log(userGestureChoice);
    //     }
 

    
      
  
        
 
        
  
    }
    // set this.gesture = the choice made by the user



module.exports = {
    Human:Human
}