function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random number between 1 and 10
var randomNum = getRandomInt(1, 10);
console.log(randomNum);
