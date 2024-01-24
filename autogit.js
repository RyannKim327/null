function fibonacciSearch(arr, key) {
  function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  const fib = generateFibonacci(arr.length);

  let offset = -1;
  let prevOffset = -1;
  let temp = fib[fib.length - 1];

  while (temp > 1) {
    if (arr[offset + prevOffset] === key) {
      return offset + prevOffset;
    }

    if (arr[offset + prevOffset] < key) {
      offset = prevOffset;
      temp -= fib[fib.indexOf(temp) - 1];
    } else {
      prevOffset = offset - prevOffset;
      temp -= fib[fib.indexOf(temp) - 2];
    }
  }

  if (arr[offset + 1] === key) {
    return offset + 1;
  }
  
  return -1;
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const key = 12;
const index = fibonacciSearch(arr, key);

console.log(`Key ${key} found at index ${index}`);
