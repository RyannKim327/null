let fibMinus2 = 0;
let fibMinus1 = 1;
let fib = fibMinus1 + fibMinus2;

while (fib < arr.length) {
  fibMinus2 = fibMinus1;
  fibMinus1 = fib;
  fib = fibMinus1 + fibMinus2;
}
let offset = -1;
while (fib > 1) {
  const i = Math.min(offset + fibMinus2, arr.length - 1);

  if (arr[i] < target) {
    fib = fibMinus1;
    fibMinus1 = fibMinus2;
    fibMinus2 = fib - fibMinus1;
    offset = i;
  } else if (arr[i] > target) {
    fib = fibMinus2;
    fibMinus1 = fibMinus1 - fibMinus2;
    fibMinus2 = fib - fibMinus1;
  } else {
    return i; // Return the index if the element is found
  }
}
if (fibMinus1 && arr[offset + 1] === target) {
  return offset + 1; // Return the index if the element is found
}
return -1;
function fibonacciSearch(arr, target) {
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fib = fibMinus1 + fibMinus2;

  while (fib < arr.length) {
    fibMinus2 = fibMinus1;
    fibMinus1 = fib;
    fib = fibMinus1 + fibMinus2;
  }

  let offset = -1;

  while (fib > 1) {
    const i = Math.min(offset + fibMinus2, arr.length - 1);

    if (arr[i] < target) {
      fib = fibMinus1;
      fibMinus1 = fibMinus2;
      fibMinus2 = fib - fibMinus1;
      offset = i;
    } else if (arr[i] > target) {
      fib = fibMinus2;
      fibMinus1 = fibMinus1 - fibMinus2;
      fibMinus2 = fib - fibMinus1;
    } else {
      return i; // Return the index if the element is found
    }
  }

  if (fibMinus1 && arr[offset + 1] === target) {
    return offset + 1; // Return the index if the element is found
  }

  return -1; // Element not found
}
const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55];
const target = 13;

const result = fibonacciSearch(arr, target);

console.log(result); // Output: 5
