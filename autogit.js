function fibonacciSearch(arr, value, length) {
  let fib2 = 0;
  let fib1 = 1;

  // Find the smallest Fibonacci number that is greater than or equal to length
  while (fib1 < length) {
    const temp = fib2;
    fib2 = fib1;
    fib1 = temp + fib1;
  }

  let offset = 0;

  // Perform the search
  while (fib2 > 0) {
    const i = Math.min(offset + fib2, length - 1);

    if (arr[i] === value) {
      return i; // target found
    } else if (value > arr[i]) {
      fib1 = fib1 - fib2;
      fib2 = fib2 - fib1;
      offset = i;
    } else {
      fib1 = fib2;
      fib2 = fib2 - fib1;
    }
  }

  return -1; // target not found
}

// Example usage:
const array = [1, 4, 7, 11, 16, 23, 33, 42, 54, 67];
const target = 42;
const length = array.length;

const index = fibonacciSearch(array, target, length);
console.log(index); // Output: 7 (index of the target value in the array)
