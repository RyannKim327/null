function getRandomInt(min: number, max: number): number {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate random integer between min and max inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
