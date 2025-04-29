function getRandomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
function getRandomIntInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
