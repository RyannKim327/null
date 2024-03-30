function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let maxLength = 0;
    let end = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    end = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return str1.slice(end - maxLength + 1, end + 1);
}

const str1 = "abcdef";
const str2 = "bcdeft";
console.log(longestCommonSubstring(str1, str2)); // Output will be "cdef"
