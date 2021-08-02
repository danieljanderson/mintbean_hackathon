
const Dealer = require('../src/dealer')
const Card = require('../src/card')
const Blackjack = require('../src/blackjackGame')
const Player = require('../src/player')
const chai = require('chai')
const expect = chai.expect

describe("testing blackjack",()=>{

   
    it("it will place one persons bet",()=>{
        let Daniel = new Player("Daniel")
        let game = new Blackjack()
        Daniel.money= 100
        game.placeBet(Daniel,50)
        expect(Daniel.money).to.deep.equal(50)
        expect(game.pot).to.deep.equal(50)
        
     
    })
    
    it("it will deal cards",()=>{
         let Daniel = new Player("Daniel")
         let dealer = new Dealer()
         let game = new Blackjack()
         game.deal(Daniel,dealer,3)
         expect(Daniel.hand.length).to.deep.equal(2)
         expect(dealer.hand[1].flipOver).to.deep.equal(true)   

    })
    it("it will allow me to split",()=>{
        let Daniel = new Player("Daniel")
     let card1 = new Card()
        let card2 = new Card()
        card1.face="queen"
        card2.face="queen"
        Daniel.hand = [card1,card2]
        console.log(Daniel)
        let game = new Blackjack()
        expect(game.isSplit(Daniel)).to.deep.equal(true)

    })
    it("it will not allow me to split",()=>{
        let Daniel = new Player("Daniel")
     let card1 = new Card()
        let card2 = new Card()
        card1.face="queen"
        card2.face="King"
        Daniel.hand = [card1,card2]
        console.log(Daniel)
        let game = new Blackjack()
        expect(game.isSplit(Daniel)).to.deep.equal(false)

    })
    it( "it will tell me I have blackjack",()=>{
        let Daniel = new Player("Daniel")
        let card1 = new Card()
        let card2 = new Card()
        let game = new Blackjack()
        card1.value = 11
        card2.value = 10
        Daniel.hand = [card1,card2]
        Daniel.handvalue = 21
        expect(game.isBlackjack(Daniel)).to.deep.equal(true)
    })
    it( "it will total the hand",()=>{
        let Daniel = new Player("Daniel")
        let card1 = new Card()
        let card2 = new Card()
        let game = new Blackjack()
        card1.value = 11
        card2.value = 10
        Daniel.hand = [card1,card2]
        Daniel.handvalue = 21
        game.scoreHand(Daniel)
        expect(Daniel.handvalue).to.deep.equal(21)
    })
    it("it will double down",()=>{
        let Daniel = new Player("Daniel")
        let game = new Blackjack()
        Daniel.money= 100
        game.placeBet(Daniel,50)
        game.doubleDown(Daniel)
        expect(Daniel.money).to.deep.equal(0)
        expect(game.pot).to.deep.equal(100)
    })
    it("it the players total will be 13 with three aces",()=>{
        let Daniel = new Player("Daniel")
        let card1 = new Card()
        let card2= new Card()
        let card3= new Card()
        let game = new Blackjack()
        card1.face = 'Ace'
        card1.value = 11
        card2.face = 'Ace'
        card2.value = 11 
        card3.face = 'Ace'
        card3.value = 11
        Daniel.hand = [card1,card2,card3]
        game.scoreHand(Daniel)
        expect(Daniel.handvalue).to.deep.equal(13)
    })
    
})