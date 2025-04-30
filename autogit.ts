function fibonacciSearch(arr: number[], x: number): number {
  const n = arr.length;

  // Initialize fibonacci numbers
  let fibMm2 = 0; // (m-2)'th Fibonacci No.
  let fibMm1 = 1; // (m-1)'th Fibonacci No.
  let fibM = fibMm2 + fibMm1; // m'th Fibonacci

  // fibM is going to store the smallest Fibonacci number >= n
  while (fibM < n) {
    fibMm2 = fibMm1;
    fibMm1 = fibM;
    fibM = fibMm2 + fibMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  // while there are elements to be inspected.
  while (fibM > 1) {
    // Check if fibMm2 is a valid location
    const i = Math.min(offset + fibMm2, n - 1);

    if (arr[i] < x) {
      // Move fibonacci numbers one down
      fibM = fibMm1;
      fibMm1 = fibMm2;
      fibMm2 = fibM - fibMm1;
      offset = i;
    } else if (arr[i] > x) {
      // Move fibonacci numbers two down
      fibM = fibMm2;
      fibMm1 = fibMm1 - fibMm2;
      fibMm2 = fibM - fibMm1;
    } else {
      return i; // element found, return index
    }
  }

  // comparing the last element with x
  if (fibMm1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  // element not found
  return -1;
}
