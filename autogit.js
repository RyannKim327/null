function findMaxSubarray(arr) {
  let maxSum = arr[0];  // maximum sum encountered so far
  let currentSum = arr[0];  // current sum for comparison

  for (let i = 1; i < arr.length; i++) {
    // Check if the current element improves the current subarray sum
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if the current subarray sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarray(arr);
console.log("Maximum sum subarray:", maxSubarraySum);
