function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
function fibonacciSearch(arr, x) {
  // Find the smallest Fibonacci number greater than or equal to the length of the array
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = fibNMinus1 + fibNMinus2;
  while (fibN < arr.length) {
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    fibN = fibNMinus1 + fibNMinus2;
  }

  // Initialize the offset
  let offset = -1;

  // Perform the search
  while (fibN > 1) {
    // Check if fibNMinus2 is a valid index
    const i = Math.min(offset + fibNMinus2, arr.length - 1);

    // If x is greater than the value at index i, move the offset to the right
    if (arr[i] < x) {
      fibN = fibNMinus1;
      fibNMinus1 = fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
      offset = i;
    }
    // If x is less than the value at index i, move the offset to the left
    else if (arr[i] > x) {
      fibN = fibNMinus2;
      fibNMinus1 = fibNMinus1 - fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
    }
    // If x is found, return the index
    else {
      return i;
    }
  }

  // If x is not found, return -1
  if (arr[offset + 1] == x) {
    return offset + 1;
  } else {
    return -1;
  }
}
// Test the Fibonacci search algorithm
const arr = [2, 4, 7, 10, 14, 20, 24, 28, 30];
const x = 24;
const index = fibonacciSearch(arr, x);
console.log(`Element ${x} is found at index ${index}`);
