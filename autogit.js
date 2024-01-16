function findMaxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(arr);
console.log(maxSum); // Output: 6 (from subarray [4, -1, 2, 1])
