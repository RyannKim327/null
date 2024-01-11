function fibonacciSearch(arr, x, n) {
  // Step 2: Initialize the Fibonacci numbers
  let fibMMm2 = 0; // (m-2)th Fibonacci number
  let fibMMm1 = 1; // (m-1)th Fibonacci number
  let fibM = fibMMm2 + fibMMm1; // mth Fibonacci number
 
  // Step 3: Find the smallest Fibonacci number greater than or equal to n
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }
 
  let offset = -1; // Offset of the range from the first element
 
  // Step 4: Perform the search by comparing the element at the offset with x
  while (fibM > 1) {
    // Check if fibMMm2 is a valid location
    let i = Math.min(offset + fibMMm2, n - 1);
 
    // If x is greater than the value at index fibMMm2, cut the subarray from offset to i
    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    }
 
    // If x is less than the value at index fibMMm2, cut the subarray after i+1
    else if (arr[i] > x) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    }
 
    // x found
    else {
      return i;
    }
  }
 
  // Step 5: If the last element is x
  if (fibMMm1 === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }
 
  // Element not found
  return -1;
}
let arr = [2, 3, 5, 7, 10, 13, 21, 34];
let n = arr.length;
let x = 13;

let result = fibonacciSearch(arr, x, n);
console.log("Element found at index", result);
