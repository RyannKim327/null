function findMaxSubarraySum(arr) {
  let maxSoFar = arr[0];  // Maximum sum found so far
  let maxEndingHere = arr[0];  // Maximum sum ending at the current position

  for (let i = 1; i < arr.length; i++) {
    // Extend the subarray or start a new one at arr[i]
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

    // Update the maximum sum found so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(arr);
console.log(maxSum);  // Output: 6
