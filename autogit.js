function findMaxSubarray(arr) {
  let maxSum = 0; // The maximum sum found so far
  let currentSum = 0; // The sum of the current subarray
  let startIndex = 0; // Start index of the maximum sum subarray
  let endIndex = 0; // End index of the maximum sum subarray

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum < 0) {
      // If current sum becomes negative, reset it to zero
      currentSum = 0;
      startIndex = i + 1; // Move the start index to the next element
    }

    if (currentSum > maxSum) {
      // If current sum is greater than the maximum sum found so far
      maxSum = currentSum;
      endIndex = i; // Update the end index of the subarray
    }
  }

  // Extract the maximum sum subarray
  const maxSubarray = arr.slice(startIndex, endIndex + 1);

  return { maxSum, maxSubarray };
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = findMaxSubarray(arr);
console.log('Maximum sum:', result.maxSum);
console.log('Maximum sum subarray:', result.maxSubarray);
