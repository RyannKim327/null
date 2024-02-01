function getRandomNumber(min, max) {
  // Calculate the range of possible values
  var range = max - min + 1;
  
  // Generate a random number within the range
  var random = Math.floor(Math.random() * range) + min;
  
  // Return the random number
  return random;
}

// Usage example:
var min = 1;
var max = 10;
var randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
