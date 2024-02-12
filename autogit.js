function findMaxSumSubarray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Calculate the maximum sum ending at the current element
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

    // Update the maximum sum so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSumSubarray(array);
console.log("Maximum sum subarray:", maxSum);
