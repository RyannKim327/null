function getRandomNumber(min, max) {
  // Calculate the range of the random number
  let range = max - min;

  // Generate a random number between 0 and range
  let randomNumber = Math.random() * range;

  // Round down the random number and add it to the minimum value
  return Math.floor(randomNumber) + min;
}

// Example Usage
let min = 1;
let max = 10;
let randomNum = getRandomNumber(min, max);
console.log(randomNum);
