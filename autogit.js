function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // Scale the decimal number to the desired range
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the random number to an integer and return it
  return Math.floor(randomNumber);
}

// Example usage: generate a random number between 1 and 10
const randomNum = getRandomNumber(1, 10);
console.log(randomNum);
