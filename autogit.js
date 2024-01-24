function generateFibonacci(n) {
  const fibSequence = [0, 1]; // Initialize the Fibonacci sequence with first two numbers
  for (let i = 2; i <= n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]; // Add previous two numbers to generate next one
  }
  return fibSequence;
}
function fibonacciSearch(arr, target) {
  const length = arr.length;
  let fibPrev = 0;
  let fibCurr = 1;
  let fibM = fibPrev + fibCurr; // Initialize the smallest Fibonacci number greater than the array length

  while (fibM < length) {
    fibPrev = fibCurr;
    fibCurr = fibM;
    fibM = fibPrev + fibCurr;
  }

  let offset = -1; // Keeps track of the eliminated range from the front
  while (fibM > 1) {
    // Check if fibPrev is a valid index
    const index = Math.min(offset + fibPrev, length - 1);
    
    if (arr[index] < target) {
      // If the target is larger, move the Fibonacci sequence 2 steps down
      fibM = fibCurr;
      fibCurr = fibPrev;
      fibPrev = fibM - fibCurr;
      offset = index;
    } else if (arr[index] > target) {
      // If the target is smaller, move the Fibonacci sequence 1 step down
      fibM = fibPrev;
      fibCurr = fibCurr - fibPrev;
      fibPrev = fibM - fibCurr;
    } else {
      // Target found
      return index;
    }
  }

  // Checking the last element
  if (fibCurr === 1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // Target not found
  return -1;
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 16;

const result = fibonacciSearch(arr, target);
console.log(result); // Output: 4
