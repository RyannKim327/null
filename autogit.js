function getRandomNumber(min, max) {
  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();
  
  // Scale the decimal to fit the desired range
  const randomInRange = randomDecimal * (max - min) + min;
  
  // Round down to the nearest integer
  const randomInt = Math.floor(randomInRange);

  return randomInt;
}

// Example usage: generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
