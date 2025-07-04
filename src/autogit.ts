function longestCommonSubsequence(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;
    
    // Create a 2D array to store lengths of longest common subsequence.
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

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

    // Length of LCS is in dp[m][n]
    let lcsLength = dp[m][n];
    
    // Now we need to construct the LCS string
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        // If characters match, then it's part of LCS
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs; // prepend the character
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // move in the direction of the higher value
        } else {
            j--;
        }
    }

    return lcs; // return the LCS string
}

// Example usage
const string1 = "ABCBDAB";
const string2 = "BDCAB";
const lcsResult = longestCommonSubsequence(string1, string2);
console.log(`The longest common subsequence is: "${lcsResult}"`); // Output: "BCAB"
