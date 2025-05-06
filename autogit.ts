function longestCommonSubsequence(s1: string, s2: string): string {
  const m = s1.length;
  const n = s2.length;

  // Initialize the DP table with zeros
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  // Build the DP matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find the LCS string
  let i = m,
    j = n;
  const lcs = [];
  while (i > 0 && j > 0) {
    if (s1[i - 1] === s2[j - 1]) {
      lcs.push(s1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // Since we've built lcs backwards, reverse it
  return lcs.reverse().join("");
}

// Example usage
const s1 = "AGGTAB";
const s2 = "GXTXAYB";
console.log(longestCommonSubsequence(s1, s2));  // Output: "GTAB"
