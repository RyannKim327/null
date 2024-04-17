function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;
  return mean;
}

const numbers = [3, 6, 9, 12, 15];
const mean = calculateMean(numbers);
console.log(mean);
