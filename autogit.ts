function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0; // handle empty array

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
const sample = [10, 20, 30, 40];
console.log(calculateMean(sample)); // Outputs 25
