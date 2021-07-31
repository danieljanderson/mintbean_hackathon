const Shoe = require('./shoe')
const Player = require('./player')
const Dealer = require('./dealer')

class Blackjack{
    
    constructor()
    {
    this._players = []
    this._dealer = new Dealer()
    this._pot =[]
    }
    //! getters
    get players(){
        return this._players
    }
    get dealer(){
        return this._dealer
    }
    get pot(){
        return this._pot
    }
    //! setters
    set players(newPlayers){
        this._players = newPlayers
    }
    set dealer(newDealer){
        this._dealer = newDealer
    }
    set pot(newPot){
        this._pot = newPot
    }
    

    //it gets a array of player names and then makes new player objects of those players
    createPlayers(numPlayers){
        let listOfPlayers = []
        for (let i = 0; i<=numPlayers.length-1;i++){
            let player = new Player()
           
            /*the array name and stringname are making it into a string since the data type that
            is recieved is an array.
            */
            let arrayName = numPlayers[i]
            let stringName = arrayName.toString()
            player.name = stringName
            listOfPlayers.push(player)
        }
        this._players = listOfPlayers
    }

}
module.exports = Blackjack ;