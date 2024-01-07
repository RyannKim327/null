function fibonacciSearch(arr, x, n) {
  if (x === arr[0]) {
    return 0;
  }

  let fib2 = 1;
  let fib1 = 0;
  let fib = fib1 + fib2;

  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  let offset = -1;

  while (fib > 1) {
    const i = Math.min(offset + fib2, n - 1);

    if (arr[i] < x) {
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > x) {
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      return i;
    }
  }

  if (fib1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  return -1;
}
const arr = [1, 4, 7, 9, 14, 21, 30];
const x = 9;
const n = arr.length;

const index = fibonacciSearch(arr, x, n);

if (index === -1) {
  console.log("Element not found in the array.");
} else {
  console.log(`Element found at index ${index}.`);
}
