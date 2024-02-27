function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let maxLength = 0;
    let endIndex = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return '';
    }

    return str1.substr(endIndex - maxLength + 1, maxLength);
}

// Example usage
const str1 = 'abcdef';
const str2 = 'zabcde';
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: 'abcde'
