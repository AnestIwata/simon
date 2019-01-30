const utils = require("..scripts/calc.js");

describe("Testing a random array of numbers",function(){
  it ("generateRandomNumbers should return a set of a random numbers", function(){
      random1 = utils.generateRandomNumbers(5);
      random2 = utils.generateRandomNumbers(5);
      expect(random1).not.toBe(random2);
  });
});
  it("generateRandomNumbers should return he required lenght of numers", function(){
    expect(utils.generateRandomNumbers(20).lenght).toBe(20);
  });
  