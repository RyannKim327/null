function longestCommonSubsequence(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D DP array initialized with 0
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

    // Reconstruct the LCS from the dp table
    let lcs = "";
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs; // prepend the matching character
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

// Example usage:
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
const lcs = longestCommonSubsequence(str1, str2);
console.log("Longest Common Subsequence:", lcs); // Output: "GTAB"
function longestCommonSubsequenceOptimized(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;

    // Ensure str1 is the shorter string to use less space
    if (m < n) {
        [str1, str2] = [str2, str1];
        [m, n] = [n, m];
    }

    // Initialize two arrays
    let previous = Array(n + 1).fill(0);
    let current = Array(n + 1).fill(0);

    // Fill the dp arrays
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                current[j] = previous[j - 1] + 1;
            } else {
                current[j] = Math.max(previous[j], current[j - 1]);
            }
        }
        // Swap previous and current for next iteration
        [previous, current] = [current, previous];
    }

    // Reconstruct the LCS
    let lcs = "";
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (previous[j] > current[j - 1]) {
            i--;
        } else {
            j--;
        }
        // After moving, swap references again to access correct previous values
        [previous, current] = [current, previous];
    }

    return lcs;
}

// Example usage remains the same
const lcsOptimized = longestCommonSubsequenceOptimized(str1, str2);
console.log("Optimized Longest Common Subsequence:", lcsOptimized); // Output: "GTAB"
