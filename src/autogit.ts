function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array must not be empty");
    }

    let maxSoFar = nums[0]; // This will hold the maximum sum found so far
    let maxEndingHere = nums[0]; // This will hold the maximum sum of the subarray ending at the current position

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]); // Update maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // Update maxSoFar if needed
    }

    return maxSoFar; // Return the maximum sum found
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6 (subarray [4, -1, 2, 1] has the maximum sum)
