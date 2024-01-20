function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal number to the desired range
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the scaled number to a whole number (integer)
  return Math.floor(randomNumber);
}

// Example usage: generating a random number between 1 and 10
const result = getRandomNumber(1, 10);
console.log(result);
