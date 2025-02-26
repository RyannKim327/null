function maxSubArray(nums: number[]): number {
    let maxSoFar = nums[0]; // Initialize with the first element
    let maxEndingHere = nums[0]; // Initialize with the first element

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]); // Compute maximum ending here
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // Update maxSoFar if needed
    }

    return maxSoFar; // Return the maximum sum found
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(array)); // Outputs 6 (subarray [4, -1, 2, 1])
