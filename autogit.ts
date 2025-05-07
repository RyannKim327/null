function maxSubArray(nums: number[]): number {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Extend the previous subarray or start fresh from current element
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    // Track the max sum found so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6 (subarray [4,-1,2,1])
