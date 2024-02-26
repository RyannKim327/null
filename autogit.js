function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store the length of the longest common subsequence
    const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

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
    let i = m, j = n;
    const result = [];
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result.unshift(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return result.join('');
}

// Test the function
const str1 = 'ABAZDC';
const str2 = 'BACBAD';
console.log(longestCommonSubsequence(str1, str2)); // Output: 'ABAD'
