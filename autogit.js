function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function fibonacciSearch(arr, searchElement) {
  let fib = generateFibonacci(arr.length);
  let offset = -1;
  let currentFib = fib[arr.length - 1]; // Largest Fibonacci number less than or equal to array length
  let prevFib = fib[arr.length - 2]; // Second largest Fibonacci number less than or equal to array length

  while (currentFib > 1) {
    let i = Math.min(offset + prevFib, arr.length - 1);

    if (arr[i] < searchElement) {
      currentFib = fib[fib.findIndex((val) => val === prevFib)];
      prevFib = fib[fib.findIndex((val) => val === prevFib) - 1];
      offset = i;
    } else if (arr[i] > searchElement) {
      currentFib = prevFib;
      prevFib = fib[fib.findIndex((val) => val === prevFib) - 1];
    } else {
      return i;
    }
  }
  if (prevFib === 1 && arr[offset + 1] === searchElement) {
    return offset + 1;
  }
  return -1;
}
let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let searchElement = 16;
let index = fibonacciSearch(arr, searchElement);

console.log("Array:", arr);
console.log(`"${searchElement}" is found at index`, index);

// Output:
// Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
// "16" is found at index 4
