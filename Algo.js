// ALGORITHM

// 1.  Create class of moves (will be objects )
    // a.  instantiate as objects (RPSLS)
    //      could be wrong, variables instead?
 
// 2.  Create player class (child classes below)(use defaults)
    // a.  human players (1 and 2)  (children)
    // b.  AI players (child)
        // i.  add W/L counter for both players.
        // ii.  Must win atleast 2/3 series. 

// 3.  Create the functions to perform logic
    // a.  Try create re-useable function if possible 
    // b.  What moves beat what.
    // c.  Implement win counter.  

    //     
    
// 4.  Create "BattleField" file and/or class to carry 
//     out RPSLS logic functios.
    // -- Run game here. 
    // a.  Create logic here? 
        //  setup independent (outside) RPSLS logic?
            // or code out every RPSLS scenario?
            // tie? player 1 wins?  else...


// GAMEPLAY
    // display rules 
    // select player vs. player, player vs. ai
    // present move options to player 
    // throw move
    // program runs, determines winner
    // display winner of round 
    // check series w/l,  win yet?
    // if no, display current score  
    // if yes / display winner  
    // play again?
    
    
// INDEX
    // holds main function (Game/Battfield Class)
    // Players get instantiated/called/created here.
    // Imports Game Class 

// GAME CLASS
    // Gestures Logic here
    // Rules 
    // Pick players 
    // determine winner 
    // announces winner

// PLAYER
    // asks name (creates child)
    // holds win counter (default = 0)
    // list of held possible gestures here.
    // Imports gestures here

// NOTES
    // create classes first,
    // display rules, test it 
    // create player function, test it
    // create R > P, test it
    // test as you go 