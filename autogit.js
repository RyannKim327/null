function findMaxSubarraySum(arr) {
  let maxSum = arr[0];  // Initialize maxSum with the first element
  let currentSum = arr[0];  // Initialize currentSum with the first element

  for (let i = 1; i < arr.length; i++) {
    // Calculate the maximum sum ending at index i
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(array);
console.log("Maximum sum of a subarray:", maxSum);
Maximum sum of a subarray: 6
