function fibonacciSearch(array, target) {
  // Implement the algorithm here
}
function calculateFibonacci(length) {
  const fibonacci = [0, 1];
  let i = 2;
  while (fibonacci[i - 1] < length) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    i++;
  }

  return fibonacci;
}
function fibonacciSearch(array, target) {
  const fibonacci = calculateFibonacci(array.length);
  let offset = -1;
  let index = fibonacci.length - 1;

  // Algorithm implementation continues here
}
while (index > 1 && offset !== 0) {
  const pos = Math.min(offset + fibonacci[index - 2], array.length - 1);

  if (array[pos] < target) {
    index -= 1;
    offset = pos;
  } else if (array[pos] > target) {
    index -= 2;
  } else {
    return pos; // Found the target
  }
}
return -1;
function fibonacciSearch(array, target) {
  const fibonacci = calculateFibonacci(array.length);
  let offset = -1;
  let index = fibonacci.length - 1;

  while (index > 1 && offset !== 0) {
    const pos = Math.min(offset + fibonacci[index - 2], array.length - 1);

    if (array[pos] < target) {
      index -= 1;
      offset = pos;
    } else if (array[pos] > target) {
      index -= 2;
    } else {
      return pos; // Found the target
    }
  }

  return -1; // Target not found
}

function calculateFibonacci(length) {
  const fibonacci = [0, 1];
  let i = 2;
  while (fibonacci[i - 1] < length) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    i++;
  }

  return fibonacci;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
const index = fibonacciSearch(array, target);
console.log(index); // Output: 5
