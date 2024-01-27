function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciSearch(arr, target) {
  // Find the smallest Fibonacci number greater than or equal to arr.length
  let fib2 = 0; // Fibonacci number (n-2)
  let fib1 = 1; // Fibonacci number (n-1)
  let fibn = fib2 + fib1; // Fibonacci number (n)

  while (fibn < arr.length) {
    fib2 = fib1;
    fib1 = fibn;
    fibn = fib2 + fib1;
  }

  let offset = -1; // The offset from the beginning of the array

  while (fibn > 1) {
    // Check if fib2 is a valid index
    const idx = Math.min(offset + fib2, arr.length - 1);

    if (arr[idx] < target) {
      // If target is greater than the current element,
      // move the two Fibonacci variables two steps down
      fibn = fib1;
      fib1 = fib2;
      fib2 = fibn - fib1;
      offset = idx;
    } else if (arr[idx] > target) {
      // If target is less than the current element,
      // move the two Fibonacci variables one step down
      fibn = fib2;
      fib1 -= fib2;
      fib2 = fibn - fib1;
    } else {
      // If target is found, return the index
      return idx;
    }
  }

  // If the target is not found, return -1
  if (fib1 && arr[offset + 1] === target) {
    return offset + 1;
  }
  return -1;
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = fibonacciSearch(arr, target);
console.log("Index:", index);
