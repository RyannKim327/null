function fibonacciSearch(arr, x, n) {
  let fibMM2 = 0; 
  let fibMM1 = 1;
  // rest of the code goes here
}
while (fibMM1 < n) {
  let temp = fibMM2;
  fibMM2 = fibMM1;
  fibMM1 = temp + fibMM1;
}
let offset = 0;
while (fibMM2 > 1) {
  let i = Math.min(offset + fibMM2, n - 1);

  if (arr[i] < x) {
    fibMM2 = fibMM1;
    fibMM1 = fibMM2 - fibMM1;
    offset = i;
  } else if (arr[i] > x) {
    fibMM2 = fibMM2 - fibMM1;
    fibMM1 = fibMM1 - fibMM2;
  } else {
    return i;
  }
}
return -1;
function fibonacciSearch(arr, x, n) {
  let fibMM2 = 0;
  let fibMM1 = 1;

  while (fibMM1 < n) {
    let temp = fibMM2;
    fibMM2 = fibMM1;
    fibMM1 = temp + fibMM1;
  }

  let offset = 0;

  while (fibMM2 > 1) {
    let i = Math.min(offset + fibMM2, n - 1);

    if (arr[i] < x) {
      fibMM2 = fibMM1;
      fibMM1 = fibMM2 - fibMM1;
      offset = i;
    } else if (arr[i] > x) {
      fibMM2 = fibMM2 - fibMM1;
      fibMM1 = fibMM1 - fibMM2;
    } else {
      return i;
    }
  }

  return -1;
}
