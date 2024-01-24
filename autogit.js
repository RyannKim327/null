function getRandomNumber(min, max) {
  // Calculate the range of the numbers
  const range = max - min + 1;
  
  // Generate a random number between 0 and the range
  const randomNumber = Math.floor(Math.random() * range);
  
  // Return the random number within the specified range
  return randomNumber + min;
}

// Usage example: generate a random number between 1 and 10
const randomNum = getRandomNumber(1, 10);
console.log(randomNum);
