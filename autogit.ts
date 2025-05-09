function longestCommonSubsequence(str1: string, str2: string): string {
    const len1 = str1.length;
    const len2 = str2.length;

    // Create a 2D array to store lengths of longest common subsequence.
    const dp: number[][] = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // If characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // If characters don't match
            }
        }
    }

    // Now reconstruct the LCS from the dp array
    let lcs = '';
    let i = len1;
    let j = len2;

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs; // Current character is part of the LCS
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up
        } else {
            j--; // Move left
        }
    }

    return lcs;
}

// Example usage
const str1 = "AGGTAB";
const str2 = "GXTXAYB";

console.log(longestCommonSubsequence(str1, str2)); // Outputs: "GTAB"
