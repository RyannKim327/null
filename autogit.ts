function calculateMean(numbers: number[]): number {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}

// Example usage:
const data = [10, 20, 30, 40, 50];
const mean = calculateMean(data);
console.log(mean);  // Output: 30
function calculateMean(numbers: number[]): number | null {
  if (numbers.length === 0) {
    return null; // Or handle empty array as you prefer
  }
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}
