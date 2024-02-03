function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the decimal to the desired range
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the decimal to an integer
  return Math.floor(randomNumber);
}

// Example usage
const minRange = 1;
const maxRange = 10;
const randomNum = getRandomNumber(minRange, maxRange);

console.log(randomNum);
