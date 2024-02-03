function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  var randomDecimal = Math.random();

  // Scale the random decimal to the desired range
  var randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the random number to an integer
  return Math.floor(randomNumber);
}

// Usage example
var minRange = 1;
var maxRange = 100;
var randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum);
