function fibonacciSearch(arr: number[], target: number): number {
  // Initialize fibonacci numbers
  let fibMMm2 = 0; // (m-2)'th Fibonacci number
  let fibMMm1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci number

  // fibM is going to store the smallest Fibonacci number >= arr.length
  while (fibM < arr.length) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fibM > 1) {
    // Check if fibMMm2 is a valid location
    const i = Math.min(offset + fibMMm2, arr.length - 1);

    if (arr[i] < target) {
      // Move the Fibonacci sequence down by one step
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      // Move the Fibonacci sequence down by two steps
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      // element found. Return index
      return i;
    }
  }

  // Compare the last element with target
  if (fibMMm1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // element not found. Return -1
  return -1;
}
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
const index = fibonacciSearch(arr, target);
console.log(index);  // Outputs: 8
