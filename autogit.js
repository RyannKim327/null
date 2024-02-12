function findMaxSumSubarray(arr) {
  let maxSum = arr[0]; // Initialize maxSum with the first element of the array
  let currentSum = arr[0]; // Initialize currentSum with the first element of the array

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Calculate the maximum between the current element and the sum of the current element and the previous subarray
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maxSum if the currentSum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSumSubarray(array);
console.log(maxSum); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])
