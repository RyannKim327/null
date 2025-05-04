function calculateMean(numbers: number[]): number {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total / numbers.length;
}

// Example usage:
const nums = [10, 20, 30, 40, 50];
const mean = calculateMean(nums);
console.log(mean); // Outputs: 30
function calculateMean(numbers: number[]): number | null {
  if (numbers.length === 0) return null;
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total / numbers.length;
}
