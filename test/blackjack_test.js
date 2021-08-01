
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
        expect(game.pot[0].PlayerName).to.deep.equal("Daniel")
        expect(game.pot[0].bet).to.deep.equal(50)
        
     
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
    
})