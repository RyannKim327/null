function fibonacciSearch(arr, x, n) {
  let fib2 = 1; // Fibonacci number 1
  let fib1 = 1; // Fibonacci number 1
  let fib0 = 0; // Fibonacci number 0

  while (fib2 < n) {
    fib0 = fib1;
    fib1 = fib2;
    fib2 = fib0 + fib1;
  }

  let offset = 0;
  let i = 0;

  while (fib2 > 1) {
    i = Math.min(offset + fib0, n - 1);

    if (arr[i] < x) {
      fib2 = fib1;
      fib1 = fib0;
      fib0 = fib2 - fib1;
      offset = i;
    } else if (arr[i] > x) {
      fib2 = fib0;
      fib1 = fib1 - fib0;
      fib0 = fib2 - fib1;
    } else {
      return i;
    }
  }

  if (fib1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  return -1;
}
const arr = [1, 3, 5, 7, 9, 13, 17, 19, 21];
const x = 9;
const n = arr.length;

console.log(fibonacciSearch(arr, x, n)); // Output: 4
