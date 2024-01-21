function generateFibSeries(n) {
  const fibSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  return fibSeries;
}
function fibSearch(arr, value, n) {
  let fib2 = 0; // fibonacci term (n-2)
  let fib1 = 1; // fibonacci term (n-1)
  let fib0 = fib2 + fib1; // fibonacci term (n)

  // Find the smallest Fibonacci number greater than or equal to n
  while (fib0 < n) {
    fib2 = fib1;
    fib1 = fib0;
    fib0 = fib2 + fib1;
  }

  // Marks the eliminated range from the front
  let offset = -1;

  // Compare the value with the last element of the series
  while (fib0 > 1) {
    // Check if fib2 is a valid location
    const i = Math.min(offset + fib2, n - 1);

    // If the value is greater than the current element,
    // cut the array from offset to i
    if (arr[i] < value) {
      fib0 = fib1;
      fib1 = fib2;
      fib2 = fib0 - fib1;
      offset = i;
    }
    // If the value is smaller than the current element,
    // cut the array after i+1
    else if (arr[i] > value) {
      fib0 = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib0 - fib1;
    }
    // If the value is found
    else {
      return i;
    }
  }

  // Compare the last element with value
  if (fib1 === 1 && arr[offset + 1] === value) {
    return offset + 1;
  }

  // If the element is not found, return -1
  return -1;
}
// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const value = 7;
const length = arr.length;

const result = fibSearch(arr, value, length);
console.log(result); // Output: 3 (the index of value in the array)
