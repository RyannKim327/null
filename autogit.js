function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; fib[i - 1] < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function fibonacciSearch(arr, x) {
  let fib = generateFibonacci(arr.length);
  
  let offset = -1; // Initialize the offset
  
  // Find the smallest Fibonacci number that is greater than or equal to arr.length
  let fibIndex = 0;
  while (fib[fibIndex] < arr.length) {
    fibIndex++;
  }
  
  let i = fib[fibIndex - 2]; // Index of the first element to compare
  
  // Perform the search
  while (i < arr.length) {
    if (arr[i] === x) {
      return i; // Found the element at index i
    } else if (arr[i] < x) {
      i = i + fib[fibIndex - 1]; // Move to the right
      fibIndex -= 2;
    } else {
      i = i - fib[fibIndex - 2]; // Move to the left
      fibIndex -= 1;
    }
  }
  
  return -1; // Element not found
}
let arr = [1, 3, 5, 8, 11, 15, 21, 34, 55, 89];
let x = 15;
let index = fibonacciSearch(arr, x);
if (index !== -1) {
  console.log(`Element ${x} found at index ${index}`);
} else {
  console.log('Element not found');
}
