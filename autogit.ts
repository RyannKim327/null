function longestCommonSubsequence(s1: string, s2: string): string {
    const m: number = s1.length;
    const n: number = s2.length;
    
    // Create a 2D array to store lengths of longest common subsequence.
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Build the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Found a common character
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the max of excluding either character
            }
        }
    }
    
    // Now, let's construct the LCS string from the dp table
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcs = s1[i - 1] + lcs; // If characters match, it's part of LCS
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move in the direction of the greater value
        } else {
            j--;
        }
    }
    
    return lcs; // The longest common subsequence
}

// Example usage:
const str1 = "ABCBDAB";
const str2 = "BDCAB";
console.log(longestCommonSubsequence(str1, str2)); // Output: "BCAB"
