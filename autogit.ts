function longestCommonSubsequence(text1: string, text2: string): string {
    const m = text1.length;
    const n = text2.length;

    // Create a 2D array to store the lengths of longest common subsequence
    const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters match
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters don't match, take the maximum of left or top cell
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Backtrack to find the LCS
    let lcs = '';
    let i = m, j = n;

    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs = text1[i - 1] + lcs; // prepend the character
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // move up in the DP table
        } else {
            j--; // move left in the DP table
        }
    }

    return lcs;
}

// Example usage
const str1 = "abcde";
const str2 = "ace";
console.log(longestCommonSubsequence(str1, str2)); // Output: "ace"
