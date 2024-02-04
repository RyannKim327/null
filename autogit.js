function findMaxSubarray(array) {
  let maxSoFar = array[0];
  let maxEndingHere = array[0];

  for (let i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarray(array);
console.log(maxSubarraySum); // Output: 6
