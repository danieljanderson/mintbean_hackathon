class Player {
    constructor(name){
        this._name = name
        this._hand = []
        this._handvalue = 0
        this._money = 0 
    }
    // Getters 
    get name(){
        return this._name
    }
    get hand(){
        return this._hand
    }
    get handvalue(){
        return this._handvalue
    }
    get money(){
        return this._money
    }
    set name(newName){
        this._name = newName
    }
    // this set the initial hand
    set hand(newHand){
        this._hand = newHand

    }
    // this set the initial hand value
    set handvalue(value){
        this._handvalue = value
    }
    // this sets the initial money value
    set money(cash){
        this._money = cash
    }
    // this draws a new card
    draw(card){
        let newHand = this._hand
        newHand.push(card)
        this._hand = newHand
    }
    // this will discard the arguments amount of cards.  if no argument is passed it will discard 1.
    discard(numbCard){
        let discards = []
        let currentHand = this._hand
        if(numbCard>currentHand.length){
            const error = new Error(`${this._name} please choose a number between 1 and ${this._hand.length}`)
            throw error;
        }
        for (var i = 0;i<=numbCard-1;i++){
            discards.push(currentHand[0])
            
            currentHand.splice(0,1)
          }
          this._hand =currentHand
          return discards
    }

}
module.exports = Player;