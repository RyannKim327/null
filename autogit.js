function fibonacciSearch(arr, key) {
  // Create Fibonacci series
  let fib = [0, 1];
  let i = 2;
  while (fib[i - 1] < arr.length) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }

  let offset = -1; // Offset from the starting index of the array
  let k = fib[i - 2]; // Index used for comparison

  while (k > 0) {
    let idx = Math.min(offset + fib[i - 3], arr.length - 1);
    if (arr[idx] === key) {
      return idx;
    } else if (arr[idx] < key) {
      i--;
      offset = idx;
      k = fib[i - 2];
    } else {
      i -= 2;
      k = fib[i - 2];
    }
  }

  return -1; // Key not found
}

// Usage example
let sortedArray = [1, 3, 5, 8, 12, 18, 21, 30];
let keyToFind = 8;
let index = fibonacciSearch(sortedArray, keyToFind);
console.log(`Element found at index ${index}`);
