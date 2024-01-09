function fibonacciSearch(arr, x) {
  // ...
}
let fibMMm2 = 0; // (m-2)'th Fibonacci number
let fibMMm1 = 1; // (m-1)'th Fibonacci number
let fibM = fibMMm2 + fibMMm1; // mth Fibonacci number
while (fibM < arr.length) {
  fibMMm2 = fibMMm1;
  fibMMm1 = fibM;
  fibM = fibMMm2 + fibMMm1;
}
let offset = -1; // Offset from the first element
let current = fibMMm2; // Current index
while (fibM > 1) {
  // Check if fibMMm2 is a valid position
  const i = Math.min(offset + fibMMm2, arr.length - 1);

  if (arr[i] < x) {
    // If x is greater, move the index to the right
    fibM = fibMMm1;
    fibMMm1 = fibMMm2;
    fibMMm2 = fibM - fibMMm1;
    offset = i;
  } else if (arr[i] > x) {
    // If x is smaller, move the index to the left
    fibM = fibMMm2;
    fibMMm1 = fibMMm1 - fibMMm2;
    fibMMm2 = fibM - fibMMm1;
  } else {
    // Element found
    return i;
  }
}
if (fibMMm1 === 1 && arr[offset + 1] == x) {
  return offset + 1;
}
return -1;
function fibonacciSearch(arr, x) {
  let fibMMm2 = 0; // (m-2)'th Fibonacci number
  let fibMMm1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibMMm2 + fibMMm1; // mth Fibonacci number
  while (fibM < arr.length) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1; // Offset from the first element
  let current = fibMMm2; // Current index

  while (fibM > 1) {
    const i = Math.min(offset + fibMMm2, arr.length - 1);

    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      return i;
    }
  }

  if (fibMMm1 === 1 && arr[offset + 1] == x) {
    return offset + 1;
  }

  return -1;
}
const arr = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const x = 13;
const index = fibonacciSearch(arr, x);
console.log(`Element ${x} found at index ${index}`);
