function getRandomNumber(min, max) {
  // Calculate the range of possible values
  const range = max - min + 1;
  
  // Generate a random number between 0 and the range
  const randomValue = Math.floor(Math.random() * range);
  
  // Adjust the random value based on the minimum value
  const result = randomValue + min;
  
  return result;
}

// Example usage
const minRange = 1;   // minimum value
const maxRange = 10;  // maximum value

const randomNumber = getRandomNumber(minRange, maxRange);
console.log(randomNumber);  // Outputs a random number between 1 and 10
