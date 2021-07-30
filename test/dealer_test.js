const Dealer = require('../src/dealer')
const chai = require('chai')
const expect = chai.expect
describe("not testing the whole dealer object because it is a subclass of the player class",()=>{
    it("it will create a new dealer",()=>{
        let Daniel = new Dealer()
        expect(Daniel.name).to.deep.equal("Dealer")
    })
})