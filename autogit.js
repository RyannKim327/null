function findMaxSubarray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Calculate the current sum by either extending the previous subarray or starting a new subarray
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const arr = [1, -3, 2, 1, -1];
const maxSum = findMaxSubarray(arr);
console.log(maxSum); // Output: 3
