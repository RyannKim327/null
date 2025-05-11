function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize Fibonacci numbers
  let fibMMm2 = 0; // (m-2)'th Fibonacci number
  let fibMMm1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci number

  // fibM is going to store the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  // Marks the eliminated range from the front
  let offset = -1;

  while (fibM > 1) {
    // Check the index to be compared
    let i = Math.min(offset + fibMMm2, n - 1);

    if (arr[i] < target) {
      // Move the Fibonacci numbers down one step, as target is in right subarray
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      // Move the Fibonacci numbers down two steps, as target is in left subarray
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      // Element found. Return index
      return i;
    }
  }

  // Compare the last element with target
  if (fibMMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Element not found
  return -1;
}
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;

const index = fibonacciSearch(arr, target);
if (index >= 0) {
  console.log(`Found at index: ${index}`);
} else {
  console.log('Not found');
}
