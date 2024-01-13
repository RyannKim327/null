function findMaxSubarraySum(array) {
  let maxSoFar = array[0];
  let maxEndingHere = array[0];

  for (let i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + array[i], array[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const array = [-2, -3, 4, -1, -2, 1, 5, -3];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum);  // Output: 7
