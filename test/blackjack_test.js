
const Dealer = require('../src/dealer')
const Blackjack = require('../src/blackjackGame')
const Player = require('../src/player')
const chai = require('chai')
const expect = chai.expect

describe("testing blackjack",()=>{
    // it("will create a one person blackjack game",()=>{
    //     let names = ["Daniel"]
    //     let game = new Blackjack()
    //     game.createPlayers(names)
    //     expect(game.players[0].name).to.deep.equal("Daniel")

    // })
    // it("will create a multiplayer, blackjack game",()=>{
    //     let names = ["Daniel","Sarah","Tara","Tami"]
    //     let game = new Blackjack()
    //     game.createPlayers(names)
    //     expect(game.players.length).to.deep.equal(4)
    //     //expect(game.players[2].name).to.deep.equal("Tara")
    // })
    it("it will place one persons bet",()=>{
        let Daniel = new Player("Daniel")
        let game = new Blackjack()
        Daniel.money= 100
        game.placeBet(Daniel,50)
        expect(Daniel.money).to.deep.equal(50)
        expect(game.pot[0].PlayerName).to.deep.equal("Daniel")
        expect(game.pot[0].bet).to.deep.equal(50)
        let dealer = new Dealer()
     
    })
    
    it("it will deal cards",()=>{
         let Daniel = new Player("Daniel")
         let dealer = new Dealer()
         let game = new Blackjack()
         game.deal(Daniel,dealer,3)
         expect(Daniel.hand.length).to.deep.equal(2)
         expect(dealer.hand[1].flipOver).to.deep.equal(false)
        

    })
})