function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    const dp = new Array(n).fill(1);
    let maxLen = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

// Test the function
const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output: 6
