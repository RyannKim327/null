function getRandomNumber(min, max) {
  // Calculate the range of the numbers
  var range = max - min + 1;

  // Generate a random number from 0 to range - 1
  var random = Math.floor(Math.random() * range);

  // Add the random number to the minimum value to get a number within the range
  var result = min + random;

  return result;
}
var randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
