function findMaxSubarray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarray(array);
console.log(maxSum); // Output: 6 (corresponding to the subarray [4, -1, 2, 1])
