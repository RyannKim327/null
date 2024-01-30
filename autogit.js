function fibonacciSearch(arr, x, n) {
  // Fibonacci numbers
  let fib2 = 0; // (i-2)th Fibonacci number
  let fib1 = 1; // (i-1)th Fibonacci number
  let fib = fib2 + fib1; // ith Fibonacci number

  // Find the smallest Fibonacci number greater than or equal to n
  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
  }

  // Searching by comparing the element against the last Fibonacci number found
  let offset = -1;

  while (fib > 1) {
    // Check if fib2 is a valid location
    const i = Math.min(offset + fib2, n - 1);

    // If x is larger than the current element, move the Fibonacci numbers two steps down
    if (arr[i] < x) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    }
    // If x is smaller than the current element, move the Fibonacci numbers one step down
    else if (arr[i] > x) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    }
    // If x is found, return the index
    else {
      return i;
    }
  }

  // Return -1 if the element has not been found
  if (fib1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  // Element not found
  return -1;
}
const arr = [10, 20, 30, 40, 50, 60];
const x = 30;
const n = arr.length;
const index = fibonacciSearch(arr, x, n);

if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log(`Element not found`);
}
