function getRandomNumber(min, max) {
  // Generate random number between 0 and 1
  var random = Math.random();

  // Scale the number to the given range
  var range = max - min;
  var scaled = random * range;

  // Shift the number to the range's minimum value
  var shifted = scaled + min;

  // Round down to the nearest integer (Optional)
  var result = Math.floor(shifted);

  return result;
}

// Example usage: Generate a random number between 1 and 10
var randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
