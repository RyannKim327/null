function findMaxSubarraySum(arr) {
  // Initialize variables to track current sum and maximum sum
  let currentSum = 0;
  let maxSum = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the current sum
    currentSum += arr[i];

    // If current sum is negative, reset it to 0
    if (currentSum < 0) {
      currentSum = 0;
    }

    // If current sum is greater than maximum sum, update the maximum sum
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// Example usage
const array = [1, -3, 2, 1, -1];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum); // Output: 3
