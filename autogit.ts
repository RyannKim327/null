function maxSubarraySum(arr: number[]): number {
  if (arr.length === 0) return 0; // or handle empty input as you prefer

  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const exampleArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(exampleArray)); // Output: 6 (subarray [4, -1, 2, 1])
