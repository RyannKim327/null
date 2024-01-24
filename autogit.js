function getRandomNumber(min, max) {
  // Calculate the range size
  var range = max - min + 1;
  
  // Generate a random number within the range
  var randomNumber = Math.floor(Math.random() * range) + min;
  
  return randomNumber;
}

// Example usage
var min = 1;
var max = 10;
var randomNumber = getRandomNumber(min, max);

console.log(randomNumber);
