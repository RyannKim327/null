function getRandomNumber(min, max) {
  // Generate a random decimal number between 0 and 1
  let randomDecimal = Math.random();

  // Scale the decimal to the desired range
  let randomNumber = randomDecimal * (max - min + 1) + min;

  // Convert the decimal to an integer
  randomNumber = Math.floor(randomNumber);

  // Return the random number
  return randomNumber;
}

// Example usage: Generate a random number between 1 and 10
let randomNum = getRandomNumber(1, 10);
console.log(randomNum);
