function maxSubArray(nums: number[]): number {
    let maxSoFar = nums[0]; // Initialize maxSoFar with the first element
    let currentMax = nums[0]; // Initialize currentMax with the first element

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]); // Update currentMax
        maxSoFar = Math.max(maxSoFar, currentMax); // Update maxSoFar
    }

    return maxSoFar; // Return the maximum sum found
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6 (subarray [4, -1, 2, 1] has the maximum sum)
