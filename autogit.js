function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Build the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct the longest common subsequence
    let result = "";
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result = str1[i - 1] + result;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return result;
}

// Example usage
const str1 = "ABCBDAB";
const str2 = "BDCAB";
const lcs = longestCommonSubsequence(str1, str2);
console.log(lcs); // Output: "BCAB"
