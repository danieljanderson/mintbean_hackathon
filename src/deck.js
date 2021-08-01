const Card = require('./card')
class Deck {
    constructor(){
    this._cards = []
    // this would give you a 52 card deck on every new instance
    //this.createDeck()
    }
    get cards(){
        return this._cards
    }
    set cards(newDeck){
        this._cards = newDeck
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
        this._cards = newDeck

        //formCard is a helper function 
        function formCard(suit,value){
            let singleCard = new Card()
            singleCard.suit = suit
            singleCard.face = value
            singleCard.value = 0
            singleCard.flipOver = true
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
    shuffleDeck(){
        let notShuffledDeck = this._cards
        let shuffledCards = []
        while (notShuffledDeck.length!==0){
            var rIndex= Math.floor(notShuffledDeck.length * Math.random())
            shuffledCards.push(notShuffledDeck[rIndex])
             notShuffledDeck.splice(rIndex,1)
        }
        this._cards = shuffledCards
    }
    // this gives a card 
    draw(){
        let oldDeck = this._cards
        let card = oldDeck.shift()
        //console.log("inside the draw function and card is "+card)
        this._cards= oldDeck
        return card
     }
     
    
    
    
    

}
module.exports = Deck