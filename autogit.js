function fibonacciSearch(arr, target, n = arr.length) {
  // Step 2: Generate Fibonacci numbers greater than or equal to n
  let fibM2 = 0; // (m-2)th Fibonacci number
  let fibM1 = 1; // (m-1)th Fibonacci number
  let fibM = fibM2 + fibM1; // mth Fibonacci number

  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1; // Offset from the first element

  // Step 3: Perform the search
  while (fibM > 1) {
    // Find the nearest Fibonacci number smaller than fibM
    const i = Math.min(offset + fibM2, n - 1);

    // If the target is greater than the value at index i,
    // move the offset and decrease the Fibonacci numbers
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    }
    // If the target is less than the value at index i,
    // move the offset and decrease the Fibonacci numbers
    else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    }
    // If the target is found
    else {
      return i;
    }
  }

  // Step 4: Handle the case when the element is not present in the array
  // Check if the last element is the target
  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Target element not found
  return -1;
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 16;

console.log(fibonacciSearch(arr, target)); // Output: 4 (index of target value)
