function fibonacciSearch(arr, key) {
  let fib2 = 0; // (n-2)th Fibonacci number
  let fib1 = 1; // (n-1)th Fibonacci number
  let fib = fib2 + fib1; // nth Fibonacci number

  // Calculate the smallest Fibonacci number greater than or equal to the array length
  while (fib < arr.length) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
  }

  let offset = -1; // Offset from the start of the array
  while (fib > 1) {
    // Check if fib2 is a valid index
    const i = Math.min(offset + fib2, arr.length - 1);

    if (arr[i] < key) {
      fib = fib1; // Move 1 Fibonacci step down
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > key) {
      fib = fib2; // Move 2 Fibonacci steps down
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      return i; // Key found at index i
    }
  }

  // Check the last element
  if (arr[offset + 1] === key) {
    return offset + 1;
  }

  // Key not found
  return -1;
}

// Example usage
const arr = [2, 5, 8, 12, 17, 22, 31, 36, 42, 51];
const key = 17;
const index = fibonacciSearch(arr, key);

console.log(`Key ${key} is found at index ${index}`);
