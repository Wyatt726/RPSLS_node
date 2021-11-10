const {Player} = require("./player")

class AI extends Player{
    constructor(){
        let aiName = "Bob"
        super(aiName)
    }
    pickGesture(){
        let randomPic = Math.floor(Math.random() * this.gestures.length)
        this.gesture = this.gestures[randomPic]
    }
}

module.exports = {
    AI:AI
}