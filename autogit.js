function generateFibonacci(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}
function fibonacciSearch(arr, target) {
  let fibNums = generateFibonacci(50); // Generate Fibonacci series up to a maximum of 50 elements
  let fibIdx = -1; // Initialize the index of the smallest Fibonacci number greater than or equal to the array length
  
  // Finding the smallest Fibonacci number greater than or equal to the array length
  while (fibNums[fibIdx] <= arr.length) {
    fibIdx++;
  }
  
  let offset = -1; // Initialize the offset from the start of the array
  
  // Execute the search
  while (fibIdx > 1) {
    let idx = Math.min(offset + fibNums[fibIdx - 2], arr.length - 1);
    
    if (target === arr[idx]) {
      return idx;
    } else if (target < arr[idx]) {
      fibIdx -= 1;
    } else {
      offset = idx;
      fibIdx -= 2;
    }
  }

  return -1; // Return -1 if the target element is not found
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 11;

const index = fibonacciSearch(arr, target);

console.log(`Target element ${target} found at index: ${index}`);
