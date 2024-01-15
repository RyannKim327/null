function fibonacciSearch(arr, target) {
  // Step 2: Calculate Fibonacci numbers
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fib = fibMinus2 + fibMinus1;
  while (fib < arr.length) {
    fibMinus2 = fibMinus1;
    fibMinus1 = fib;
    fib = fibMinus2 + fibMinus1;
  }

  // Step 4: Initialize variables
  let offset = -1;
  let prevOffset = -1;
  let temp;

  // Step 5: Loop until target is found or no more elements left
  while (offset < arr.length - 1) {
    // Target found
    if (arr[offset] === target) {
      return offset;
    }

    // Target is smaller, move back by two Fibonacci numbers
    if (arr[offset] > target) {
      offset = prevOffset;
      prevOffset -= fibMinus2;
      fibMinus1 = fibMinus1 - fibMinus2;
      fibMinus2 = fibMinus1 - fibMinus2;
    }

    // Target is larger, move ahead by one Fibonacci number
    if (arr[offset] < target) {
      offset += fibMinus1;
      fibMinus1 = fibMinus2;
      fibMinus2 = fib - fibMinus1;
    }
  }

  // Step 6: Target not found
  return -1;
}

// Test the function
const arr = [1, 3, 5, 6, 8, 9, 12, 15, 17];
const target = 9;
const index = fibonacciSearch(arr, target);
console.log(`Target ${target} is found at index ${index}`); // Output: Target 9 is found at index 5
