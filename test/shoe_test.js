const Shoe = require('../src/shoe')
const chai = require('chai')
const expect = chai.expect


describe("Shoe class",()=>{
    it("creates new show",()=>{
       let newShoe = new Shoe()
       newShoe.createShoe(2)
       expect(newShoe.cards.length).to.deep.equal(52*2)
    })
    it("will shuffle cards",()=>{
        it("shuffles the cards",()=>{
            let shuffledCards = new Shoe()
            let nonShuffledCards = new Shoe()
            shuffledCards.createDeck()
            nonShuffledCards.createDeck()
            shuffledCards.shuffleDeck()
            expect(shuffledCards).to.not.deep.equal(nonShuffledCards)   
         })
    })
})