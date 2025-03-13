function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(calculateMean(numbers)); // Output: 3
function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}
function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  return sum / numbers.length;
}
const calculateMean = (numbers: number[]): number => 
  numbers.length ? numbers.reduce((a, b) => a + b) / numbers.length : 0;
