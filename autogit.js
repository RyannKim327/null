// Function to generate a random number in a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
var minRange = 1;
var maxRange = 10;

var randomNumber = getRandomNumber(minRange, maxRange);
console.log(randomNumber);
