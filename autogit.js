function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
