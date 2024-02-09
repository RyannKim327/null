function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the decimal to the desired range
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Floor the number to remove the decimal part
  return Math.floor(randomNumber);
}

// Usage example:
const minNum = 10;
const maxNum = 20;
const randomNum = getRandomNumber(minNum, maxNum);
console.log(randomNum);
