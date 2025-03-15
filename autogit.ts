function maxSubArray(nums: number[]): number {
    let maxSoFar = nums[0]; // Initialize maxSoFar with the first element
    let maxEndingHere = nums[0]; // Initialize maxEndingHere with the first element

    for (let i = 1; i < nums.length; i++) {
        // Update maxEndingHere to include the current element
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update maxSoFar if maxEndingHere is greater
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6 (subarray [4, -1, 2, 1] has the maximum sum)
