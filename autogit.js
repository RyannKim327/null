function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    let maxLen = 0;
    let endIndex = -1;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLen === 0) {
        return '';
    }

    return str1.substring(endIndex - maxLen + 1, endIndex + 1);
}

// Example usage
const str1 = 'abcdef';
const str2 = 'bcde';
console.log(longestCommonSubstring(str1, str2)); // Output: 'bcde'
