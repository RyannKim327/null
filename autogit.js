function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store the lengths of longest common subsequences
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Backtrack to find the longest common subsequence
    let i = m, j = n;
    let lcs = '';
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
console.log(longestCommonSubsequence(str1, str2)); // Output: "ADH"
