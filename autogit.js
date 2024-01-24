function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Check if the current element increases the sum or starts a new subarray
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    
    // Update the maximum sum so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubarraySum(array);
console.log(maxSum); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])
