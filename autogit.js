function findMaxSubarraySum(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      start = i + 1; // move the starting point to the next index
    }
  }

  // Return the subarray with maximum sum
  const subarray = arr.slice(start, end + 1);
  return { maxSum, subarray };
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const { maxSum, subarray } = findMaxSubarraySum(array);

console.log("Maximum sum:", maxSum);
console.log("Subarray with maximum sum:", subarray);
