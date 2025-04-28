function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Generate Fibonacci numbers up to n
  let fibMm2 = 0; // (m-2)th Fibonacci
  let fibMm1 = 1; // (m-1)th Fibonacci
  let fibM = fibMm2 + fibMm1; // mth Fibonacci

  while (fibM < n) {
    fibMm2 = fibMm1;
    fibMm1 = fibM;
    fibM = fibMm2 + fibMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  // While there are elements to inspect
  while (fibM > 1) {
    // Check if fibMm2 is a valid location
    const i = Math.min(offset + fibMm2, n - 1);

    if (arr[i] < target) {
      // Move the three Fibonacci variables down two
      fibM = fibMm1;
      fibMm1 = fibMm2;
      fibMm2 = fibM - fibMm1;
      offset = i;
    } else if (arr[i] > target) {
      // Move the three Fibonacci variables down two in other direction
      fibM = fibMm2;
      fibMm1 = fibMm1 - fibMm2;
      fibMm2 = fibM - fibMm1;
    } else {
      // Found the target
      return i;
    }
  }

  // Checking if the last element is the target
  if (fibMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Element not found
  return -1;
}
const data = [1, 3, 5, 7, 9, 11, 13];
console.log(fibonacciSearch(data, 7)); // Output: 3
console.log(fibonacciSearch(data, 2)); // Output: -1
