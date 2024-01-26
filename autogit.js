// Function to generate a random number within a given range
function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  var randomDecimal = Math.random();

  // Scale the range to the desired min and max values
  var randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the decimal to an integer by using Math.floor()
  return Math.floor(randomNumber);
}

// Usage Example
var minRange = 1; // Minimum value of the range
var maxRange = 10; // Maximum value of the range

var randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum); // Print the random number to the console
