function fibonacciSearch(arr, x) {
  // Generate the Fibonacci series
  const fibonacci = generateFibonacci(arr.length);

  let offset = -1; // Offset from the start of the array

  // Loop until the smallest Fibonacci number is greater than or equal to array length
  while (fibonacci[0] >= 0) {
    // Find the index of the element to be searched using Fibonacci series
    const i = Math.min(offset + fibonacci[0], arr.length - 1);

    // If the element is found, return its index
    if (arr[i] === x) {
      return i;
    }
    // If the element is larger than the current Fibonacci element
    // move the offset to skip the checked elements
    else if (arr[i] < x) {
      fibonacci.splice(0, 1);
      offset = i;
    }
    // If the element is smaller than the current Fibonacci element
    // Move two Fibonacci steps down to get a smaller range to search
    else {
      fibonacci.splice(0, 2);
    }
  }

  // Element not found
  return -1;
}
function generateFibonacci(n) {
  const fibonacci = [0, 1]; // Initialize with the first two Fibonacci numbers

  while (fibonacci[fibonacci.length - 1] < n) {
    // Generate the next Fibonacci number
    const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(next);
  }

  return fibonacci.reverse(); // Reverse the series for easier handling
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const x = 12;
const index = fibonacciSearch(arr, x);

if (index !== -1) {
  console.log(`Element ${x} is found at index ${index}.`);
} else {
  console.log(`Element ${x} is not found in the array.`);
}
