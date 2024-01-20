function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}
function fibonacciSearch(arr, key) {
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = fibNMinus1 + fibNMinus2;

  while (fibN < arr.length) {
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
    fibN = fibNMinus1 + fibNMinus2;
  }

  let offset = -1;

  while (fibN > 1) {
    let i = Math.min(offset + fibNMinus2, arr.length - 1);

    if (arr[i] < key) {
      fibN = fibNMinus1;
      fibNMinus1 = fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
      offset = i;
    } else if (arr[i] > key) {
      fibN = fibNMinus2;
      fibNMinus1 = fibNMinus1 - fibNMinus2;
      fibNMinus2 = fibN - fibNMinus1;
    } else {
      return i;
    }
  }

  if (fibNMinus1 && arr[offset + 1] === key) {
    return offset + 1;
  }

  return -1;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const key = 10;
const index = fibonacciSearch(arr, key);

if (index !== -1) {
  console.log(`Element ${key} found at index ${index}`);
} else {
  console.log(`Element ${key} not found`);
}
Element 10 found at index 4
