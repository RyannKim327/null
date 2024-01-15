function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
function fibonacciSearch(arr, x) {
  let fibNMinus2 = 0; // (n-2)th Fibonacci number
  let fibNMinus1 = 1; // (n-1)th Fibonacci number
  let fibN = fibNMinus2 + fibNMinus1; // nth Fibonacci number

  // Find the smallest Fibonacci number greater than or equal to the array length
  while (fibN < arr.length) {
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    fibN = fibNMinus2 + fibNMinus1;
  }

  let offset = -1; // Offset used to compare arr[mid] with x
  while (fibN > 1) {
    let i = Math.min(offset + fibNMinus2, arr.length - 1);

    if (arr[i] === x) return i; // Found x at index i

    if (arr[i] < x) {
      fibN = fibNMinus1;
      fibNMinus1 = fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
      offset = i;
    } else {
      fibN = fibNMinus2;
      fibNMinus1 = fibNMinus1 - fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
    }
  }

  // If the last element is x
  if (fibNMinus1 === 1 && arr[offset + 1] === x) return offset + 1;

  return -1; // Element not found
}
const arr = [3, 8, 13, 21, 34, 55, 89, 144, 233];
const x = 34;
const index = fibonacciSearch(arr, x);
console.log(`Element ${x} found at index ${index}`);
