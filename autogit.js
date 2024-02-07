function getRandomNumber(min, max) {
  // Calculate the range by subtracting the minimum value from the maximum value
  var range = max - min;
  
  // Generate a random number between 0 and the range
  var randomNum = Math.random() * range;
  
  // Shift the random number to the minimum value
  randomNum += min;
  
  // Return the random number
  return Math.floor(randomNum);
}

// Usage example: generate a random number between 1 and 100
var randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
