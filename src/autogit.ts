function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array must not be empty");
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
const mean = calculateMean(nums);
console.log(mean);  // Output: 3
