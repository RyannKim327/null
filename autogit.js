function getRandomNumber(min, max) {
  // Calculate the range by subtracting min from max
  let range = max - min;

  // Generate a random number between 0 and the range
  let randomNumber = Math.random() * range;

  // Add the minimum value to the random number
  randomNumber += min;

  // Return the final random number
  return Math.floor(randomNumber);
}

// Example usage: Generate a random number between 1 and 10
let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
