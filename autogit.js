function fibonacciSearch(target, arr, n) {
  function generateFibonacciSeries(length) {
    const fibSeries = [0, 1];
    while (fibSeries[fibSeries.length - 1] < length) {
      const next = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
      fibSeries.push(next);
    }
    return fibSeries;
  }

  const fibSeries = generateFibonacciSeries(n);
  let offset = 0;
  let prevIndex = -1;
  let currentIndex = Math.min(offset + fibSeries[fibSeries.length - 2], n - 1);

  while (offset < n) {
    if (arr[currentIndex] === target) {
      return currentIndex;
    } else if (arr[currentIndex] > target) {
      currentIndex = offset + fibSeries[fibSeries.length - 3];
      prevIndex = currentIndex;
    } else {
      offset = currentIndex + 1;
      currentIndex = Math.min(offset + fibSeries[fibSeries.length - 2], n - 1);
    }
  }

  return -1;
}

// Example usage:
const arr = [1, 4, 6, 8, 10, 12, 14, 18, 20, 25, 30];
const target = 14;
const index = fibonacciSearch(target, arr, arr.length);

console.log(`Target ${target} is found at index ${index}`);
