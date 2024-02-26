function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let dp = new Array(arr.length).fill(1);
    let maxLen = 1;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr));  // Output: 6
