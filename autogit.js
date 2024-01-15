function findMaxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Find the maximum sum by either extending the subarray or starting a new subarray
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    // Update the maximum sum so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum); // Output: 6
