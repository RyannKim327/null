function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
function getRandomIntegerInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntegerInRange(1, 10));  // Random integer from 1 to 10
