const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// The longest increasing subsequence is [2, 3, 7, 101], so the length is 4.
function findLongestIncreasingSubsequence(nums: number[]): { length: number; subsequence: number[] } {
    if (nums.length === 0) {
        return { length: 0, subsequence: [] };
    }

    const n = nums.length;
    const dp: number[] = new Array(n).fill(1);
    const prev: number[] = new Array(n).fill(-1);

    let maxLength = 1;
    let endIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        // Update the maximum length and end index
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            endIndex = i;
        }
    }

    // Reconstruct the longest increasing subsequence
    const lis: number[] = [];
    let currentIndex = endIndex;

    while (currentIndex !== -1) {
        lis.push(nums[currentIndex]);
        currentIndex = prev[currentIndex];
    }

    // The sequence is built backwards, so reverse it
    lis.reverse();

    return { length: maxLength, subsequence: lis };
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = findLongestIncreasingSubsequence(nums);
console.log(`Length of LIS: ${result.length}`);           // Output: Length of LIS: 4
console.log(`Longest Increasing Subsequence: ${result.subsequence}`); // Output: Longest Increasing Subsequence: 2,3,7,101
