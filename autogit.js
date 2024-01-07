function getRandomNumber(min, max) {
  // Calculate the range
  const range = max - min;

  // Generate a random number between 0 and 1
  const random = Math.random();

  // Scale the random number to the desired range and round it off
  const randomNumber = Math.floor(random * range) + min;

  // Return the generated random number
  return randomNumber;
}

// Example usage: Generate a random number between 1 and 10
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
