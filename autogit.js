function generateFibonacciSequence(length) {
  const sequence = [0, 1]; // Initialize Fibonacci sequence with [0, 1]

  for (let i = 2; i < length; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}
function fibonacciSearch(arr, x) {
  const length = arr.length;

  let fib2 = 0; // Second-to-last Fibonacci number
  let fib1 = 1; // Last Fibonacci number
  let fib = fib1 + fib2; // Current Fibonacci number

  // Find the smallest Fibonacci number greater than or equal to the array length
  while (fib < length) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  let offset = -1; // Offset from the beginning of the array

  while (fib > 1) {
    const i = Math.min(offset + fib2, length - 1);

    // If x is greater than the current element, move the offset and update Fibonacci numbers
    if (arr[i] < x) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    }

    // If x is smaller than the current element, update Fibonacci numbers
    else if (arr[i] > x) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    }

    // If x is found, return its index
    else {
      return i;
    }
  }

  // If x is not found, return -1
  if (fib1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  return -1;
}
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const x = 55;

const index = fibonacciSearch(arr, x);
console.log(`Element ${x} is found at index ${index}`);
