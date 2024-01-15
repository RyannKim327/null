function findMaxSubarraySum(arr) {
  let maxSum = arr[0]; // Initialize the maximum sum as the first element
  let currentSum = arr[0]; // Initialize the current sum as the first element

  // Iterate through the array, starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Calculate the current sum by either extending the subarray or starting a new subarray
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    
    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarraySum(array)); // Output: 6 (from subarray [4, -1, 2, 1])
