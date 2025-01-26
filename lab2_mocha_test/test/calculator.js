const assert = require('assert')
const calculator = require('../lab2_mocha_test/app/calculator')

describe("Calculator Tests", function(){
    //Test cases for addition
    describe("Addition Tests", function(){
        it("Adds 5 to 2 in a result of 7 PASS", function(){
            assert.equal(calculator.add(5,2), 7)
        })

        it("Adds 5 to 2 in a result of 8 FAIL", function(){
            assert.notEqual(calculator.add(5,2), 8)
        })
    })

     //Test cases for subtraction
     describe("Addition Tests", function(){
        it("Subtracts 5 to 2 in a result of 3 PASS", function(){
            assert.equal(calculator.sub(5,2), 3)
        })

        it("Subtracts 5 to 2 in a result of 5 FAIL", function(){
            assert.notEqual(calculator.sub(5,2), 5)
        })
    })

     //Test cases for multiplication
     describe("Addition Tests", function(){
        it("Multiplies 5 to 2 in a result of 10 PASS", function(){
            assert.equal(calculator.mul(5,2), 10)
        })

        it("Multiplies 5 to 2 in a result of 12 FAIL", function(){
            assert.notEqual(calculator.mul(5,2), 12)
        })
    })

     //Test cases for division
     describe("Addition Tests", function(){
        it("Divides 10 to 2 in a result of 5 PASS", function(){
            assert.equal(calculator.div(10,2), 5)
        })

        it("Divides 10 to 2 in a result of 2 FAIL", function(){
            assert.notEqual(calculator.div(10,2), 2)
        })
    })
})