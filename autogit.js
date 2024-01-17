// Generates a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
// Generates a random integer between min (inclusive) and max (inclusive)
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNum = getRandomNumber(1, 10);
console.log(randomNum); // Output: a random number between 1 and 10

var randomInt = getRandomInteger(1, 10);
console.log(randomInt); // Output: a random integer between 1 and 10
