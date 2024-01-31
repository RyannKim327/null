function findMaxSubarraySum(array) {
  let maxSoFar = array[0];  // Initialize maxSoFar to the first element
  let maxEndingHere = array[0];  // Initialize maxEndingHere to the first element

  for (let i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage
const array = [1, -2, 3, -4, 5, -6, 7];
const maxSum = findMaxSubarraySum(array);
console.log("Maximum sum subarray:", maxSum);
