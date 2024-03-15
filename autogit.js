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

    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        maxLen = Math.max(maxLen, dp[i]);
    }

    let result = [];
    let lastIndex = dp.indexOf(maxLen);
    while (lastIndex >= 0) {
        result.unshift(arr[lastIndex]);
        let prevIndex = dp.slice(0, lastIndex).lastIndexOf(maxLen - 1);
        lastIndex = prevIndex;
        maxLen--;
    }

    return result;
}

const arr = [3, 10, 2, 1, 20];
console.log(longestIncreasingSubsequence(arr)); // Output: [3, 10, 20]
