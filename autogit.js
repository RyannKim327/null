function findMaxSubarray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarray(array);
console.log(maxSubarraySum);  // Output: 6 (corresponding to [4, -1, 2, 1])
