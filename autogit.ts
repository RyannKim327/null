function getRandomInt(min: number, max: number): number {
  // Make sure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate random int
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
