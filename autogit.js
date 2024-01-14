function generateFibonacci(length) {
  const fib = [0, 1];
  for (let i = 2; i < length; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function fibonacciSearch(array, searchValue, fib) {
  const length = array.length;
  let fibIndex = 0;
  while (fib[fibIndex] < length) {
    fibIndex++;
  }
  let left = 0;
  let mid = fib[fibIndex - 2];

  while (left <= length) {
    if (searchValue === array[mid]) {
      return mid;
    }
    if (searchValue < array[mid]) {
      fibIndex -= 2;
      mid = fib[fibIndex - 1];
      left = mid + 1;
    } else {
      fibIndex -= 1;
      mid = fib[fibIndex];
      left = mid + 1;
    }
  }
  return -1; // Element not found
}
// Example usage
const array = [1, 2, 3, 5, 8, 13, 21, 34, 55];
const searchValue = 13;

const fib = generateFibonacci(10); // Generate a Fibonacci sequence for an array of length 10
const index = fibonacciSearch(array, searchValue, fib);

console.log(`Index of ${searchValue}: ${index}`);
Index of 13: 5
