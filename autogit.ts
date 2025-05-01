function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);   // Round up min
  max = Math.floor(max);  // Round down max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
