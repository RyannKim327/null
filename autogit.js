function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal to the range
  const scaledRandom = randomDecimal * (max - min + 1);

  // Truncate the decimal to get a whole number within the range
  const randomNumber = Math.floor(scaledRandom) + min;

  return randomNumber;
}

// Example usage:
const minRange = 1; // Minimum value of the range
const maxRange = 100; // Maximum value of the range

const randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum);
