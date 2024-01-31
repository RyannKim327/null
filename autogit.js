// Function to generate a random number in a given range
function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  var randomDecimal = Math.random();
  
  // Scale the random decimal to fit the given range
  var scaledNumber = randomDecimal * (max - min + 1);
  
  // Truncate the decimal to get a whole number
  var randomInteger = Math.floor(scaledNumber);
  
  // Shift the range to match the desired min value
  var randomNumber = randomInteger + min;
  
  return randomNumber;
}

// Generate a random number between 1 and 10
var randomNumberInRange = getRandomNumber(1, 10);

// Log the random number
console.log(randomNumberInRange);
