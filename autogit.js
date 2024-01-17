function findMaxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// Example usage:
const array = [1, -2, 3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum); // Output: 10 (corresponding to subarray [3, 4, -1, 2, 1])
