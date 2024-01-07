function findMaxSubarray(arr) {
  // Initialize variables for storing the current max sum and the maximum sum subarray
  let maxSum = arr[0];
  let currentSum = arr[0];
  let maxStartIndex = 0;
  let maxEndIndex = 0;
  let currentStartIndex = 0;

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Update the current sum by adding the current element or starting a new subarray
    if (currentSum + arr[i] < arr[i]) {
      currentSum = arr[i];
      currentStartIndex = i;
    } else {
      currentSum += arr[i];
    }

    // Update the maximum sum and the corresponding subarray if found
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = i;
    }
  }

  // Extract the maximum sum subarray
  const maxSubarray = arr.slice(maxStartIndex, maxEndIndex + 1);

  return {
    maxSum: maxSum,
    maxSubarray: maxSubarray,
  };
}

// Example usage
const arr = [1, -2, 3, 5, -3, 2];
const result = findMaxSubarray(arr);
console.log(result.maxSum); // Output: 8
console.log(result.maxSubarray); // Output: [3, 5]
