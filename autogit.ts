function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize fibonacci numbers
  let fibMMm2 = 0;   // (m-2)'th Fibonacci
  let fibMMm1 = 1;   // (m-1)'th Fibonacci
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

  // fibM is going to store the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fibM > 1) {
    // Check if fibMMm2 is a valid location
    let i = Math.min(offset + fibMMm2, n - 1);

    if (arr[i] < target) {
      // Move the three fibonacci variables down by one
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      // Move the three fibonacci variables down by two
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      return i; // Found target
    }
  }

  // Comparing the last element with target
  if (fibMMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Element not found
  return -1;
}

// Example usage:
const sortedArr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
const index = fibonacciSearch(sortedArr, target);
console.log(index);  // Output: 8
