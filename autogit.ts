function getRandomInRange(min: number, max: number): number {
  // Math.random() returns a float between 0 (inclusive) and 1 (exclusive)
  // Multiply by the size of the range (max - min + 1) for inclusive upper bound
  // Then add the min to shift the range
  return Math.random() * (max - min) + min;
}
function getRandomIntInRange(min: number, max: number): number {
  // This will give an integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
