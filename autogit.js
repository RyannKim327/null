let fibNMinus2 = 0;
let fibNMinus1 = 1;
let fibM = fibNMinus2 + fibNMinus1;

while (fibM < n) {
  fibNMinus2 = fibNMinus1;
  fibNMinus1 = fibM;
  fibM = fibNMinus2 + fibNMinus1;
}
function fibonacciSearch(arr, key, n) {
  // Step 2: Create Fibonacci series array
  let fib = [0, 1];

  // Step 3: Find smallest Fibonacci number greater than or equal to n
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibM = fibNMinus2 + fibNMinus1;

  while (fibM < n) {
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibM;
    fibM = fibNMinus2 + fibNMinus1;
  }

  // Step 4: Initialize offset and index
  let offset = -1;
  let index = fibNMinus2;

  // Step 5: Perform Fibonacci search
  while (fibM > 1) {
    // Step 5a: Calculate index
    let i = Math.min(offset + fibNMinus1, n - 1);

    // Step 5b: Element found at index
    if (arr[i] === key) {
      return i;
    }
    // Step 5c: Key greater than current element
    else if (arr[i] < key) {
      offset = i;
      fibM = fibNMinus1;
      fibNMinus1 -= fibNMinus2;
      fibNMinus2 = fibM - fibNMinus1;
    }
    // Step 5d: Key smaller than current element
    else {
      fibM = fibNMinus2;
      fibNMinus1 -= fibNMinus2;
      fibNMinus2 = fibM - fibNMinus1;
    }
  }

  // Step 6: Check last element and offset+1
  if (fibNMinus1 === 1 && arr[offset + 1] === key) {
    return offset + 1;
  }

  // Step 7: Element not found
  return -1;
}

// Example usage
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const key = 16;
const n = arr.length;
const result = fibonacciSearch(arr, key, n);
console.log(`Element ${key} found at index ${result}`);
