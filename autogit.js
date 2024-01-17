// Function to generate a random number in a given range
function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  var randomDecimal = Math.random();

  // Scale the random decimal to the range [min, max]
  var randomNum = randomDecimal * (max - min + 1) + min;

  // Remove the fractional part to get an integer
  randomNum = Math.floor(randomNum);

  // Return the generated random number
  return randomNum;
}

// Example usage:
var minRange = 1;
var maxRange = 10;
var randomNumber = getRandomNumber(minRange, maxRange);
console.log(randomNumber);
