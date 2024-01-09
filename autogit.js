function generateRandomNumber(min, max) {
  // Calculate the random number within the range
  var randomNumber = Math.random() * (max - min) + min;

  // Round the number to an integer
  randomNumber = Math.floor(randomNumber);

  // Return the generated random number
  return randomNumber;
}

// Usage example
var min = 1; // Minimum value (inclusive)
var max = 100; // Maximum value (inclusive)

var randomNumber = generateRandomNumber(min, max);
console.log(randomNumber);
