function generateFibonacci(n) {
  const fib = [0, 1]; // Initialize the array with the first two Fibonacci numbers

  while (fib[fib.length - 1] < n) {
    // Generate Fibonacci numbers until the last number exceeds the given number 'n'
    const next = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(next);
  }
  
  return fib;
}
function fibonacciSearch(arr, target) {
  const fib = generateFibonacci(arr.length); // Generate Fibonacci sequence
  
  let offset = -1; // Initialize the offset to -1
  let fibIdx = fib.length - 1; // Start searching from the last Fibonacci number
  
  while (fibIdx > 1) {
    const idx = Math.min(offset + fib[fibIdx - 2], arr.length - 1); // Calculate the comparison index
    
    if (arr[idx] < target) {
      // If the current element is less than the target, shift the Fibonacci indexes to the left
      fibIdx -= 1;
      offset = idx;
    } else if (arr[idx] > target) {
      // If the current element is greater than the target, shift the Fibonacci indexes two steps to the left
      fibIdx -= 2;
    } else {
      // If the target element is found, return its index
      return idx;
    }
  }
  
  // If the target element is not found, return -1
  return -1;
}
const array = [1, 3, 5, 7, 9, 11, 13];
const target = 9;

const resultIndex = fibonacciSearch(array, target);

if (resultIndex !== -1) {
  console.log(`Target ${target} found at index ${resultIndex}`);
} else {
  console.log(`Target ${target} not found in the array`);
}
Target 9 found at index 4
