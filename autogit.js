let fibM2 = 0; // (M-2)th Fibonacci number
let fibM1 = 1; // (M-1)th Fibonacci number
let fibM = fibM2 + fibM1; // Mth Fibonacci number

while (fibM < n) {
  fibM2 = fibM1;
  fibM1 = fibM;
  fibM = fibM2 + fibM1;
}
let offset = -1;

while (fibM > 1) {
  // Check if fibM2 is a valid index
  const i = Math.min(offset + fibM2, n - 1);

  // If x is greater than the value at index i, move the fibM indices two steps down
  if (arr[i] < x) {
    fibM = fibM1;
    fibM1 = fibM2;
    fibM2 = fibM - fibM1;
    offset = i;
  }

  // If x is smaller than the value at index i, move the fibM indices one step down
  else if (arr[i] > x) {
    fibM = fibM2;
    fibM1 = fibM1 - fibM2;
    fibM2 = fibM - fibM1;
  }

  // If x is found, return the index
  else {
    return i;
  }
}
return -1;
function fibonacciSearch(arr, x, n) {
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM2 + fibM1;

  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);

    if (arr[i] < x) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    } else {
      return i;
    }
  }

  return -1;
}
