function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  var randomDecimal = Math.random();

  // Scale the decimal to the desired range
  var randomNumber = randomDecimal * (max - min + 1) + min;

  // Return the final random number (use Math.floor if an integer is desired)
  return Math.floor(randomNumber);
}
var result = getRandomNumber(1, 100);
console.log(result); // Output: a random number between 1 and 100 inclusive
