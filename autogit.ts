function longestCommonSubsequence(text1: string, text2: string): string {
    const m = text1.length;
    const n = text2.length;

    // dp[i][j] will store length of LCS of text1[0..i-1] and text2[0..j-1]
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // Build the dp table in bottom-up manner
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct the LCS string from the dp table
    let lcs = '';
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs = text1[i - 1] + lcs;
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

// Example usage:
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(longestCommonSubsequence(str1, str2)); // Output: "GTAB"
