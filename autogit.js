function fibonacciSearch(arr, target) {
  let fib2 = 0; // (m-2)th Fibonacci number
  let fib1 = 1; // (m-1)th Fibonacci number
  let fib = fib2 + fib1; // mth Fibonacci number

  // Find the smallest Fibonacci number greater than or equal to the length of the array
  while (fib < arr.length) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib2 + fib1;
  }

  let offset = -1; // The index from which the array will be divided
  while (fib > 1) {
    const i = Math.min(offset + fib2, arr.length - 1); // Calculate the index to compare

    if (arr[i] < target) {
      // If the target is greater than the value at index i,
      // cut the subarray before i by updating offset and fib values
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > target) {
      // If the target is smaller than the value at index i,
      // cut the subarray after i by updating offset and fib values
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      // If the target is found at index i, return the index
      return i;
    }
  }

  // After the while loop, target element is either found at offset+1 or not in the array
  if (fib1 === 1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // If target element is not found in the array, return -1
  return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = fibonacciSearch(arr, target);
console.log("Target found at index:", index);
