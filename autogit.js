function fibonacciSearch(arr, x) {
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;

  while (fibM < arr.length) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;

  while (fibM > 1) {
    // Check if fibMMm2 is still a valid location within the array
    const i = Math.min(offset + fibMMm2, arr.length - 1);

    if (arr[i] < x) {
      // If x is greater than the value at index i, move the Fibonacci sequence two steps down
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > x) {
      // If x is smaller than the value at index i, move the Fibonacci sequence one step down
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      // Found the element at index i
      return i;
    }
  }

  // If x is equal to the last element in the array, return its index
  if (fibMMm1 && arr[offset + 1] == x) {
    return offset + 1;
  }

  // Element not found in array
  return -1;
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const x = 11;
const result = fibonacciSearch(arr, x);

console.log(result); // Output: 5 (index of element 11 in the array)
