function maxSubArray(nums: number[]): { maxSum: number, subArray: number[] } {
    if (nums.length === 0) {
        throw new Error("The input array is empty.");
    }

    let currentSum = nums[0];
    let maxSum = nums[0];

    // Variables to track the start and end indices of the max subarray
    let tempStart = 0;
    let start = 0;
    let end = 0;

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to extend the current subarray or start a new one
        if (currentSum + nums[i] > nums[i]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
            tempStart = i;
        }

        // Update maxSum and the indices if a new maximum is found
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    // Extract the subarray corresponding to the maximum sum
    const subArray = nums.slice(start, end + 1);

    return { maxSum, subArray };
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log(`Maximum Sum: ${result.maxSum}`);
console.log(`Subarray: ${result.subArray}`);
