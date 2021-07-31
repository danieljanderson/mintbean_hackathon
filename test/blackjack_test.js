const Blackjack = require('../src/blackjackGame')
const Shoe = require('../src/shoe')
const Player = require('../src/player')
const Dealer = require('../src/dealer')
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
        Daniel.money= 100
        let game = new Blackjack()
        game.placeBet(Daniel,50)
        expect(Daniel.money).to.deep.equal(50)
        expect(game.pot[0].PlayerName).to.deep.equal("Daniel")
        expect(game.pot[0].bet).to.deep.equal(50)
     
    })
})