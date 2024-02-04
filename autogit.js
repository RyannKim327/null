function generateFibSeries(n) {
  let fib = [0, 1];
  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
let fibSeries = generateFibSeries(n);
let offset = 0;
let prevOffset = 0;
let i = fibSeries.length - 1;
while (offset < n) {
  let index = Math.min(offset + prevOffset, n - 1);

  if (arr[index] == value) {
    return index; // The search value is found at index
  }

  if (arr[index] < value) {
    // If the element is smaller, move the two Fibonacci indices two steps down
    offset = index + 1;
    i = i - 2;
  } else {
    // If the element is larger, move the two Fibonacci indices one step down
    prevOffset = offset;
    offset = offset - fibSeries[i - 1];
    i = i - 1;
  }
}
function fibonacciSearch(arr, value, n) {
  function generateFibSeries(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
  }

  let fibSeries = generateFibSeries(n);
  let offset = 0;
  let prevOffset = 0;
  let i = fibSeries.length - 1;

  while (offset < n) {
    let index = Math.min(offset + prevOffset, n - 1);

    if (arr[index] == value) {
      return index;
    }

    if (arr[index] < value) {
      offset = index + 1;
      i = i - 2;
    } else {
      prevOffset = offset;
      offset = offset - fibSeries[i - 1];
      i = i - 1;
    }
  }

  return -1; // Value not found
}
let arr = [1, 2, 3, 5, 8, 13, 21, 34];
let value = 13;
let n = arr.length;

let index = fibonacciSearch(arr, value, n);
console.log(index); // Output: 5
