const Shoe = require('./shoe')



class Blackjack{
    
    constructor()
    {
    // this stores the players data
    this._shoe = new Shoe()
    this._players = []
    //this stores dealer data
    
    // this stores the betting data
    this._pot =[]
    }

   
   
    //! getters
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
    }
    deal(player,dealer,numDeck){
        this._shoe.createShoe(numDeck)
        console.log("this is a shoe "+ this._shoe)
        let tempShoe = this._shoe
        console.log("still is a shoe "+ tempShoe)
        tempShoe.shuffleDeck()
        
        for(let i = 0;i<2;i++){
            let  playerCard = tempShoe.draw()
            player.draw(playerCard)
            let dealerCard = tempShoe.draw()
            dealer.draw(dealerCard)

        }
        this._shoe = tempShoe
        dealer.hand[1].flipOver = false



    }
    
}
module.exports = Blackjack ;