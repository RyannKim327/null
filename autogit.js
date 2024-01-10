function getRandomNumber(min, max) {
  // Calculate the range of the numbers
  const range = max - min + 1;
  
  // Generate a random number within the range
  const randomNumber = Math.floor(Math.random() * range) + min;
  
  return randomNumber;
}

// Example usage, generating a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);
