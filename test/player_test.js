const Player = require('../src/player')
const chai = require('chai')
const expect = chai.expect

describe('testing the player object',()=>{
    it('will make a new player and return his name',()=>{
        let daniel = new Player('Daniel')
        expect(daniel.name).to.deep.equal('Daniel')
    })
    it('this sets and returns a hand',()=>{
        let Player1 = new Player('daniel')
        const hand = [1,2,3]
        Player1.hand= hand
        expect(Player1.hand).to.deep.equal([1,2,3])
    })
    it('it gets the hand value',()=>{
        let Player1 = new Player('daniel')
        const value = 12
        Player1.handvalue = value
        expect(Player1.handvalue).to.deep.equal(12)
    })
    it('it gets the total money',()=>{
        let Player1 = new Player('daniel')
        const money = 10000
        Player1.money = money
        expect(Player1.money).to.deep.equal(10000)
    })
})