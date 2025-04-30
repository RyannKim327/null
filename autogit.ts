function maxSubArray(nums: number[]): number {
    let currentMax = nums[0];
    let overallMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Update the current maximum by including the current number
        // or starting a new subarray with the current number
        currentMax = Math.max(nums[i], currentMax + nums[i]);

        // Update the overall maximum found so far
        overallMax = Math.max(overallMax, currentMax);
    }

    return overallMax;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6 (the subarray [4, -1, 2, 1] has the maximum sum)
