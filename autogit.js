function findMaxSubarraySum(arr) {
  let maxSum = arr[0];  // Initialize the maximum sum
  let currentSum = arr[0]; // Initialize the current sum

  for (let i = 1; i < arr.length; i++) {
    // Compare the current element with the sum ending at the previous position
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(array);
console.log("Maximum sum subarray:", maxSum);
