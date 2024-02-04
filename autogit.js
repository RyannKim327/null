function findMaxSubarray(arr) {
  let maxSum = arr[0]; // Initialize the maximum sum as the first element
  let currentSum = arr[0]; // Initialize the current sum as the first element
  
  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Compare current element with the sum of the current element and the previous subarray
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    
    // Update the maximum sum if necessary
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum; // Return the maximum sum
}

// Example usage
const array = [-2, 3, -1, 5, 4, -7, 2, 1, -3, 6];
const maxSum = findMaxSubarray(array);
console.log(maxSum); // Output: 13
