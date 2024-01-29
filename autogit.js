function fibonacciSearch(arr, searchElement) {
  let fib2 = 0;
  let fib1 = 1;
  let offset = -1;
  let mid;

  // Generate Fibonacci series until fib2 is greater than or equal to array length
  while (fib2 < arr.length) {
    const temp = fib2;
    fib2 = fib1;
    fib1 = temp + fib1;
  }

  // Perform the search
  while (fib2 > 1) {
    // Check if fib2 is a valid index
    mid = Math.min(offset + fib2, arr.length - 1);

    if (arr[mid] < searchElement) {
      fib2 = fib1;
      fib1 = fib2 - fib1;
      offset = mid;
    } else if (arr[mid] > searchElement) {
      fib2 = fib2 - fib1;
      fib1 = fib1 - fib2;
    } else {
      return mid; // Element found
    }
  }

  // Check the last element
  if (fib1 === 1 && arr[offset + 1] === searchElement) {
    return offset + 1;
  }

  return -1; // Element not found
}

// Usage example
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const searchElement = 13;
const index = fibonacciSearch(arr, searchElement);
console.log(`Element ${searchElement} found at index ${index}`);
