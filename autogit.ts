function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;

  // Initialize fibonacci numbers
  let fib2 = 0;       // (m-2)'th Fibonacci number
  let fib1 = 1;       // (m-1)'th Fibonacci number
  let fib = fib1 + fib2;  // m'th Fibonacci number

  // fib is going to store the smallest Fibonacci number greater or equal to n
  while (fib < n) {
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }

  // Marks the eliminated range from front
  let offset = -1;

  while (fib > 1) {
    // Check if fib2 is a valid location
    const i = Math.min(offset + fib2, n - 1);

    if (arr[i] < target) {
      // Move the three Fibonacci variables down by one
      fib = fib1;
      fib1 = fib2;
      fib2 = fib - fib1;
      offset = i;
    } else if (arr[i] > target) {
      // Move the three Fibonacci variables down by two
      fib = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib - fib1;
    } else {
      return i; // Element found
    }
  }

  // comparing the last element with target
  if (fib1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  // element not found
  return -1;
}

// Example usage:
const sortedArr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
const index = fibonacciSearch(sortedArr, target);
console.log(index); // Output: 8 (index of 85 in array)
