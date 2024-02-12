function maxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  let startIndex = 0;
  let endIndex = 0;
  let tempIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = tempIndex;
      endIndex = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      tempIndex = i + 1;
    }
  }

  const maxSubarray = arr.slice(startIndex, endIndex + 1);

  return {
    maxSum,
    maxSubarray
  };
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(array);

console.log('Maximum sum:', result.maxSum);
console.log('Maximum sum subarray:', result.maxSubarray);
Maximum sum: 6
Maximum sum subarray: [4, -1, 2, 1]
