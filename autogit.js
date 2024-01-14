function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomNumber = Math.random();
  
  // Scale the random decimal to fit the given range
  const scaledNumber = randomNumber * (max - min + 1);
  
  // Shift the number to the starting point of the range
  const finalNumber = Math.floor(scaledNumber) + min;
  
  return finalNumber;
}
const minNumber = 1;
const maxNumber = 100;

const randomNumber = getRandomNumber(minNumber, maxNumber);
console.log(randomNumber);
