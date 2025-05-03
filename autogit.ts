function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0; // handle empty list
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// Example usage:
const nums = [10, 20, 30, 40];
const mean = calculateMean(nums);
console.log(mean);  // Output: 25
