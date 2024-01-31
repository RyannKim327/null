function fibonacciSearch(arr, x, n) {
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm1 + fibMMm2;

  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm1 + fibMMm2;
  }

  let offset = 0;

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, n - 1);

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

  if (fibMMm1 && arr[offset] === x) {
    return offset;
  }

  return -1;
}

// Example usage:
const array = [2, 4, 7, 12, 16, 20, 22];
const element = 16;
const size = array.length;

const result = fibonacciSearch(array, element, size);
console.log(result); // Output: 4
