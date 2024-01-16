function getRandomNumber(min, max) {
  // Calculate the difference between max and min
  const range = max - min;

  // Generate a random number between 0 and range
  const random = Math.random() * range;

  // Apply the offset to the random number to adjust the range
  const number = random + min;

  // Return the final random number
  return Math.floor(number);
}
const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);
