var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    const result = calculator.runningTotal;
    assert.equal(result, 5)
  })

  it('can subtract', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('can multiply two numbers together', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('can divide two numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 25)
  })

  it('can chain multiple operations together', function() {
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 14)
  })

  it('can clear the running total wihtout affecting the calculation', function() {
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(10);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.clearClick(6);
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 24)
  })

});
