function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the decimal to fit the range
  const scaled = randomDecimal * (max - min + 1);

  // Shift the range to start from the minimum value
  const shifted = scaled + min;

  // Convert the number to an integer and return
  return Math.floor(shifted);
}

// Example usage: generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
