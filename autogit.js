function fibonacciSearch(arr, target, n) {
  let fib = [0, 1];
  let fib2 = fib[0]; // fib(k-2)th Fibonacci number
  let fib1 = fib[1]; // fib(k-1)th Fibonacci number
  let fibk = fib2 + fib1; // fib(k)th Fibonacci number

  while (fibk < n) {
    fib2 = fib1;
    fib1 = fibk;
    fibk = fib2 + fib1;
  }
}
  let offset = -1;
  let index = Math.min(fib2, n - 1);
  while (fibk > 1) {
    let i = Math.min(offset + fib2, n - 1);

    if (arr[i] < target) {
      fibk = fib1;
      fib1 = fib2;
      fib2 = fibk - fib1;
      offset = i;
    } else if (arr[i] > target) {
      fibk = fib2;
      fib1 = fib1 - fib2;
      fib2 = fibk - fib1;
    } else {
      return i;
    }
  }
  if (fib1 === 1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
const arr = [2, 4, 8, 10, 15, 20, 24, 28, 30];
const target = 10;

const result = fibonacciSearch(arr, target, arr.length);
console.log("Target found at index:", result);
