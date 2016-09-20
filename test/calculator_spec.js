const chai = require('chai');
const expect = chai.expect;
const calculator = require('../calculator.js');

describe('calculator module', function() {
  //beforeeach();
  it('should be a revealing module', function() {
    expect(calculator).to.be.a.function;
  });

  it('should return an object literal', function() {
    expect(calculator()).to.be.an.object;
  });

  it('should have a private variable representing the total', function() {
    expect(calculator().total).to.be.undefined;
  });

  it('should have a method to return a stored total value', function() {
    newCalc = calculator();
    expect(newCalc.getTotal).to.exist;
    expect(newCalc.getTotal).to.be.a.function;
    expect(newCalc.getTotal()).to.be.a.number;
  });

  it('should have a method to load a value into the total', function() {
    newCalc = calculator();
    expect(newCalc.load).to.exist;
    expect(newCalc.load).to.be.a.function;
  });

  it('should load a value into the total and return the loaded value', function() {
    newCalc = calculator();
    expect(newCalc.load(4)).to.be.equal(4);
    expect(newCalc.getTotal()).to.be.equal(4);
  });

  it('should not accept values that are not numbers', function() {
    newCalc = calculator();
    expect(newCalc.load.bind(null, 'cat')).to.throw(TypeError);
    expect(newCalc.load.bind(null, null)).to.throw(TypeError);
    expect(newCalc.load.bind(null, undefined)).to.throw(TypeError);
    expect(newCalc.load.bind(null, [3])).to.throw(TypeError);
    expect(newCalc.load.bind(null, { value: 2})).to.throw(TypeError);
  });
});

describe('calculator functions', function() {

  beforeEach(function() {
    newCalc = calculator();
  });

  it('should add two numbers', function() {
    newCalc.load(4);
    newCalc.add(5);
    expect(newCalc.getTotal()).to.equal(9);
    newCalc.add(3);
    expect(newCalc.getTotal()).to.equal(12);
  });

  it('should subtract two numbers', function() {
    newCalc.load(4);
    newCalc.subtract(3);
    expect(newCalc.getTotal()).to.equal(1);
    newCalc.subtract(3);
    expect(newCalc.getTotal()).to.equal(-2);
  });

  it('should multiply two numbers', function() {
    newCalc.load(4);
    newCalc.multiply(3);
    expect(newCalc.getTotal()).to.equal(12);
    newCalc.multiply(-2);
    expect(newCalc.getTotal()).to.equal(-24);
  });

  it('should divide two numbers', function() {
    newCalc.load(8);
    newCalc.divide(2);
    expect(newCalc.getTotal()).to.equal(4);
    newCalc.divide(0);
    expect(newCalc.getTotal()).to.equal(Infinity);
  });

  it('should not accept non-number arguments', function() {
    expect(newCalc.add.bind(null, 'cat')).to.throw(TypeError);
    expect(newCalc.subtract.bind(null, undefined)).to.throw(TypeError);
    expect(newCalc.multiply.bind(null, [3])).to.throw(TypeError);
    expect(newCalc.divide.bind(null, { value: 2})).to.throw(TypeError);
  });

});

describe('memory functions', function(){
  beforeEach(function() {
    newCalc = calculator();
  });

  it('should have a private variable for memory', function() {
    expect(newCalc.memory).to.be.undefined;
  });

  it('should have a method called `recallMemory` which returns its memory value', function() {
    expect(newCalc.recallMemory).to.exist;
    expect(newCalc.recallMemory).to.be.a.function;
    expect(newCalc.recallMemory()).to.be.a.number;
  });

  it('should have a method to save an internal value to memory', function() {
    expect(newCalc.saveMemory).to.exist;
    expect(newCalc.saveMemory).to.be.a.function;
    expect(newCalc.saveMemory).to.not.have.arguments;
    expect(newCalc.saveMemory()).to.be.undefined;
    newCalc.load(4);
    newCalc.saveMemory();
    expect(newCalc.recallMemory()).to.be.equal(4);
  });

  it('should have a method to clear memory', function() {
    expect(newCalc.clearMemory).to.exist;
    expect(newCalc.clearMemory).to.be.a.function;
    newCalc.load(4);
    newCalc.saveMemory();
    newCalc.clearMemory();
    expect(newCalc.recallMemory()).to.be.equal(0);
  });
});