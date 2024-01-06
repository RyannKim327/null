function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();
  
  // Scale the decimal to the desired range
  const randomInRange = randomDecimal * (max - min + 1) + min;

  // Truncate the decimal to get an integer value
  const randomInteger = Math.floor(randomInRange);

  return randomInteger;
}

// Usage example
const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
