function fibonacciSearch(arr, target) {
  // Step 2: Create Fibonacci numbers array
  const fibNums = [0, 1];
  while (fibNums[fibNums.length - 1] < arr.length) {
    fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
  }

  // Step 3: Find the smallest Fibonacci number greater than or equal to array length
  let fibIndex = fibNums.length - 1;
  while (fibNums[fibIndex] > arr.length) {
    fibIndex--;
  }

  // Step 4: Initialize offset and prevOffset
  let offset = 0;
  let prevOffset = 0;

  // Step 5: Fibonnaci search
  while (offset < arr.length) {
    if (arr[offset] === target) {
      return offset; // Found target value
    } else if (arr[offset] > target) {
      offset -= prevOffset;
      let temp = prevOffset;
      prevOffset = fibNums[fibIndex - 1];
      fibIndex -= 2;
      offset += prevOffset;
    } else {
      prevOffset = fibNums[fibIndex - 1];
      fibIndex--;
      offset += prevOffset;
    }
  }

  // Step 6: Target value not found
  return -1;
}
const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const target = 17;
const result = fibonacciSearch(arr, target);
console.log(result); // Output: 6 (index of the target value in the array)
