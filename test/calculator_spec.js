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

  it('should add two numbers', function() {

  });

});