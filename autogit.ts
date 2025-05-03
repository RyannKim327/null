function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);  // Round up to the nearest integer
  max = Math.floor(max); // Round down to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
