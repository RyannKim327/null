function getRandomNumber(min, max) {
  // Calculate the range
  const range = max - min + 1;

  // Generate a random number within the range
  const randomNumber = Math.floor(Math.random() * range) + min;

  return randomNumber;
}

// Usage example
const minNumber = 1;
const maxNumber = 10;
const generatedNumber = getRandomNumber(minNumber, maxNumber);
console.log(generatedNumber);
