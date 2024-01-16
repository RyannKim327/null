function fibonacciSearch(arr, x) {
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM2 + fibM1;

  while (fibM < arr.length) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fibM2, arr.length - 1);

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

  if (fibM1 && arr[offset + 1] === x) {
    return offset + 1;
  }

  return -1;
}
const array = [1, 3, 5, 9, 13, 21, 34, 55, 89];
const value = 13;

console.log(fibonacciSearch(array, value)); // Output: 4
