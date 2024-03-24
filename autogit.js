function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp[i]);
    }

    return max;
}

// Example usage:
const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output should be 6
