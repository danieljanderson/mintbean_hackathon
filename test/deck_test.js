const Deck = require('../src/deck')
const chai = require('chai')
const expect = chai.expect

describe("Testing Deck class",()=>{
    it("makes a new Deck",()=>{
        let newDeck = new Deck()
        newDeck.createDeck()
        console.log(newDeck)
        expect(newDeck.cards.length).to.deep.equal(52)
        expect(newDeck.cards[0].suit).to.deep.equal('Clubs')
        expect(newDeck.cards[0].face).to.deep.equal('Ace')
        expect(newDeck.cards[0].flipOver).to.deep.equal(false)
        expect(newDeck.cards[0].image).to.deep.equal('image/ClubsAce.bmp')
        expect(newDeck.cards[0].color).to.deep.equal('Black')
        //testing to see if the the condition check to make Diamands or Hearts is working
        // Diamand check
        expect(newDeck.cards[13].color).to.deep.equal('Red') 
        // Heart Check
        expect(newDeck.cards[26].color).to.deep.equal('Red')
    })
     it("shuffles the cards",()=>{
        let shuffledCards = new Deck()
        let nonShuffledCards = new Deck()
        shuffledCards.createDeck()
        nonShuffledCards.createDeck()
        shuffledCards.shuffleDeck()
        expect(shuffledCards).to.not.deep.equal(nonShuffledCards)
        
     })
})