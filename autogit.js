function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal number to the given range
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the random number to an integer and return it
  return Math.floor(randomNumber);
}

// Usage
const min = 1;
const max = 100;
const randomNum = getRandomNumber(min, max);

console.log(randomNum); // Output a random number between 1 and 100
