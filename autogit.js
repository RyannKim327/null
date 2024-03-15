function longestCommonSubsequence(str1, str2) {
    const dp = Array.from({ length: str1.length + 1 }, () =>
        Array.from({ length: str2.length + 1 }).fill(0)
    );

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let i = str1.length, j = str2.length;
    let lcs = '';
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs;
}

const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
console.log(longestCommonSubsequence(str1, str2)); // Output: GTAB
