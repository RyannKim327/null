function maxSubArray(nums: number[]): number {
    if (nums.length === 0) return 0; // handle edge case for empty array

    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Update currentMax to be either the current number or the current number plus the previous currentMax
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        
        // Update globalMax if we found a new maximum
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(arr);
console.log(result); // Output: 6, which corresponds to the subarray [4, -1, 2, 1]
