function findMaxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;
  let start = 0;
  let end = 0;
  let startIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = startIndex;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      startIndex = i + 1;
    }
  }

  return arr.slice(start, end + 1);
}

// Example Usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarray = findMaxSubarraySum(array);

console.log(`Maximum sum subarray: ${maxSubarray}`);
Maximum sum subarray: 4,-1,2,1
