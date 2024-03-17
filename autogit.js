function longestCommonSubsequence(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    // Create a 2D array to store the lengths of the common subsequences
    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
    
    // Fill up the dp array using dynamic programming
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Backtrack to find the longest common subsequence
    let lcs = "";
    let i = len1, j = len2;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
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

// Test the function
const str1 = "ABCDGH";
const str2 = "AEDFHR";
console.log(longestCommonSubsequence(str1, str2)); // Output: ADH
