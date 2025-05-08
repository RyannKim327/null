function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxSoFar = nums[0];  // This variable will hold the maximum sum found so far
    let maxEndingHere = nums[0];  // This variable will hold the maximum sum of the subarray ending at the current position

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result);  // Output: 6, which is the sum of the subarray [4, -1, 2, 1]
