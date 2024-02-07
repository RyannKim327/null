function fibSeries(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function fibonacciSearch(arr, key) {
  let fib = fibSeries(30); // Generate Fibonacci series up to desired length

  let offset = -1;
  let fibIdx = fib.length - 1;

  while (fibIdx > 1) {
    // Find the smallest Fibonacci number equal to or greater than the array size
    let i = Math.min(offset + fib[fibIdx - 2], arr.length - 1);

    if (arr[i] < key) {
      // Move offset to the right
      fibIdx = fibIdx - 1;
      offset = i;
    } else if (arr[i] > key) {
      // Move offset to the left
      fibIdx = fibIdx - 2;
    } else {
      // Found the element
      return i;
    }
  }

  // Check the last element
  if (arr[offset + 1] === key) {
    return offset + 1;
  }

  // Element not found
  return -1;
}
// Example usage
let arr = [2, 4, 7, 12, 16, 23, 38, 56, 72, 91];
let key = 23;

let index = fibonacciSearch(arr, key);
if (index !== -1) {
  console.log("Element found at index:", index);
} else {
  console.log("Element not found in the array.");
}
