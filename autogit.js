function findMaximumSubarray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Calculate the maximum sum ending at the current position
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

    // Update the maximum sum so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maximumSum = findMaximumSubarray(array);
console.log(maximumSum); // Output: 6 (subarray: [4, -1, 2, 1])
