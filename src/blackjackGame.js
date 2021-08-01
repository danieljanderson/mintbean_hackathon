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
    this._pot =[]
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
        //todo place holder for the doubling down 
    }
    playDealer(dealer){
        //todo place holder for the dealers logic
    }
    scoreHand(player){
        let tempPlayer = player
        totalHand(tempPlayer)
        
        function totalHand (player){
            let total = 0
            for (let i = 0; i<player.hand.length;i++){
                total = total + player.hand[i].value
            }
            player.handvalue = total
        }
        
        
    }
    
    hit(player){
        //todo place holder for hit function
    }
    
}
module.exports = Blackjack ;