function fibonacciSearch(arr, x, n) {
  let fibM2 = 0; // (m-2)th Fibonacci number
  let fibM1 = 1; // (m-1)th Fibonacci number
  let fibM = fibM2 + fibM1; // mth Fibonacci number

  // Find the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = 0; // stores the offset for comparison

  while (fibM2 > 1) {
    // Calculate the index of the element to be compared
    const i = Math.min(offset + fibM2, n - 1);

    if (arr[i] === x) {
      return i;
    } else if (arr[i] < x) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    }
  }

  if (fibM1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(fibonacciSearch(arr, 6, arr.length)); // Output: 5 (index of 6 in the array)
