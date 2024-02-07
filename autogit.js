function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Example usage
var minRange = 1;
var maxRange = 100;

var randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum);
