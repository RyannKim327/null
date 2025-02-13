function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array must not be empty");
    }

    let maxSoFar = nums[0];  // This keeps track of the overall maximum sum
    let maxEndingHere = nums[0];  // This keeps track of the maximum sum ending at the current position

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]); // Update maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // Update maxSoFar
    }

    return maxSoFar;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6, which corresponds to the subarray [4, -1, 2, 1]
