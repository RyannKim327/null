function calculateFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}
function calculateFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

function fibonacciSearch(arr, key, n) {
  let offset = 0;
  let i = 0;
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fib = fibMinus2 + fibMinus1;

  while (fib < n) {
    fibMinus2 = fibMinus1;
    fibMinus1 = fib;
    fib = fibMinus2 + fibMinus1;
    i++;
  }

  while (fibMinus2 > 0) {
    const index = Math.min(offset + fibMinus2, n - 1);

    if (arr[index] > key) {
      fib = fibMinus2;
      fibMinus2 = fibMinus1 - fibMinus2;
      fibMinus1 = fib - fibMinus2;
      offset = index;
    } else if (arr[index] < key) {
      fib = fibMinus1;
      fibMinus1 = fibMinus2;
      fibMinus2 = fib - fibMinus1;
    } else {
      return index; // Found at index
    }
  }

  return -1; // Not found
}
const arr = [1, 3, 5, 7, 11, 13, 17, 19];
const key = 11;
const n = arr.length;

const index = fibonacciSearch(arr, key, n);

if (index !== -1) {
  console.log(`Key ${key} found at index ${index}`);
} else {
  console.log(`Key ${key} not found`);
}
