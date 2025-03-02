function longestCommonSubsequence(text1: string, text2: string): string {
    const m = text1.length;
    const n = text2.length;

    // Create a 2D array to store lengths of longest common subsequence.
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Characters match
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the max from left or above
            }
        }
    }

    // Reconstruct the longest common subsequence
    let lcsLength = dp[m][n];
    let lcs = '';
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            lcs = text1[i - 1] + lcs; // Append current character
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--; // Move up
        } else {
            j--; // Move left
        }
    }

    return lcs;
}

// Example usage
const str1 = "abcde";
const str2 = "ace";
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: "ace"
