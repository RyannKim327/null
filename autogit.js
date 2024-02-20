function longestCommonSubsequence(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    
    // Initialize a 2D array to store LCS lengths
    let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Build the dp array bottom-up
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Trace back to find the longest common subsequence
    let index = dp[m][n];
    let lcs = new Array(index);
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs[index - 1] = str1[i - 1];
            i--;
            j--;
            index--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.join('');
}

// Test the function
let str1 = "ABCBDAB";
let str2 = "BDCAB";
console.log(longestCommonSubsequence(str1, str2)); // Output: "BCAB"
