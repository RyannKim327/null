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

    let maxLength = Math.max(...dp);
    let result = [];
    let lastIndex = dp.indexOf(maxLength);

    for (let i = lastIndex; i >= 0; i--) {
        if (dp[i] === maxLength && (result.length === 0 || arr[i] < result[result.length - 1])) {
            result.unshift(arr[i]);
            maxLength--;
        }
    }

    return result;
}

// Test the function
const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log('Longest Increasing Subsequence:', longestIncreasingSubsequence(array));
