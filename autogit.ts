function longestIncreasingSubsequence(nums: number[]): number[] {
    if (nums.length === 0) return [];

    const dp: number[] = new Array(nums.length).fill(1);
    const prev: number[] = new Array(nums.length).fill(-1);

    let maxLength = 1;
    let maxIndex = 0;

    // Fill dp array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
                if (dp[i] > maxLength) {
                    maxLength = dp[i];
                    maxIndex = i;
                }
            }
        }
    }

    // Reconstruct the longest increasing subsequence
    const lis: number[] = [];
    let index = maxIndex;
    while (index !== -1) {
        lis.unshift(nums[index]);
        index = prev[index];
    }

    return lis;
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr)); // Output: [2, 3, 7, 101]
