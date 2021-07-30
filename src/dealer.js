const Player = require('./player')
class Dealer extends Player{
    constructor(name = "Dealer"){
        super(name)
    }
}
module.exports = Dealer