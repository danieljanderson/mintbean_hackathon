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

}
module.exports = Player;