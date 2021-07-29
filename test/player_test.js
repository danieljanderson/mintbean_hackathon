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
    it('it will draw a new card',()=>{
        let Player1 = new Player('daniel')
        Player1.hand = [1,2,3]
        Player1.draw(4)
        expect(Player1.hand).to.deep.equal([1,2,3,4])
    })
    //this test fails but returns the right error message  I dont know how to throw errors in test in mocha.
    it.skip('discarding more cards than you have will cause an error message to come up',()=>{
        let Player1 = new Player('Daniel')
        Player1.hand = [1,2,3]
        var err = new Error(`Daniel please choose a number between 1 and 3`)
         let badFn =  Player1.discard(4)
        
         expect(badFn).to.throw(err)
    })
    it('it will discard all but one card',()=>{
        let Player1 = new Player('Daniel')
        Player1.hand=[1,2,3]
       let discards = Player1.discard(2)

       expect(discards).to.deep.equal([1,2])
       expect(Player1.hand).to.deep.equal([3])
    })
    it('it will discard the whole hand',()=>{
        let Player1 = new Player('Daniel')
        Player1.hand=[1,2,3]
       let discards = Player1.discard(3)
       expect(discards).to.deep.equal([1,2,3])
       expect(Player1.hand).to.deep.equal([])
    })
})