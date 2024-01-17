function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  var randomDecimal = Math.random();
  
  // Scale the random decimal to the desired range
  var randomInRange = randomDecimal * (max - min) + min;
  
  // Round down the number to the nearest whole number
  var randomInteger = Math.floor(randomInRange);
  
  // Return the random number
  return randomInteger;
}

// Usage example
var randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
