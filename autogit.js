function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the decimal to the desired range
  const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;

  return randomNumber;
}

// Example usage
const minRange = 1;
const maxRange = 100;

const randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum);
