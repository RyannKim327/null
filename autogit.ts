function fibonacciSearch(arr: number[], target: number): number {
  const fibMMm2 = 0; // (m-2)'th Fibonacci No.
  const fibMMm1 = 1; // (m-1)'th Fibonacci No.
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci No.

  while (fibM < arr.length) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;

  while (fibM > 1) {
    // Check if fibMMm2 is a valid location
    let i = Math.min(offset + fibMMm2, arr.length - 1);

    // If x is greater than the value at index fibMMm2, cut the subarray array from offset to i
    if (arr[i] < target) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;

    // If x is greater than the value at index fibMMm2, cut the subarray after i+1
    } else if (arr[i] > target) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;

    // element found
    } else return i;
  }

  // comparing the last element with x
  if (fibMMm1 && arr[offset + 1] === target) return offset + 1;

  return -1; // element not found
}

// Example usage:
const arr = [2, 3, 7, 10, 12, 15, 20, 30, 40, 50];
const target = 12;
const index = fibonacciSearch(arr, target);
if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log(`Element not found`);
}
