function generateFibonacciSeries(limit) {
  const series = [0, 1]; // Initialize the series with the first two Fibonacci numbers

  while (series[series.length - 1] < limit) {
    const nextNumber = series[series.length - 1] + series[series.length - 2];
    series.push(nextNumber);
  }

  return series;
}
function fibonacciSearch(arr, val) {
  const fibSeries = generateFibonacciSeries(arr.length);

  let offset = -1; // Initialize the offset to -1
  let i = fibSeries.length - 1; // Start from the last Fibonacci number in the series

  while (i > 1) {
    const index = Math.min(offset + fibSeries[i - 2], arr.length - 1);

    if (arr[index] < val) {
      i--;
      offset = index;
    } else if (arr[index] > val) {
      i -= 2;
    } else {
      return index; // Return the index if the value is found
    }
  }

  return -1; // Return -1 if the value is not found
}
const arr = [1, 5, 12, 26, 37, 42, 56, 68, 79, 85, 91];
const value = 37;

const index = fibonacciSearch(arr, value);
if (index !== -1) {
  console.log(`Value ${value} found at index ${index}`);
} else {
  console.log(`Value ${value} not found in the array`);
}
