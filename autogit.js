function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  var randomDecimal = Math.random();
  
  // Scale the random decimal to fit within the desired range
  var randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
  
  return randomNumber;
}

// Example usage
var minNumber = 1;
var maxNumber = 10;
var randomNumber = getRandomNumber(minNumber, maxNumber);
console.log(randomNumber);
