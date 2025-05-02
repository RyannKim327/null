function fibonacciSearch(arr: number[], key: number): number {
  const n = arr.length;

  // Initialize the first two Fibonacci numbers
  let fibMm2 = 0; // (m-2)'th Fibonacci number
  let fibMm1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibMm2 + fibMm1; // m'th Fibonacci number

  // fibM is going to store the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibMm2 = fibMm1;
    fibMm1 = fibM;
    fibM = fibMm2 + fibMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fibM > 1) {
    // Check if fibMm2 is a valid location
    const i = Math.min(offset + fibMm2, n - 1);

    if (arr[i] < key) {
      // Move the three Fibonacci variables down by one step
      fibM = fibMm1;
      fibMm1 = fibMm2;
      fibMm2 = fibM - fibMm1;
      offset = i;
    } else if (arr[i] > key) {
      // Move the Fibonacci numbers down by two steps
      fibM = fibMm2;
      fibMm1 = fibMm1 - fibMm2;
      fibMm2 = fibM - fibMm1;
    } else {
      // Found key, return index
      return i;
    }
  }

  // Comparing the last element with key
  if (fibMm1 && arr[offset + 1] === key) {
    return offset + 1;
  }

  // Element not found
  return -1;
}
