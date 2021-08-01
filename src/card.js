class Card{
    // this picture is different than image.  The image is for the src and the is the face of the card.
    constructor(){
    this._suit =''
    this._face =''
    this._value = 0
    this._flipOver= true
    this._image= ''
    this._color=''
    }
    set suit(newSuit){
        this._suit = newSuit
    }
    set face(newFace){
        this._face = newFace
    }
    set value(newValue){
        this._value=newValue
    }
    set flipOver(flip){
        this._flipOver = flip
    }
    set image(newImage){
        this._image = newImage
    }
    set color(newColor){
        this._color=newColor
    }
    get suit(){
        return this._suit
    }
    get face(){
        return this._face
    }
    get value(){
        return this._value
    }
    get flipOver(){
        return this._flipOver
    }
    get image(){
        return this._image
    }
    get color(){
        return this._color

    }
}
module.exports = Card;