function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    
    // Create and initialize a 2D array to store the lengths of the common subsequences
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct the longest common subsequence
    let result = "";
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result = str1[i - 1] + result;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return result;
}

// Test the function
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(longestCommonSubsequence(str1, str2)); // Output: GTAB
