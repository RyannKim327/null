function longestCommonSubsequence(str1: string, str2: string): { length: number; sequence: string } {
    const m = str1.length;
    const n = str2.length;

    // Initialize a 2D array filled with zeros
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

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

    // Length of LCS is in dp[m][n]
    const lcsLength = dp[m][n];

    // To find the actual LCS string, we need to backtrack through the dp table
    let i = m;
    let j = n;
    const lcs: string[] = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            // If characters match, it's part of LCS
            lcs.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            // Move in the direction of the greater value
            i--;
        } else {
            j--;
        }
    }

    // Since we've built the LCS from the end, reverse it
    const lcsStr = lcs.reverse().join('');

    return {
        length: lcsLength,
        sequence: lcsStr,
    };
}

// Example usage:
const str1 = "AGGTAB";
const str2 = "GXTXAYB";

const result = longestCommonSubsequence(str1, str2);
console.log(`Length of LCS: ${result.length}`);      // Output: 4
console.log(`LCS: "${result.sequence}"`);           // Output: "GTAB"
