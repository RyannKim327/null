function findMaxSubarraySum(arr) {
  let maxSoFar = arr[0];  // Initialize the maximum sum to the first element
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Calculate the maximum sum ending at the current index
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    
    // Update the maximum sum so far if the current maximum sum is greater
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(arr);
console.log(maxSum);  // Output: 6
