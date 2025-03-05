function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array is empty");
    }

    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Update the current maximum including the current number
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

        // Update the global maximum if the current maximum is larger
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArray(array);
console.log(maxSum); // Output: 6 (subarray: [4, -1, 2, 1])
