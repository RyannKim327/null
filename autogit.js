function findMaxSubarray(array) {
  let maxSum = array[0];  // Initialize maxSum with the first element
  let currentSum = array[0];  // Initialize currentSum with the first element
  let startIndex = 0;  // Start index of the max subarray
  let endIndex = 0;  // End index of the max subarray
  let tempIndex = 0;  // Temporary index to keep track of the current start index

  for (let i = 1; i < array.length; i++) {
    // Compare the current element with the sum of the current element and the currentSum
    if (array[i] > array[i] + currentSum) {
      tempIndex = i;  // Update the temporary index as the current start index
      currentSum = array[i];  // Start a new subarray from the current element
    } else {
      currentSum = array[i] + currentSum;  // Extend the current subarray
    }

    // Compare the current sum with the maximum sum
    if (currentSum > maxSum) {
      maxSum = currentSum;  // Update the maximum sum
      startIndex = tempIndex;  // Update the start index of the max subarray
      endIndex = i;  // Update the end index of the max subarray
    }
  }

  // Return the max sum and the subarray within the start and end index
  return {
    maxSum: maxSum,
    subarray: array.slice(startIndex, endIndex + 1)
  };
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = findMaxSubarray(array);
console.log("Maximum sum:", result.maxSum);
console.log("Subarray:", result.subarray);
