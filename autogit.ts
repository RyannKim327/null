function mean(numbers: number[]): number {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// Example usage:
const nums = [10, 20, 30, 40];
console.log(mean(nums)); // Output: 25
