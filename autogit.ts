function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty list");
  }
  
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
console.log(calculateMean(nums)); // Output: 3
