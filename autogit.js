function generateFibonacci(length) {
  const sequence = [0, 1]; // Initial sequence elements

  for (let i = 2; i <= length; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}
function fibonacciSearch(arr, key) {
  let length = arr.length;

  // Generate Fibonacci sequence
  const fib = generateFibonacci(10); // Generate a sequence of length 10, you can increase it based on your needs

  // Initialize fibonacci numbers
  let fib2 = 0;
  let fib1 = 1;
  let fib0 = fib2 + fib1;

  // Find the smallest Fibonacci number greater than or equal to the array length
  while (fib0 < length) {
    fib2 = fib1;
    fib1 = fib0;
    fib0 = fib2 + fib1;
  }

  let offset = -1;

  while (fib0 > 1) {
    const i = Math.min(offset + fib2, length - 1);

    if (arr[i] < key) {
      fib0 = fib1;
      fib1 = fib2;
      fib2 = fib0 - fib1;
      offset = i;
    } else if (arr[i] > key) {
      fib0 = fib2;
      fib1 = fib1 - fib2;
      fib2 = fib0 - fib1;
    } else {
      return i;
    }
  }

  if (fib1 && arr[offset + 1] === key) {
    return offset + 1;
  }

  return -1;
}
const arr = [2, 3, 5, 8, 13, 21, 34, 55];
const key = 13;

const index = fibonacciSearch(arr, key);
console.log(`Found at index: ${index}`);
