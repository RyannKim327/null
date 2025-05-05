function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0; // or handle empty array case as you prefer

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Example usage:
const myNumbers = [10, 20, 30, 40, 50];
const mean = calculateMean(myNumbers);
console.log(mean); // Output: 30
