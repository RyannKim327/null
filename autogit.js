function findMaxSubarraySum(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the current sum
    currentSum += arr[i];

    // If the current sum is negative, reset it to 0
    if (currentSum < 0) {
      currentSum = 0;
    }

    // Update the maximum sum if the current sum is greater
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// Example usage
const array = [1, -2, 3, 4, -5, 6, -7, 8, 9];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum); // Output: 18 (3 + 4 + -5 + 6 + -7 + 8 + 9 = 18)
