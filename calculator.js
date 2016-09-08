/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule() {
  let memory;
  let total;

  let calculator = {};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  calculator.load = function(x) {
    this.total = x;
    if(typeof this.total !== 'number') {
      this.total = 0;
    }
    return this.total;
  };


  /**
   * Return the value of `total`
   * @return { Number }
   */

  calculator.getTotal = function() {
    if(this.total === undefined) {
      this.total = 0;
    }
    return this.total;
  };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  calculator.add = function (x) {
    if(typeof x === 'number') {
      this.total += x;
    }
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  calculator.subtract = function (x) {
    if(typeof x === 'number') {
      this.total -= x;
    }
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  calculator.multiply = function (x) {
    if(typeof x === 'number') {
      this.total *= x;
    }
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  calculator.divide = function (x) {
    if(typeof x === 'number') {
      this.total /= x;
    }
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  calculator.recallMemory = function () {
    if(typeof this.memory !== 'number') {
      this.memory = 0;
    }
    return this.memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */

  calculator.saveMemory = function() {
    this.memory = this.total;
  };

  /**
   * Clear the value stored at `memory`
   */

  calculator.clearMemory = function () {
    this.memory = 0;
  };

  /**
   * Validation
   */
return calculator;
}
