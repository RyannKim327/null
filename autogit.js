function getRandomNumber(min, max) {
  // Calculate the range
  const range = max - min;

  // Generate a random number between 0 and 1, and multiply it by the range
  const randomNum = Math.random() * range;

  // Shift the random number to match the desired range
  const result = randomNum + min;

  // Round down the result to the nearest whole number using Math.floor()
  return Math.floor(result);
}

// Usage example
const minRange = 1;
const maxRange = 10;

const randomNumber = getRandomNumber(minRange, maxRange);
console.log(randomNumber);
