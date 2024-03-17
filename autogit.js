function findLongestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        maxLength = Math.max(maxLength, dp[i]);
    }

    const lis = [];
    let len = maxLength;
    for (let i = n - 1; i >= 0 && len > 0; i--) {
        if (dp[i] === len) {
            lis.unshift(arr[i]);
            len--;
        }
    }

    return lis;
}

// Example Usage
const arr = [3, 4, 2, 8, 10, 5, 1];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);

console.log("Longest Increasing Subsequence:", longestIncreasingSubsequence);
