function longestCommonSubsequence(str1: string, str2: string): string {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array (matrix) to store lengths of longest common subsequence
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

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

  // The length of the longest common subsequence is in dp[m][n]
  let lcsLength = dp[m][n];
  let lcs = '';

  // Backtrack to find the actual LCS string
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs; // Append character to the LCS
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// Example usage
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
const result = longestCommonSubsequence(str1, str2);
console.log("Longest Common Subsequence:", result); // Output: "GTAB"
