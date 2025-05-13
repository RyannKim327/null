function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0;  // or handle empty array as you prefer

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
const data = [10, 20, 30, 40, 50];
console.log(calculateMean(data));  // Outputs: 30
