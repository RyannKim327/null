function getRandomNumber(min, max) {
  // Calculate the range
  const range = max - min + 1;
  
  // Generate a random number within the range
  const randomNumber = Math.floor(Math.random() * range) + min;
  
  return randomNumber;
}

// Usage example
const minRange = 1;
const maxRange = 10;

const randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum); // Output: A random number between 1 and 10
