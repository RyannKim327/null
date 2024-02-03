function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  var randomDecimal = Math.random();
  
  // Scale the random decimal to the desired range
  var randomInRange = randomDecimal * (max - min + 1) + min;
  
  // Truncate the decimal to get an integer
  var randomInteger = Math.floor(randomInRange);
  
  return randomInteger;
}
var randomNumber = getRandomNumber(1, 10);
console.log(randomNumber); // Outputs a random number between 1 and 10 (inclusive)
