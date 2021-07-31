// Shoe is a subclass of deck
const Deck = require('./deck')

class Shoe extends Deck{
    
    constructor(){
        super()
        this._cards = []
    }
    get cards(){
        return this._cards
    }
    set cards(newDeck){
        this._cards = newDeck
    }
    //takes a argument of numOfDeck if none is give it will make a shoe of 1 deck.
    createShoe(numOfDeck){
        let tempShoe =[]
        for(let i = 0; i<numOfDeck; i++){
            let tempDeck = new Deck()
            tempDeck.createDeck()
            tempShoe= tempShoe.concat(tempDeck.cards)
        }
        this._cards = tempShoe

    }
}
module.exports = Shoe