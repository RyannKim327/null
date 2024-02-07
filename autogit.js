function findMaxSumSubarray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [1, -3, 2, 1, -1];
const maxSum = findMaxSumSubarray(array);
console.log(maxSum); // Output: 3
