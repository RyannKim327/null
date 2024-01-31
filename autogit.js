function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
var randomNumber = getRandomNumber(1, 10);
console.log(randomNumber); // Output: a random number between 1 and 10
