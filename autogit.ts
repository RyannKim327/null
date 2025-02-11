function longestIncreasingSubsequence(nums: number[]): number[] {
    if (nums.length === 0) return [];

    const dp: number[] = Array(nums.length).fill(1);
    const prev: number[] = Array(nums.length).fill(-1);

    let maxLength = 1;
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }

    const lis: number[] = [];
    for (let i = maxIndex; i >= 0; i = prev[i]) {
        lis.push(nums[i]);
        if (prev[i] === -1) break;
    }

    return lis.reverse();
}

// Example usage:
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
const result = longestIncreasingSubsequence(arr);
console.log(result); // Output: [2, 3, 7, 101]
