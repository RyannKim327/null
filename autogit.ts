function longestIncreasingSubsequence(nums: number[]): number {
    if (nums.length === 0) return 0;

    const dp: number[] = new Array(nums.length).fill(1); // Initialize dp array

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp); // The length of the longest increasing subsequence
}

// Example usage:
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr)); // Output: 4
