function fibonacciSearch(arr, key, n) {
  // Calculate Fibonacci numbers until fn is greater than or equal to n
  let fib1 = 0; // First Fibonacci number
  let fib2 = 1; // Second Fibonacci number
  let fibM = fib1 + fib2; // Third Fibonacci number

  while (fibM < n) {
    fib1 = fib2;
    fib2 = fibM;
    fibM = fib1 + fib2;
  }

  let offset = 0; // Effective offset from the start of the array
  let previousOffset = 0; // Previous offset
  let temp = -1; // Temporary variable to store Fn-2

  while (fibM > 1) {
    const i = Math.min(offset + fib1, n - 1);

    if (arr[i] < key) {
      fibM = fib1;
      fib1 = fib2;
      fib2 = temp - fib1;
      offset = i;
    } else if (arr[i] > key) {
      fibM = fib2;
      fib1 = fib1 - fib2;
      fib2 = fibM - fib1;
    } else {
      return i;
    }
  }

  return -1; // Key not found
}
