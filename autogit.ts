function maxSubArray(nums: number[]): number {
    // Initialize currentSum and maxSum
    let currentSum = nums[0];
    let maxSum = nums[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update currentSum to be the maximum of the current number itself or the current number plus the previous currentSum
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum to be the maximum of itself or the currentSum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(array)); // Output: 6 (subarray is [4, -1, 2, 1])
