function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Map the decimal to the range between min and max
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Return the integer value of the random number
  return Math.floor(randomNumber);
}

// Example usage: Generate a random number between 1 and 100
const randomNum = getRandomNumber(1, 100);
console.log(randomNum);
