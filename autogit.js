function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let longest = 0;
    let endIndex = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > longest) {
                    longest = dp[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }

    if (longest === 0) {
        return '';
    }

    return str1.substring(endIndex - longest + 1, endIndex + 1);
}

// Example Usage
const str1 = 'abcdef';
const str2 = 'bcdeft';
console.log(longestCommonSubstring(str1, str2)); // Output: "cde"
