function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize fibonacci numbers
  let fibM_minus_2 = 0;  // (m-2)'th Fibonacci number
  let fibM_minus_1 = 1;  // (m-1)'th Fibonacci number
  let fibM = fibM_minus_1 + fibM_minus_2;  // m'th Fibonacci number

  // fibM is the smallest Fibonacci number >= n
  while (fibM < n) {
    fibM_minus_2 = fibM_minus_1;
    fibM_minus_1 = fibM;
    fibM = fibM_minus_1 + fibM_minus_2;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fibM > 1) {
    // Check if fibM_minus_2 is a valid location
    let i = Math.min(offset + fibM_minus_2, n - 1);

    if (arr[i] < target) {
      // Move three Fibonacci numbers down
      fibM = fibM_minus_1;
      fibM_minus_1 = fibM_minus_2;
      fibM_minus_2 = fibM - fibM_minus_1;
      offset = i;
    } else if (arr[i] > target) {
      // Move two Fibonacci numbers down
      fibM = fibM_minus_2;
      fibM_minus_1 = fibM_minus_1 - fibM_minus_2;
      fibM_minus_2 = fibM - fibM_minus_1;
    } else {
      // Element found
      return i;
    }
  }

  // Compare the last element with target
  if (fibM_minus_1 && arr[offset + 1] == target) {
    return offset + 1;
  }

  // Element not found
  return -1;
}

// Example usage:
const sortedArr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const targetValue = 85;
const index = fibonacciSearch(sortedArr, targetValue);

console.log(index);  // Output: 8
