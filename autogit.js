function fibonacciSearch(arr, x, n) {
  let fib = [0, 1];

  // Generating Fibonacci sequence up to a certain length or until it exceeds the array length
  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  
  let offset = 0;
  let index = 0;

  while (fib.length > 2) {
    let i = Math.min(offset + fib[fib.length - 2], n - 1);

    if (arr[i] === x) {
      return i;
    } else if (arr[i] < x) {
      fib.splice(fib.length - 1, 1);
      offset = i;
    } else {
      fib.splice(fib.length - 1, 2);
    }

    index = i;
  }

  if (arr[offset] === x) {
    return offset;
  }

  return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const x = 11;
const n = arr.length;
const index = fibonacciSearch(arr, x, n);
console.log(index); // Output: 5
