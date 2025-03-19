function longestIncreasingSubsequence(nums: number[]): number {
    if (nums.length === 0) return 0;

    const dp: number[] = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lengthOfLIS = longestIncreasingSubsequence(nums);
console.log(lengthOfLIS); // Output: 4
