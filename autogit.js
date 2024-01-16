function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Calculate the random number within the range
  const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;

  return randomNumber;
}

// Usage examples
console.log(getRandomNumber(1, 10));   // Generates a random number between 1 and 10
console.log(getRandomNumber(50, 100)); // Generates a random number between 50 and 100
