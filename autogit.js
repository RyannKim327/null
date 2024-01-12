function getRandomNumber(min, max) {
  // Calculate the range of the desired random numbers
  const range = max - min + 1;

  // Generate a random number between 0 and range - 1
  const randomNumber = Math.floor(Math.random() * range);

  // Add the minimum value to offset the range
  return randomNumber + min;
}

// Example usage
const minNumber = 1;
const maxNumber = 100;
const randomNum = getRandomNumber(minNumber, maxNumber);
console.log(randomNum);
