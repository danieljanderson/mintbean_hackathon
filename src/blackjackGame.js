const Shoe = require('./shoe')
const Player = require('./player')
const Dealer = require('./dealer')

class Blackjack{
    
    constructor()
    {
    // this stores the players data
    this._players = []
    //this stores dealer data
    this._dealer = new Dealer()
    // this stores the betting data
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
    // createPlayers(numPlayers){
    //     let listOfPlayers = []
    //     for (let i = 0; i<=numPlayers.length-1;i++){
    //         let player = new Player()
           
    //         /*the array name and stringname are making it into a string since the data type that
    //         is recieved is an array.
    //         */
    //         let arrayName = numPlayers[i]
    //         let stringName = arrayName.toString()
    //         player.name = stringName
    //         listOfPlayers.push(player)
    //     }
    //     this._players = listOfPlayers
    // }
    // gets a person object and an amount
    placeBet(player,amount){
        let  bet = {
            PlayerName : player.name,
            bet : amount 
        }
        let tempPot = this._pot
        let money = player.money
            money = money -amount 
            tempPot.push(bet)
            this._pot = tempPot
            
            player.money = money
            
        // this is to find what index the player is in the players array
       // const index = this._players.name.indexOf(player)
        // this is to then access the player object from the players
        //const foundPlayer = this._players[index]
        //const bettingPlayer = foundPlayer
        //const bettingAmount = amount
        // total pot is a copy of this._pot so I am not mutating the actual data
       // let totalPot = this._pot
        //this is to subtract the amount from the persons total money.  in other words
        // if player has a hundred dollars and bets 50 he should have 50 left
        //bettingPlayer.money = bettingPlayer.money-bettingAmount 

        //the bet should be added to the pot with the persons name on it
        //const theBetRecord = {
         //   name: bettingPlayer.name,
           // amount: bettingAmount
       // }
        //totalPot = totalPot.push(theBetRecord)
        //this._pot = totalPot
    }

}
module.exports = Blackjack ;