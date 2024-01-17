function generateFibonacciSeries(n) {
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  return fibSeries;
}
function fibonacciSearch(arr, x, n) {
  // Generate fibonacci series
  let fibSeries = generateFibonacciSeries(n);

  // Initialize variables
  let fib2 = fibSeries[n - 2];
  let fib1 = fibSeries[n - 3];
  let fib0 = fibSeries[n - 4];
  let offset = -1;

  // Loop through the array to perform search
  while (fibSeries.length > 0) {
    // Check if the current fib2 index is within the array bounds
    let i = Math.min(offset + fib2, n - 1);

    // Check the element at the current index
    if (arr[i] < x) {
      // Shift the Fibonacci variables
      fib2 = fib1;
      fib1 = fib0;
      fib0 = fib2 - fib1;
      offset = i;
    } else if (arr[i] > x) {
      // Shift the Fibonacci variables
      fib2 = fib0;
      fib1 = fib1 - fib0;
      fib0 = fib2 - fib1;
    } else {
      // Element found
      return i;
    }
  }

  // Element not found
  return -1;
}
const arr = [1, 3, 8, 13, 21, 34, 55, 89];
const x = 21;
const n = arr.length;

console.log(fibonacciSearch(arr, x, n)); // Output: 4 (the index of element 21 in the array)
