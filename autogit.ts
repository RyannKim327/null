function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomValue = randomNumber(1, 10); // generates a random number between 1 and 10
console.log(randomValue);
function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
