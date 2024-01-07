function fibonacciSearch(arr, x, n) {
  // ...
}
function fibonacciSearch(arr, x, n) {
  // Calculate Fibonacci numbers
  let fib = [0, 1];
  let fibM2 = fib[0];
  let fibM1 = fib[1];
  let fibM = fibM2 + fibM1;
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
    fib.push(fibM);
  }
  
  // ...
}
function fibonacciSearch(arr, x, n) {
  // Calculate Fibonacci numbers
  let fib = [0, 1];
  let fibM2 = fib[0];
  let fibM1 = fib[1];
  let fibM = fibM2 + fibM1;
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
    fib.push(fibM);
  }

  // Initialize variables
  let offset = 0;
  let i = fib.length - 1;

  // ...
}
function fibonacciSearch(arr, x, n) {
  // Calculate Fibonacci numbers
  let fib = [0, 1];
  let fibM2 = fib[0];
  let fibM1 = fib[1];
  let fibM = fibM2 + fibM1;
  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
    fib.push(fibM);
  }

  // Initialize variables
  let offset = 0;
  let i = fib.length - 1;

  // Perform search
  while (i > 1) {
    // Check if fib[i-2] is a valid index
    let index = Math.min(offset + fib[i - 2], n - 1);

    // If x is greater than the element at index, move the range to the right
    if (arr[index] < x) {
      i--;
      offset = index;
    }
    // If x is smaller than the element at index, move the range to the left
    else if (arr[index] > x) {
      i -= 2;
    }
    // If x is found, return the index
    else {
      return index;
    }
  }

  // If x is present at the last position
  if (arr[offset + 1] === x) {
    return offset + 1;
  }

  // If element is not found, return -1
  return -1;
}
// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13];
let x = 9;
let n = arr.length;
let result = fibonacciSearch(arr, x, n);
console.log("Element found at index:", result);
