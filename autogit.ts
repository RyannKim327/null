function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0; // or handle as appropriate
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Usage:
const nums = [10, 20, 30, 40, 50];
const mean = calculateMean(nums);
console.log("Mean:", mean); // Output: Mean: 30
