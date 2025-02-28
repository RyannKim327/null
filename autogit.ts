function maxSubArray(nums: number[]): number {
    let maxSoFar = nums[0]; // Initialize maxSoFar with the first element
    let currentMax = nums[0]; // Initialize currentMax with the first element

    for (let i = 1; i < nums.length; i++) {
        // Update currentMax to be the maximum of the current element or the currentMax plus the current element
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        
        // Update maxSoFar if currentMax is greater
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar; // Return the maximum sum found
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6 (subarray [4, -1, 2, 1] has the maximum sum)
