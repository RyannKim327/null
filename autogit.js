function fibonacciSearch(arr, target) {
  // ...
}
function generateFibonacciSequence(length) {
  const fib = [0, 1];
  let i = 1;
  while (fib[i] < length) {
    fib.push(fib[i] + fib[i - 1]);
    i++;
  }
  return fib;
}

// Example usage:
const arr = [10, 20, 30, 40, 50];
const fibSequence = generateFibonacciSequence(arr.length);
console.log(fibSequence);
function getSmallestFibonacciNumber(sequence, length) {
  let i = 0;
  while (sequence[i] < length) {
    i++;
  }
  return i;
}

// Example usage:
const arrLength = arr.length;
const fibNumberIndex = getSmallestFibonacciNumber(fibSequence, arrLength);
console.log(fibNumberIndex);
function fibonacciSearch(arr, target) {
  const length = arr.length;
  const fibSequence = generateFibonacciSequence(length);
  const fibNumberIndex = getSmallestFibonacciNumber(fibSequence, length);

  let offset = -1;
  let k = fibNumberIndex;
  let i;

  while (k > 0) {
    i = Math.min(offset + fibSequence[k - 2], length - 1);

    if (arr[i] < target) {
      k--;
      offset = i;
    } else if (arr[i] > target) {
      k -= 2;
    } else {
      return i;
    }
  }

  return -1;
}

// Example usage:
console.log(fibonacciSearch(arr, 30));
