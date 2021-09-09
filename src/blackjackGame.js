//!Add a check for 21 after the deal
const Shoe = require('./shoe')



class Blackjack{
    
    constructor()
    {
    // this stores the players data
    this._shoe = new Shoe()
    this._players = []
    //this stores dealer data
    
    // this stores the betting data
    this._pot = 0
    this._blackJack = false
    }

   
   
    //! getters
    get pot(){
        return this._pot
    }
    get dealer(){
        return this._dealer
    }
    get blackJack (){
        return this._blackJack
    }
    //! setters
    set players(newPlayers){
        this._players = newPlayers
    }
    set blackJack(value){
        this._blackJack = value
    }
    set dealer(newDealer){
        this._dealer = newDealer
    }
    set pot(newPot){
        this._pot = newPot
    }
    
    placeBet(player,amount){
        
        player.money = player.money - amount
        this._pot = amount
    }
    deal(player,dealer,numDeck){
        this._shoe.createShoe(numDeck)
      
        let tempShoe = this._shoe
        
        tempShoe.shuffleDeck()
        
        for(let i = 0;i<2;i++){
            let  playerCard = tempShoe.draw()
            player.draw(playerCard)
            let dealerCard = tempShoe.draw()
            dealer.draw(dealerCard)

        }
        
        this._shoe = tempShoe
        dealer.hand[1].flipOver = true
    }
    isSplit(player){
        if(player.hand[0].face===player.hand[1].face){
            return true
        }
        else{
            return false
        }
    }
    isBlackjack(player){
        if(player.handvalue===21 && player.hand.length===2){
            return true
        }
        else{
            return false
        }
    }
    doubleDown(player){
        player.money = player.money - this.pot
        this.pot = this.pot * 2
        
    }
    playDealer(dealer){
        this.scoreHand(dealer)
        while(dealer.handvalue<=16)
        {
            let tempShoe = this._shoe
            let dealerCard = tempShoe.draw()
            dealer.draw(dealerCard)

        }
     
    }
    scoreHand(player){
        let tempPlayer = player
        let aceCount = 0
        totalHand(tempPlayer)
        for(var i=0;i<aceCount;i++){
            if (tempPlayer.handvalue > 21){
                tempPlayer.handvalue = tempPlayer.handvalue- 10
                
            }
        
        }
        
        function totalHand (player){
            let total = 0
            for (let i = 0; i<player.hand.length;i++){
                if(player.hand[i].face==='Ace'){
                    aceCount++
                }
                
                total = total + player.hand[i].value
            }
            player.handvalue = total
        }
        
        
    }
    hit(player){
        let tempShoe = this._shoe
        let playercard = tempShoe.draw()
        player.draw(playercard)

    }
    
    

    
}
module.exports = Blackjack ;