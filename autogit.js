function fibonacciSearch(arr, x, n) {
  // ...
}
function generateFib(n) {
  const fib = [0, 1];
  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
const fib = generateFib(n);

let offset = -1;
let prev = fib[fib.length - 2];
let curr = fib[fib.length - 3];
while (curr >= 0 && curr < n) {
  if (arr[offset + prev] < x) {
    offset = offset + prev;
    prev = curr;
    curr = fib[fib.indexOf(prev) - 1];
  } else if (arr[offset + prev] > x) {
    prev = curr;
    curr = fib[fib.indexOf(curr) - 2];
  } else {
    return offset + prev;
  }
}
return -1;
function generateFib(n) {
  const fib = [0, 1];
  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}

function fibonacciSearch(arr, x, n) {
  const fib = generateFib(n);

  let offset = -1;
  let prev = fib[fib.length - 2];
  let curr = fib[fib.length - 3];

  while (curr >= 0 && curr < n) {
    if (arr[offset + prev] < x) {
      offset = offset + prev;
      prev = curr;
      curr = fib[fib.indexOf(prev) - 1];
    } else if (arr[offset + prev] > x) {
      prev = curr;
      curr = fib[fib.indexOf(curr) - 2];
    } else {
      return offset + prev;
    }
  }

  return -1;
}
const arr = [4, 8, 15, 16, 23, 42];
const x = 16;
const n = arr.length;

const index = fibonacciSearch(arr, x, n);

if (index === -1) {
  console.log("Element not found");
} else {
  console.log(`Element found at index ${index}`);
}
