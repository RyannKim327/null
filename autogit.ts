function longestCommonSubsequence(A: string, B: string): string {
    const m = A.length;
    const n = B.length;

    // Create a 2D array to store lengths of longest common subsequence
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // characters don't match
            }
        }
    }

    // The length of the longest common subsequence is found at dp[m][n]
    let lcsLength = dp[m][n];

    // Now we can reconstruct the longest common subsequence
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (A[i - 1] === B[j - 1]) {
            lcs = A[i - 1] + lcs; // This character is part of the LCS
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up
        } else {
            j--; // Move left
        }
    }

    return lcs; // Return the longest common subsequence
}

// Example usage:
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
const result = longestCommonSubsequence(str1, str2);
console.log(`Longest Common Subsequence: ${result}`); // Output: "GTAB"
