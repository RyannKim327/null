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
        if (dp[i] > maxLength) {
            maxLength = dp[i];
        }
    }

    const longestIncreasingSubsequence = [];
    let currentLength = maxLength;
    for (let i = n - 1; i >= 0; i--) {
        if (dp[i] === currentLength) {
            longestIncreasingSubsequence.unshift(arr[i]);
            currentLength--;
        }
    }

    return longestIncreasingSubsequence;
}

// Example usage
const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const result = longestIncreasingSubsequence(arr);
console.log(result); // Output: [10, 22, 33, 50, 60, 80]
