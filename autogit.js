function findMaxSubarraySum(arr) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];
    
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
    
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }

  return maxSoFar;
}

// Example usage:
const array = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(findMaxSubarraySum(array)); // Outputs 7
