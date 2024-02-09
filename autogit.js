function findMaxSubarraySum(arr) {
  let currentSum = arr[0];  // Initialize the current sum with the first element of the array
  let maxSum = arr[0];      // Initialize the maximum sum with the first element of the array

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Calculate the current sum by adding the current element to the previous sum or starting a new subarray
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [1, -3, 2, 1, -1];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum);  // Output: 3
