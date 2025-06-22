function longestCommonSubsequence(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D DP table initialized to 0
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Backtrack to find the LCS string
    let i = m, j = n;
    const lcs: string[] = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs.push(str1[i - 1]); // Common character found
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up in the DP table
        } else {
            j--; // Move left in the DP table
        }
    }

    // The LCS is constructed in reverse order, so reverse it
    return lcs.reverse().join('');
}

// Example usage
const str1 = "ABCBDAB";
const str2 = "BDCAB";
console.log("LCS:", longestCommonSubsequence(str1, str2)); // Output: "BCAB"
