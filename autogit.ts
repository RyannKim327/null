function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize Fibonacci numbers
  let fibMMm2 = 0;   // (m-2)'th Fibonacci number
  let fibMMm1 = 1;   // (m-1)'th Fibonacci number
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

  // Find the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fibM > 1) {
    // Check if fibMMm2 is a valid location
    const i = Math.min(offset + fibMMm2, n - 1);

    if (arr[i] < target) {
      // Move to the subarray after i
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      // Move to the subarray before i
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      // Found the target
      return i;
    }
  }

  // Comparing the last element with target
  if (fibMMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Element not found
  return -1;
}
