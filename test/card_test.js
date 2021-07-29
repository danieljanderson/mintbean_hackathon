const Card = require('../src/card')
const chai = require('chai')
const expect = chai.expect

describe("testing card class",()=>{
    it("set and get the suit",()=>{
        let card = new Card()
        card.suit = "Clubs"
        expect(card.suit).to.deep.equal("Clubs")
    })
    it("it will set and get the face",()=>{
        let card = new Card()
        card.face="Jack"
        expect(card.face).to.deep.equal("Jack")
    })
    it("it will get the value of the card",()=>{
        let card = new Card()
        card.value = 11
        expect(card.value).to.deep.equal(11)
    })
    it("it will get and set flipover",()=>{
        let card = new Card()
        card.flipOver = true
        expect(card.flipOver).to.deep.equal(true)
    })
    it("it will set and then get the image",()=>{
        let card = new Card()
        card.image = "hi"
        expect(card.image).to.deep.equal("hi")
    })
    it("it will get the cards color",()=>{
        let card = new Card()
        card.color= "brown"
        expect(card.color).to.deep.equal("brown")
    })

})