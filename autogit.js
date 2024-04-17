function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const min = 1;
const max = 100;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
