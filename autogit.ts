function longestCommonSubsequence(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store lengths of LCS for substrings
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct the LCS from the dp array
    let i = m;
    let j = n;
    const lcsChars: string[] = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcsChars.unshift(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcsChars.join('');
}

// Example usage:
const s1 = "ACGTAG";
const s2 = "GXTXAYB";

console.log(longestCommonSubsequence(s1, s2)); // Output: "GTAB"
