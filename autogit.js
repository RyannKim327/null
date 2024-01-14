// Function to generate a random number in a given range
function getRandomNumber(min, max) {
  // Calculate the range (inclusive of both min and max)
  const range = max - min + 1;

  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // Scale the random number to the desired range and return it
  return Math.floor(randomNumber * range) + min;
}

// Example usage
const min = 1;
const max = 10;

const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
