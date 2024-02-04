// Function to generate a random number in a given range
function getRandomNumber(min, max) {
  // Compute the difference between the maximum and minimum values
  const range = max - min;
  // Generate a random number between 0 and 1, then scale it up to the range
  const randomNumber = Math.random() * range;
  // Shift the number to the desired range starting point
  const adjustedNumber = randomNumber + min;
  // Convert the number to an integer, if necessary
  const finalNumber = Math.floor(adjustedNumber);

  return finalNumber;
}

// Usage example
const minRange = 1;
const maxRange = 10;
const randomNum = getRandomNumber(minRange, maxRange);
console.log(randomNum);
