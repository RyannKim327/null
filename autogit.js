function fibonacciSearch(arr, target, n) {
  let fibM2 = 0;
  let fibM1 = 1;

  // Find the smallest Fibonacci number greater than or equal to n
  let fibM = fibM2 + fibM1;
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = 0;
  let i = fibM2;
  let temp = arr[offset + i];

  while (temp != null) {
    if (temp === target) {
      return offset + i;
    }
    
    if (temp < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = offset + i;
      i = fibM2;
    } else {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
      i = fibM2;
    }

    temp = arr[offset + i];
  }

  return -1; // Target not found
}

// Example usage:
const arr = [2, 4, 8, 12, 16, 20, 25, 27, 30, 35];
const target = 16;
const n = arr.length;

const result = fibonacciSearch(arr, target, n);
console.log(result); // Output: 4 (index of the target element in the array)
