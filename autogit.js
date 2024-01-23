function findMaxSumSubarray(arr) {
  if (!arr.length) {
    return 0; // Empty array, so the maximum sum is 0
  }

  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const arr = [1, -2, 3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSumSubarray(arr);
console.log("Maximum sum subarray:", maxSum);
Maximum sum subarray: 10
