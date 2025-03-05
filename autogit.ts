function longestCommonSubsequence(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;
    
    // Create a 2D array to store lengths of longest common subsequence
    const dp: number[][] = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    
    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Backtrack to find the longest common subsequence
    let lcs = '';
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs; // Append character
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
const s1 = "AGGTAB";
const s2 = "GXTXAYB";
console.log(longestCommonSubsequence(s1, s2)); // Output: "GTAB"
