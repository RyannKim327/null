function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize fibonacci numbers
  let fibMm2 = 0; // (m-2)'th Fibonacci number
  let fibMm1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibMm2 + fibMm1; // m'th Fibonacci number

  // fibM is the smallest Fibonacci number greater or equal to n
  while (fibM < n) {
    fibMm2 = fibMm1;
    fibMm1 = fibM;
    fibM = fibMm2 + fibMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fibM > 1) {
    // Check if fibMm2 is a valid location
    let i = Math.min(offset + fibMm2, n - 1);

    if (arr[i] < target) {
      // Move three Fibonacci variables down by one
      fibM = fibMm1;
      fibMm1 = fibMm2;
      fibMm2 = fibM - fibMm1;
      offset = i;
    } else if (arr[i] > target) {
      // Move down Fibonacci sequence by two
      fibM = fibMm2;
      fibMm1 = fibMm1 - fibMm2;
      fibMm2 = fibM - fibMm1;
    } else {
      return i; // Element found, return index
    }
  }

  // Comparing the last element with target
  if (fibMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Element not found
  return -1;
}

// Example usage:
const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(fibonacciSearch(sortedArr, 7));  // Output: 3
console.log(fibonacciSearch(sortedArr, 4));  // Output: -1 (not found)
