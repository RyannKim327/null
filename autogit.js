// Function to generate the Fibonacci sequence
function generateFibonacciSequence(n) {
  const sequence = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  
  return sequence;
}

// Fibonacci search function
function fibonacciSearch(arr, x) {
  const n = arr.length;
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;
  
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }
  
  let offset = -1;
  
  while (fibM > 1) {
    const i = Math.min(offset + fibMMm2, n - 1);
    
    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      return i;
    }
  }
  
  if (fibMMm1 && arr[offset + 1] === x) {
    return offset + 1;
  }
  
  return -1;
}
// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13];
const x = 7;

const index = fibonacciSearch(arr, x);
if (index !== -1) {
  console.log(`Element ${x} found at index ${index}`);
} else {
  console.log(`Element ${x} not found in the array`);
}
