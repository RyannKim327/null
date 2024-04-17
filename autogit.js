function longestIncreasingSubsequence(arr) {
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

    let result = [];
    let currentLength = maxLength;
    for (let i = dp.length - 1; i >= 0; i--) {
        if (dp[i] === currentLength) {
            result.unshift(arr[i]);
            currentLength--;
        }
    }

    return result;
}

// Example usage
const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const lis = longestIncreasingSubsequence(arr);
console.log('Longest Increasing Subsequence:', lis);
