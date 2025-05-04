function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty array.");
  }
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const mean = sum / numbers.length;
  return mean;
}

// Example usage:
const nums = [10, 20, 30, 40];
const mean = calculateMean(nums);
console.log(mean); // Outputs: 25
