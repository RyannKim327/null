function longestCommonSubsequence(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;

    // Create a 2D array to store lengths of longest common subsequence.
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Characters do not match
            }
        }
    }

    // Reconstruct the longest common subsequence
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs; // Append the matching character
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up in the DP table
        } else {
            j--; // Move left in the DP table
        }
    }

    return lcs; // Return the longest common subsequence
}

// Example usage
const s1 = "abcde";
const s2 = "ace";
const result = longestCommonSubsequence(s1, s2);
console.log(result); // Output: "ace"
