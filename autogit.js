function fibonacciSearch(arr, value, n) {
  let fib1 = 0;
  let fib2 = 1;
  let fibM = fib1 + fib2;

  while (fibM < n) {
    fib1 = fib2;
    fib2 = fibM;
    fibM = fib1 + fib2;
  }

  let offset = 0;
  let i = -1;

  while (fibM > 1) {
    const index = Math.min(offset + fib1, n - 1);

    if (arr[index] < value) {
      fibM = fib2;
      fib2 = fib1;
      fib1 = fibM - fib2;
      offset = index;
    } else if (arr[index] > value) {
      fibM = fib1;
      fib2 -= fib1;
      fib1 = fibM - fib2;
    } else {
      return index;
    }
  }
  
  return -1;
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const value = 23;
const n = arr.length;

const index = fibonacciSearch(arr, value, n);
console.log(`Element ${value} is found at index ${index}`);
