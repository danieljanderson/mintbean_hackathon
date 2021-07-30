const Card = require('./card')
class Deck {
    constructor(){
    this.cards = []
    }
    createDeck(){
        const SUITS = ['Clubs','Diamands','Hearts','Spades']
        const ORDER_VALUE = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
        let  newDeck=[] 

        for (let i=0;i<SUITS.length;i++){
			for(let j=0;j<ORDER_VALUE.length;j++){
			    var card = formCard(SUITS[i],ORDER_VALUE[j])
			    newDeck.push(card)	
		    	}
        }
        this.cards = newDeck
        //formCard is a helper function 
        function formCard(suit,value){
            let singleCard = new Card()
            singleCard.suit = suit
            singleCard.face = value
            singleCard.value = 0
            singleCard.flipOver = false
            singleCard.image = 'image/'+suit+value+'.bmp'
            if(suit==='Diamands' || suit==='Hearts'){
                singleCard.color = 'Red'
            }
            else{
                singleCard.color = 'Black'
            }
            return singleCard
        }   
    }
    
    
    

}
module.exports = Deck