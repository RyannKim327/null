function longestCommonSubsequence(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store lengths of longest common subsequence
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // If the characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the max of the two options
            }
        }
    }
  
    // The length of LCS is found in dp[m][n]
  
    // Now we will reconstruct the LCS from the dp array
    let lcs = '';
    let i = m, j = n;
  
    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs; // Add the matching character
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up in the dp table
        } else {
            j--; // Move left in the dp table
        }
    }
  
    return lcs; // Return the longest common subsequence
}

// Example usage:
const string1 = "AGGTAB";
const string2 = "GXTXAYB";
const lcsResult = longestCommonSubsequence(string1, string2);
console.log(`Longest Common Subsequence: ${lcsResult}`); // Output: "GTAB"
