function fibonacciSearch(arr, x, n) {
  function fib(k) {
    if (k <= 1) return k;
    return fib(k - 1) + fib(k - 2);
  }
  
  // Code for Fibonacci search algorithm goes here

}
  let fibKMinus2 = 0;
  let fibKMinus1 = 1;
  let fibK = fibKMinus1 + fibKMinus2;

  while (fibK < n) {
    fibKMinus2 = fibKMinus1;
    fibKMinus1 = fibK;
    fibK = fibKMinus1 + fibKMinus2;
  }
  let offset = -1;
  while (fibK > 1) {
    const i = Math.min(offset + fibKMinus2, n - 1);

    if (arr[i] < x) {
      fibK = fibKMinus1;
      fibKMinus1 = fibKMinus2;
      fibKMinus2 = fibK - fibKMinus1;
      offset = i;
    } else if (arr[i] > x) {
      fibK = fibKMinus2;
      fibKMinus1 = fibKMinus1 - fibKMinus2;
      fibKMinus2 = fibK - fibKMinus1;
    } else {
      return i; // Element found at index i
    }
  }
  if (fibKMinus1 === 1 && arr[offset + 1] === x) {
    return offset + 1; // Element found at index offset + 1
  }

  return -1; // Element not found
function fibonacciSearch(arr, x, n) {
  function fib(k) {
    if (k <= 1) return k;
    return fib(k - 1) + fib(k - 2);
  }

  let fibKMinus2 = 0;
  let fibKMinus1 = 1;
  let fibK = fibKMinus1 + fibKMinus2;

  while (fibK < n) {
    fibKMinus2 = fibKMinus1;
    fibKMinus1 = fibK;
    fibK = fibKMinus1 + fibKMinus2;
  }

  let offset = -1;

  while (fibK > 1) {
    const i = Math.min(offset + fibKMinus2, n - 1);

    if (arr[i] < x) {
      fibK = fibKMinus1;
      fibKMinus1 = fibKMinus2;
      fibKMinus2 = fibK - fibKMinus1;
      offset = i;
    } else if (arr[i] > x) {
      fibK = fibKMinus2;
      fibKMinus1 = fibKMinus1 - fibKMinus2;
      fibKMinus2 = fibK - fibKMinus1;
    } else {
      return i; // Element found at index i
    }
  }

  if (fibKMinus1 === 1 && arr[offset + 1] === x) {
    return offset + 1; // Element found at index offset + 1
  }

  return -1; // Element not found
}
const arr = [1, 5, 7, 9, 12, 15, 20];
const x = 12;
const n = arr.length;

const result = fibonacciSearch(arr, x, n);
console.log(result); // Output: 4 (element found at index 4)
