function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();
  
  // Scale the decimal to the desired range and round it
  const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
  
  return randomNumber;
}

// Example usage
const minNumber = 1;
const maxNumber = 10;
const randomNum = getRandomNumber(minNumber, maxNumber);
console.log(randomNum);
