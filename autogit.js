function findMaxSumSubarray(arr) {
  // Set the initial values for the maximum sum and current sum
  let maxSum = arr[0];
  let currentSum = arr[0];

  // Iterate over the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Choose the maximum between the current element and the current element + current sum
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if current sum is greater
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSumSubarray(array);
console.log(maxSum); // Output: 6 (the maximum sum subarray is [4, -1, 2, 1])
