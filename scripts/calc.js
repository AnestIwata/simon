var sequence;
function generateRandomNumbers(length){
  sequence = [];
  for (var i = 0; i < length; i++) { //Creates an array of numbers from 1 to 4 depending on length
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
  return sequence;
};

module.exports = generateRandomNumbers();