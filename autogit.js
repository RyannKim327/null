function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  let randomDecimal = Math.random();

  // Convert the decimal to a number in the desired range
  let randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;

  return randomNumber;
}

// Example usage: generate a random number between 1 and 10
let number = getRandomNumber(1, 10);
console.log(number);
