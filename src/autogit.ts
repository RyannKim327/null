function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
const randomNum = getRandomNumberInRange(1, 10);
console.log(randomNum); // e.g., 3.764123456789
function getRandomIntegerInRange(min: number, max: number): number {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt = getRandomIntegerInRange(1, 10);
console.log(randomInt); // e.g., 4
